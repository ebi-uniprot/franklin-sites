import React from 'react';

const Colours = () => (
  <div className="atoms-section" id="colours">
    <h1>Colours</h1>
    <div>
      <h4>Primary palette</h4>
      <div className="box-colour colour-dark-blue" data-name="$colour-dark-blue" />
      <div className="box-colour colour-uniprot-blue" data-name="$colour-uniprot-blue" />
      <div className="box-colour colour-medium-blue" data-name="$colour-medium-blue" />
      <div className="box-colour colour-light-blue" data-name="$colour-light-blue" />
    </div>

    <div>
      <h4>Grey palette</h4>
      <div className="box-colour colour-black" data-name="$colour-black" />
      <div className="box-colour colour-dark-grey" data-name="$colour-dark-grey" />
      <div className="box-colour colour-cool-grey" data-name="$colour-cool-grey" />
      <div className="box-colour colour-medium-grey" data-name="$colour-medium-grey" />
      <div className="box-colour colour-light-grey" data-name="$colour-light-grey" />
      <div className="box-colour colour-seashell-grey" data-name="$colour-seashell-grey" />
    </div>

    <div>
      <h4>Curation palette</h4>
      <div className="box-colour colour-reviewed" data-name="$colour-reviewed" />
      <div className="box-colour colour-unreviewed" data-name="$colour-unreviewed" />
    </div>

    <div>
      <h4>Namespace palette</h4>
      <div className="box-colour colour-uniref" data-name="$colour-uniref" />
      <div className="box-colour colour-uniparc" data-name="$colour-uniparc" />
      <div className="box-colour colour-proteomes" data-name="$colour-proteomes" />
      <div className="box-colour colour-supporting-data" data-name="$colour-supporting-data" />
      <div className="box-colour colour-help" data-name="$colour-help" />
      <div
        className="box-colour colour-annotation-systems"
        data-name="$colour-annotation-systems"
      />
    </div>
  </div>
);

export default Colours;
