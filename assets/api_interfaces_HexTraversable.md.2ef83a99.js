import{_ as e,c as t,o as a,a as r}from"./app.a4c5765d.js";const p=JSON.parse('{"title":"Interface: HexTraversable<T>","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Implemented by","slug":"implemented-by","link":"#implemented-by","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"createHex","slug":"createhex","link":"#createhex","children":[]},{"level":3,"title":"getHex","slug":"gethex","link":"#gethex","children":[]},{"level":3,"title":"hasHex","slug":"hashex","link":"#hashex","children":[]},{"level":3,"title":"setHexes","slug":"sethexes","link":"#sethexes","children":[]},{"level":3,"title":"traverse","slug":"traverse","link":"#traverse","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"size","slug":"size","link":"#size","children":[]}]}],"relativePath":"api/interfaces/HexTraversable.md","lastUpdated":1673899083000}'),d={name:"api/interfaces/HexTraversable.md"},h=r('<h1 id="interface-hextraversable-t" tabindex="-1">Interface: HexTraversable&lt;T&gt; <a class="header-anchor" href="#interface-hextraversable-t" aria-hidden="true">#</a></h1><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./../classes/Hex.html"><code>Hex</code></a></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="./HexStore.html"><code>HexStore</code></a>&lt;<code>T</code>&gt;</p><p>↳ <strong><code>HexTraversable</code></strong></p></li></ul><h2 id="implemented-by" tabindex="-1">Implemented by <a class="header-anchor" href="#implemented-by" aria-hidden="true">#</a></h2><ul><li><a href="./../classes/Grid.html"><code>Grid</code></a></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./HexTraversable.html#createHex">createHex</a></li><li><a href="./HexTraversable.html#getHex">getHex</a></li><li><a href="./HexTraversable.html#hasHex">hasHex</a></li><li><a href="./HexTraversable.html#setHexes">setHexes</a></li><li><a href="./HexTraversable.html#traverse">traverse</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./HexTraversable.html#size">size</a></li></ul><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="createhex" tabindex="-1"><a id="createHex" name="createHex"></a> createHex <a class="header-anchor" href="#createhex" aria-hidden="true">#</a></h3><p><strong>createHex</strong>(<code>coordinates?</code>): <code>T</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>coordinates?</code></td><td style="text-align:left;"><a href="./../#HexCoordinates"><code>HexCoordinates</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>T</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L69" target="_blank" rel="noreferrer">grid/types.ts:69</a></p><hr><h3 id="gethex" tabindex="-1"><a id="getHex" name="getHex"></a> getHex <a class="header-anchor" href="#gethex" aria-hidden="true">#</a></h3><p><strong>getHex</strong>(<code>coordinates</code>): <code>undefined</code> | <code>T</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>coordinates</code></td><td style="text-align:left;"><a href="./../#HexCoordinates"><code>HexCoordinates</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>undefined</code> | <code>T</code></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a></h4><p><a href="./HexStore.html">HexStore</a>.<a href="./HexStore.html#getHex">getHex</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L46" target="_blank" rel="noreferrer">grid/types.ts:46</a></p><hr><h3 id="hashex" tabindex="-1"><a id="hasHex" name="hasHex"></a> hasHex <a class="header-anchor" href="#hashex" aria-hidden="true">#</a></h3><p><strong>hasHex</strong>(<code>hex</code>): <code>boolean</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hex</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>boolean</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a></h4><p><a href="./HexStore.html">HexStore</a>.<a href="./HexStore.html#hasHex">hasHex</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L47" target="_blank" rel="noreferrer">grid/types.ts:47</a></p><hr><h3 id="sethexes" tabindex="-1"><a id="setHexes" name="setHexes"></a> setHexes <a class="header-anchor" href="#sethexes" aria-hidden="true">#</a></h3><p><strong>setHexes</strong>(<code>hexesOrCoordinates</code>): <a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hexesOrCoordinates</code></td><td style="text-align:left;"><code>Iterable</code>&lt;<a href="./../#HexCoordinates"><code>HexCoordinates</code></a> | <code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a></h4><p><a href="./HexStore.html">HexStore</a>.<a href="./HexStore.html#setHexes">setHexes</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L48" target="_blank" rel="noreferrer">grid/types.ts:48</a></p><hr><h3 id="traverse" tabindex="-1"><a id="traverse" name="traverse"></a> traverse <a class="header-anchor" href="#traverse" aria-hidden="true">#</a></h3><p><strong>traverse</strong>(<code>traversers</code>, <code>options?</code>): <a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>traversers</code></td><td style="text-align:left;"><a href="./../#Traverser"><code>Traverser</code></a>&lt;<code>T</code>, <code>T</code>[]&gt; | <a href="./../#Traverser"><code>Traverser</code></a>&lt;<code>T</code>, <code>T</code>[]&gt;[]</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.bail?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L70" target="_blank" rel="noreferrer">grid/types.ts:70</a></p><p><strong>traverse</strong>(<code>hexes</code>, <code>options?</code>): <a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hexes</code></td><td style="text-align:left;"><code>Iterable</code>&lt;<code>T</code>&gt;</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.bail?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L71" target="_blank" rel="noreferrer">grid/types.ts:71</a></p><p><strong>traverse</strong>(<code>grid</code>, <code>options?</code>): <a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grid</code></td><td style="text-align:left;"><a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.bail?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><a href="./HexTraversable.html"><code>HexTraversable</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L72" target="_blank" rel="noreferrer">grid/types.ts:72</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="size" tabindex="-1"><a id="size" name="size"></a> size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3><p><code>Readonly</code> <strong>size</strong>: <code>number</code></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a></h4><p><a href="./HexStore.html">HexStore</a>.<a href="./HexStore.html#size">size</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/master/src/grid/types.ts#L45" target="_blank" rel="noreferrer">grid/types.ts:45</a></p>',84),s=[h];function i(l,o,n,c,x,f){return a(),t("div",null,s)}const g=e(d,[["render",i]]);export{p as __pageData,g as default};
