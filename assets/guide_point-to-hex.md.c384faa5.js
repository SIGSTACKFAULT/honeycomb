import{d as v,r,c as l,t as y,b as i,u as D,e as o,w as F,v as C,f as A,a as u,o as p,_ as h}from"./app.db2d33eb.js";import{d as m,G as b,r as g,T as x}from"./chunks/TileGrid.4ba69de3.js";const _=u(`<h1 id="point-\u2192-hex" tabindex="-1" data-v-0d1fd4d2>Point \u2192 hex <a class="header-anchor" href="#point-\u2192-hex" aria-hidden="true" data-v-0d1fd4d2>#</a></h1><p data-v-0d1fd4d2>Translating a point (e.g. screen pixel) to the corresponding hex in a grid is possible with <code data-v-0d1fd4d2>Grid</code>&#39;s <code data-v-0d1fd4d2>pointToHex()</code> method. It also works with irregularly shaped hexes.</p><p data-v-0d1fd4d2><code data-v-0d1fd4d2>pointToHex()</code> accepts a second argument to indicate what to do when a point corresponds to a hex <em data-v-0d1fd4d2>outside</em> the grid. By default it creates the hex and returns that.</p><div class="language-typescript line-numbers-mode" data-v-0d1fd4d2><button class="copy" data-v-0d1fd4d2></button><span class="lang" data-v-0d1fd4d2>typescript</span><pre data-v-0d1fd4d2><code data-v-0d1fd4d2><span class="line" data-v-0d1fd4d2><span style="color:#89DDFF;" data-v-0d1fd4d2>import</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>defineHex</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>Grid</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>rectangle</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>}</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>from</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>&#39;</span><span style="color:#C3E88D;" data-v-0d1fd4d2>honeycomb-grid</span><span style="color:#89DDFF;" data-v-0d1fd4d2>&#39;</span></span>
<span class="line" data-v-0d1fd4d2></span>
<span class="line" data-v-0d1fd4d2><span style="color:#C792EA;" data-v-0d1fd4d2>const</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> WideHex </span><span style="color:#89DDFF;" data-v-0d1fd4d2>=</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#82AAFF;" data-v-0d1fd4d2>defineHex</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>(</span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span></span>
<span class="line" data-v-0d1fd4d2><span style="color:#A6ACCD;" data-v-0d1fd4d2>  </span><span style="color:#F07178;" data-v-0d1fd4d2>dimensions</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F07178;" data-v-0d1fd4d2>xRadius</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F78C6C;" data-v-0d1fd4d2>50</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F07178;" data-v-0d1fd4d2>yRadius</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F78C6C;" data-v-0d1fd4d2>30</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>},</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#676E95;" data-v-0d1fd4d2>// wide hexes</span></span>
<span class="line" data-v-0d1fd4d2><span style="color:#89DDFF;" data-v-0d1fd4d2>}</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>)</span></span>
<span class="line" data-v-0d1fd4d2><span style="color:#C792EA;" data-v-0d1fd4d2>const</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> grid </span><span style="color:#89DDFF;" data-v-0d1fd4d2>=</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>new</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#82AAFF;" data-v-0d1fd4d2>Grid</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>(WideHex</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#82AAFF;" data-v-0d1fd4d2>rectangle</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>(</span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F07178;" data-v-0d1fd4d2>width</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F78C6C;" data-v-0d1fd4d2>5</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F07178;" data-v-0d1fd4d2>height</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#F78C6C;" data-v-0d1fd4d2>5</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>}</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>))</span></span>
<span class="line" data-v-0d1fd4d2></span>
<span class="line" data-v-0d1fd4d2><span style="color:#A6ACCD;" data-v-0d1fd4d2>document</span><span style="color:#89DDFF;" data-v-0d1fd4d2>.</span><span style="color:#82AAFF;" data-v-0d1fd4d2>addEventListener</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>(</span><span style="color:#89DDFF;" data-v-0d1fd4d2>&#39;</span><span style="color:#C3E88D;" data-v-0d1fd4d2>click</span><span style="color:#89DDFF;" data-v-0d1fd4d2>&#39;</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>({</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>offsetX</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>offsetY</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>})</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#C792EA;" data-v-0d1fd4d2>=&gt;</span><span style="color:#A6ACCD;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span></span>
<span class="line highlighted" data-v-0d1fd4d2><span style="color:#F07178;" data-v-0d1fd4d2>  </span><span style="color:#C792EA;" data-v-0d1fd4d2>const</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>hex</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>=</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>grid</span><span style="color:#89DDFF;" data-v-0d1fd4d2>.</span><span style="color:#82AAFF;" data-v-0d1fd4d2>pointToHex</span><span style="color:#F07178;" data-v-0d1fd4d2>(</span></span>
<span class="line highlighted" data-v-0d1fd4d2><span style="color:#F07178;" data-v-0d1fd4d2>    </span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span><span style="color:#F07178;" data-v-0d1fd4d2> x</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>offsetX</span><span style="color:#89DDFF;" data-v-0d1fd4d2>,</span><span style="color:#F07178;" data-v-0d1fd4d2> y</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>offsetY</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>},</span></span>
<span class="line highlighted" data-v-0d1fd4d2><span style="color:#F07178;" data-v-0d1fd4d2>    </span><span style="color:#89DDFF;" data-v-0d1fd4d2>{</span><span style="color:#F07178;" data-v-0d1fd4d2> allowOutside</span><span style="color:#89DDFF;" data-v-0d1fd4d2>:</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#FF9CAC;" data-v-0d1fd4d2>false</span><span style="color:#F07178;" data-v-0d1fd4d2> </span><span style="color:#89DDFF;" data-v-0d1fd4d2>}</span></span>
<span class="line highlighted" data-v-0d1fd4d2><span style="color:#F07178;" data-v-0d1fd4d2>  )</span></span>
<span class="line" data-v-0d1fd4d2><span style="color:#F07178;" data-v-0d1fd4d2>  </span><span style="color:#A6ACCD;" data-v-0d1fd4d2>console</span><span style="color:#89DDFF;" data-v-0d1fd4d2>.</span><span style="color:#82AAFF;" data-v-0d1fd4d2>log</span><span style="color:#F07178;" data-v-0d1fd4d2>(</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>hex</span><span style="color:#F07178;" data-v-0d1fd4d2>)</span></span>
<span class="line" data-v-0d1fd4d2><span style="color:#89DDFF;" data-v-0d1fd4d2>}</span><span style="color:#A6ACCD;" data-v-0d1fd4d2>)</span></span>
<span class="line" data-v-0d1fd4d2></span></code></pre><div class="line-numbers-wrapper" data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>1</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>2</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>3</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>4</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>5</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>6</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>7</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>8</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>9</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>10</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>11</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>12</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>13</span><br data-v-0d1fd4d2><span class="line-number" data-v-0d1fd4d2>14</span><br data-v-0d1fd4d2></div></div>`,4),w={key:0,class:"output"},k={key:1,class:"output"},T={class:"controls"},B=JSON.parse('{"title":"Point \u2192 hex","description":"","frontmatter":{},"headers":[],"relativePath":"guide/point-to-hex.md","lastUpdated":1661890287000}'),H={name:"guide/point-to-hex.md"},E=v({...H,setup(G){const s=m({dimensions:{xRadius:50,yRadius:30}}),e=new b(s,g({width:5,height:5})),n=r(),t=r(!1),f=({offsetX:c,offsetY:d})=>{const a=e.pointToHex({x:c-s.prototype.width/2,y:d-s.prototype.height/2},{allowOutside:t.value});n.value=a?a.toString():"outside"};return(c,d)=>(p(),l("div",null,[_,n.value?(p(),l("p",w,"Tile clicked: "+y(n.value),1)):(p(),l("p",k,"Click somewhere below")),i(x,{grid:D(e),onClick:f,class:"grid"},null,8,["grid"]),o("div",T,[o("label",null,[F(o("input",{type:"checkbox","onUpdate:modelValue":d[0]||(d[0]=a=>t.value=a)},null,512),[[C,t.value]]),A(" Allow outside ")])])]))}});const O=h(E,[["__scopeId","data-v-0d1fd4d2"]]);export{B as __pageData,O as default};
