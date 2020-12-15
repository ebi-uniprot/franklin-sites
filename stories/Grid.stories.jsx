import React from 'react';
// import "../styles/common/grid";

export default {
  title: 'Grid/Grid',
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
  cell2: {
    background: 'blue',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
};

export const gridWithGutters = () => (
  <div style={gridStyles.wrapper}>
    <h3>Uniprot Grid with Gutters</h3>
    <div
      style={gridStyles.grid}
      className="uniprot-grid uniprot-grid--with-gutters"
    >
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-12"
      >
        span-12
      </div>
    </div>
    <div
      style={gridStyles.grid}
      className="uniprot-grid uniprot-grid--with-gutters"
    >
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
    <div
      style={gridStyles.grid}
      className="uniprot-grid uniprot-grid--with-gutters"
    >
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
    <div
      style={gridStyles.grid}
      className="uniprot-grid uniprot-grid--with-gutters"
    >
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-4"
      >
        span-4
      </div>
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-4"
      >
        span-4
      </div>
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-4"
      >
        span-4
      </div>
    </div>
    <div
      style={gridStyles.grid}
      className="uniprot-grid uniprot-grid--with-gutters"
    >
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-1"
      >
        span-1
      </div>
    </div>
  </div>
);

export const gridWithOffset = () => (
  <div style={gridStyles.wrapper}>
    <h3>Uniprot Grid with Offsets</h3>
    <div style={gridStyles.grid} className="uniprot-grid">
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-6 uniprot-grid-cell--offset-3"
      >
        span-6 offset-3
      </div>
    </div>
    <div style={gridStyles.grid} className="uniprot-grid">
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-4 uniprot-grid-cell--offset-4"
      >
        span-4 offset-8
      </div>
    </div>
    <div style={gridStyles.grid} className="uniprot-grid">
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--offset-10 uniprot-grid-cell--span-2"
      >
        span-2 offset-10
      </div>
    </div>
  </div>
);

export const girdHeroContainer = () => (
  <div style={gridStyles.wrapper}>
    <h3>HeroContainer Example</h3>
    <div style={gridStyles.grid} className="uniprot-grid">
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-3 uniprot-grid-cell--offset-1"
      >
        span-3
      </div>
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-3"
      >
        span-3
      </div>
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-3"
      >
        span-3
      </div>
      <div
        style={gridStyles.cell}
        className="uniprot-grid-cell uniprot-grid-cell--span-3"
      >
        span-3
      </div>
    </div>
  </div>
);
