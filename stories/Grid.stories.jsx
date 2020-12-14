import React from 'react';
// import "../styles/common/grid";

export default {
  title: 'Grid',
};

const gridStyles = {
  wrapper: {
    border: '1px solid #ccc',
    padding: '0.5rem',
    margin: '1rem 0',
  },
  grid: {
    margin: '1rem 0',
  },
  cell: {
    background: '#ccc',
    border: '1px solid #000',
  },
};

export const grid = () => (
  <>
    <div style={gridStyles.wrapper}>
      <h3>Uniprot Grid</h3>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-12"
        >
          span-12
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-6"
        >
          span-6
        </div>
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-6"
        >
          span-6
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-4"
        >
          span-4
        </div>
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-8"
        >
          span-8
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell uniprot-grid-cell--span-4"
        >
          span-4
        </div>
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell uniprot-grid-cell--span-4"
        >
          span-4
        </div>
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell uniprot-grid-cell--span-4"
        >
          span-4
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell uniprot-grid-cell--span-1"
        >
          span-1
        </div>
      </div>
    </div>
    <div style={gridStyles.wrapper}>
      <h3>Uniprot Grid with Offsets</h3>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell--span-6 uniprot-grid-cell--offset-3"
        >
          span-6 offset-3
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell--span-4 uniprot-grid-cell--offset-4"
        >
          span-4 offset-8
        </div>
      </div>
      <div style={gridStyles.grid} className="uniprot-grid">
        <div
          style={gridStyles.cell}
          className="uniprot-grid-cell--span-2 uniprot-grid-cell--offset-10"
        >
          span-2 offset-10
        </div>
      </div>
    </div>
  </>
);
