import React from 'react';
// import "../styles/common/grid";

export default {
  title: 'Grid',
};

const gridStyles = {
  grid: {
    margin: '1rem 0',
  },
  cell: {
    background: '#ccc',
    '--grid-background': '#ccc',
    padding: '.5rem',
  },
};

export const grid = () => (
  <>
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
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell--span-11 uniprot-grid-cell--offset-1"
        >
          span-11 offset-1
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell--span-5 uniprot-grid-cell--offset-2"
        >
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
        overflow into the most left and right gutters. Define the colour by
        using the css variable <code>--grid-background</code>
      </p>
    </div>
  </>
);
