import React from 'react';

const Colours = () => (
  <div className="atoms-section" id="colours">
    <h1>Colours</h1>
    <div>
      <h4>Primary palette</h4>
      <div className="box-colour colour-sapphure-blue" data-name="$colour-sapphure-blue" />
      <div className="box-colour colour-sea-blue" data-name="$colour-sea-blue" />
      <div className="box-colour colour-vivid-cerulean" data-name="$colour-vivid-cerulean" />
      <div className="box-colour colour-medium-turquoise" data-name="$colour-medium-turquoise" />
    </div>

    <div>
      <h4>Grey palette</h4>
      <div className="box-colour colour-yankees-blue" data-name="$colour-yankees-blue" />
      <div className="box-colour colour-charcoal" data-name="$colour-charcoal" />
      <div className="box-colour colour-weldon-blue" data-name="$colour-weldon-blue" />
      <div className="box-colour colour-pastel-blue" data-name="$colour-pastel-blue" />
      <div className="box-colour colour-azureish-white" data-name="$colour-azureish-white" />
      <div className="box-colour colour-sky-white" data-name="$colour-sky-white" />
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
