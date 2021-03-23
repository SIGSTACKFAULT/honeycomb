import { isFunction, isObject, isPoint } from '../../utils'
import { DefaultHexPrototype, Ellipse, Hex, HexSettings, Orientation, Point, Rectangle } from '../types'
import { corners } from './corners'
import { height } from './height'
import { hexToPoint } from './hexToPoint'
import { isFlat } from './isFlat'
import { isPointy } from './isPointy'
import { width } from './width'

export interface HexPrototypeOptions {
  dimensions: Ellipse | Rectangle | number
  orientation: Orientation | 'pointy' | 'flat'
  origin: Point | (<T extends Omit<DefaultHexPrototype, 'origin'>>(hexPrototype: T) => Point)
  offset: number
}

export const defaultHexSettings: HexSettings = {
  dimensions: { xRadius: 1, yRadius: 1 },
  orientation: Orientation.POINTY,
  origin: { x: 0, y: 0 },
  offset: -1,
}

const normalizeDimensions = ({ dimensions, orientation }: HexPrototypeOptions) => {
  if (isObject(dimensions)) {
    if (Number.isFinite((dimensions as Ellipse).xRadius) && Number.isFinite((dimensions as Ellipse).yRadius)) {
      return { ...(dimensions as Ellipse) }
    }

    const { width, height } = dimensions as Rectangle
    if (Number.isFinite(width) && Number.isFinite(height)) {
      return orientation === Orientation.POINTY
        ? { xRadius: width / Math.sqrt(3), yRadius: height / 2 }
        : { xRadius: width / 2, yRadius: height / Math.sqrt(3) }
    }
  }

  if (Number.isFinite(dimensions as number)) {
    return { xRadius: dimensions, yRadius: dimensions } as Ellipse
  }

  throw new TypeError(
    `Invalid dimensions: ${dimensions}. Dimensions must be expressed as an Ellipse ({ xRadius: number, yRadius: number }), a Rectangle ({ width: number, height: number }) or a number.`,
  )
}

const normalizeOrientation = ({ orientation }: HexPrototypeOptions) => {
  orientation = orientation.toUpperCase() as Orientation

  if (orientation === Orientation.POINTY || orientation === Orientation.FLAT) {
    return orientation
  }

  throw new TypeError(`Invalid orientation: ${orientation}. Orientation must be either 'POINTY' or 'FLAT'.`)
}

// origin can be a function that will be called with the almost-complete hex prototype (complete except for origin)
const normalizeOrigin = <T extends DefaultHexPrototype>(
  prototype: Omit<T, 'origin'> & Pick<HexPrototypeOptions, 'origin'>,
) => {
  if (isPoint(prototype.origin)) {
    return { ...prototype.origin } as Point
  }

  if (isFunction(prototype.origin)) {
    return prototype.origin(prototype)
  }

  throw new TypeError(
    `Invalid origin: ${prototype.origin}. Origin must be expressed as a Point ({ x: number, y: number }) or a function that returns a Point.`,
  )
}

const assertOffset = ({ offset }: HexPrototypeOptions) => {
  if (!Number.isFinite(offset)) {
    throw new TypeError(`Invalid offset: ${offset}. Offset must be a number.`)
  }

  return offset
}

export const createHexPrototype = <T extends DefaultHexPrototype>(
  customPrototype?: T | Partial<HexPrototypeOptions>,
) => {
  const prototype = {
    ...defaultHexSettings,

    // todo: make this a getter and name it `asPoint`?
    toPoint() {
      return hexToPoint(this)
    },

    // todo: add to docs that any of the above methods will be overwritten when present in customPrototype
    ...customPrototype,
  } as T & HexPrototypeOptions

  // use Object.defineProperties() to create readonly properties
  Object.defineProperties(prototype, {
    // todo: all props set with `value` are writable (somehow the default `writable: false` doesn't apply). Not sure if this is a problem though
    // see: Object.getOwnPropertyDescriptors(hexPrototype)
    dimensions: { value: normalizeDimensions(prototype) },
    orientation: { value: normalizeOrientation(prototype) },
    // origin is set in the final "step"
    offset: { value: assertOffset(prototype) },
    corners: {
      get() {
        return corners(this, this)
      },
    },
    height: {
      get() {
        return height(this)
      },
    },
    isFlat: {
      get() {
        return isFlat(this)
      },
    },
    isPointy: {
      get() {
        return isPointy(this)
      },
    },
    s: {
      get() {
        // todo: typescript doesn't support this somehow: return this._s ?? -this.q - this.r
        return Number.isFinite(this._s) ? this._s : -this.q - this.r
      },
      set(s: number) {
        this._s = s
      },
    },
    width: {
      get() {
        return width(this)
      },
    },
  } as PropertyDescriptorMap & ThisType<T & Hex>)

  return Object.defineProperties(prototype, {
    origin: { value: normalizeOrigin<T>(prototype) },
  }) as T
}
