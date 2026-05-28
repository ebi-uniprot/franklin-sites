import{o as e}from"./preload-helper-BKhVKv2_.js";import{t}from"./iframe-BLNvzUQj.js";var n,r,i,a,o,s,c;e((()=>{n=t(),a={title:`Core/Grid`},o={grid:{margin:`1rem 0`,"--grid-background":`#ccc`},cell:{background:`#ccc`,padding:`.5rem`},cell2:{background:`blue`,paddingTop:`0.5rem`,paddingBottom:`0.5rem`}},s=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`h3`,{children:`Uniprot Grid`}),(0,n.jsx)(`div`,{style:o.grid,className:`uniprot-grid`,children:(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-12`,children:`span-12`})}),(0,n.jsxs)(`div`,{style:o.grid,className:`uniprot-grid`,children:[(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-6`,children:`span-6`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-6`,children:`span-6`})]}),(0,n.jsxs)(`div`,{style:o.grid,className:`uniprot-grid`,children:[(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-4`,children:`span-4`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-8`,children:`span-8`})]}),(0,n.jsxs)(`div`,{style:o.grid,className:`uniprot-grid`,children:[(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-4`,children:`span-4`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-4`,children:`span-4`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-4`,children:`span-4`})]}),(0,n.jsxs)(`div`,{style:o.grid,className:`uniprot-grid`,children:[(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-1`,children:`span-1`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-11`,children:`span-1`})]}),(0,n.jsx)(`div`,{style:o.grid,className:`uniprot-grid`,children:(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-11 uniprot-grid-cell--offset-1`,children:`span-11 offset-1`})}),(0,n.jsxs)(`div`,{style:o.grid,className:`uniprot-grid`,children:[(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-5 uniprot-grid-cell--offset-2`,children:`span-5 offset-2`}),(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-5`,children:`span-5`})]})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`h3`,{children:`Grid modifiers`}),(0,n.jsxs)(`p`,{children:[(0,n.jsx)(`code`,{children:`--centered`}),`: To use if the grid should be centered on the page instead of full width.`]}),(0,n.jsxs)(`p`,{children:[(0,n.jsx)(`code`,{children:`--with-bleed`}),`: Sometimes, you need the grid background to overflow into the leftmost and rightmost gutters. Define the colour by using the css variable `,(0,n.jsx)(`code`,{children:`--grid-background`})]}),(0,n.jsx)(`div`,{style:o.grid,className:`uniprot-grid uniprot-grid--centered uniprot-grid--with-bleed`,children:(0,n.jsx)(`div`,{style:o.cell,className:`uniprot-grid-cell--span-12`,children:`span-12`})})]})]}),s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => <>
    <div>
      <h3>Uniprot Grid</h3>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-12">
          span-12
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-6">
          span-6
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-6">
          span-6
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-4">
          span-4
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-8">
          span-8
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-4">
          span-4
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-4">
          span-4
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-4">
          span-4
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-1">
          span-1
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-11">
          span-1
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-11 uniprot-grid-cell--offset-1">
          span-11 offset-1
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-5 uniprot-grid-cell--offset-2">
          span-5 offset-2
        </div>
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-5">
          span-5
        </div>
      </div>
    </div>
    <div>
      <h3>Grid modifiers</h3>
      <p>
        <code>--centered</code>: To use if the grid should be centered on the
        page instead of full width.
      </p>
      <p>
        <code>--with-bleed</code>: Sometimes, you need the grid background to
        overflow into the leftmost and rightmost gutters. Define the colour by
        using the css variable <code>--grid-background</code>
      </p>
      <div style={gridStyles.grid} className="uniprot-grid uniprot-grid--centered uniprot-grid--with-bleed">
        <div style={gridStyles.cell} className="uniprot-grid-cell--span-12">
          span-12
        </div>
      </div>
    </div>
  </>`,...(i=s.parameters)==null||(i=i.docs)==null?void 0:i.source}}},c=[`Grid`]}))();export{s as Grid,c as __namedExportsOrder,a as default};