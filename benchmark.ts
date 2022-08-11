import { add, cycle, suite } from 'benny'
// import from the root module, which points to /dist
import { defineHex, Grid, rectangle } from '.'

const Hex = defineHex({ dimensions: 30 })

suite(
  'Grid creation',
  add('10⨉10 rectangle', () => {
    new Grid(Hex, rectangle({ width: 10, height: 10 }))
  }),
  add('100⨉100 rectangle', () => {
    new Grid(Hex, rectangle({ width: 100, height: 100 }))
  }),
  add('1000⨉1000 rectangle', () => {
    new Grid(Hex, rectangle({ width: 1000, height: 1000 }))
  }),
  cycle(),
)
