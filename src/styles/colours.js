// https://chir.ag/projects/name-that-color/#6195ED
const colorDefinition = {
  // Note: Used to be defined in foundation _settings.scss
  // should be removed
  primaryColor: '#1779ba',
  // Primary palette
  colourSapphireBlue: '#014371',
  colourSeaBlue: '#00639a',
  colourVividCerulean: '#00a6d5',
  colourMediumTurquoise: '#46d6fa',
  colourGainsborough: '#d2dce3',
  // Grey palette
  colourYankeesBlue: '#161d39',
  colourIndependence: '#4e5a71',
  colourWeldonBlue: '#8194a1',
  colourPastelBlue: '#abc7d6',
  colourPlatinum: '#e4e8eb',
  colourSkyWhite: '#fbfeff',
  // Curation
  colourBuddhaGold: '#c39b00',
  colourSilver: '#c0c0c0',
  // Namespaces
  colourJaffa: '#f2994c',
  colourDeYork: '#88c19d',
  colourTerracotta: '#e56358',
  colourAmethyst: '#A748BD',
  colourCalypso: '#357B92',
  colourCerulean: '#00A6D5',
  colourTurmeric: '#B8CE48',
  colourSunglow: '#ffcc33',
  colourFroly: '#f36968',
  colourSalem: '#108f3b',
  colourMalibu: '#79cbf8',
  colourCoyoteBrown: '#966336',
  colourOuterSpace: '#374343',
};

// node-sass-json-importer doesn't support ES6 exports
module.exports = {
  ...colorDefinition,
  colourUniprotkb: colorDefinition.colourSeaBlue,
  colourReviewed: colorDefinition.colourBuddhaGold,
  colourUnreviewed: colorDefinition.colourSilver,
  colourUniref: colorDefinition.colourJaffa,
  colourUniparc: colorDefinition.colourDeYork,
  colourProteomes: colorDefinition.colourTerracotta,
  colourSupportingData: colorDefinition.colourPastelBlue,
  colourPeptideSearch: colorDefinition.colourAmethyst,
  colourIdMapping: colorDefinition.colourCalypso,
  colourBlast: colorDefinition.colourCerulean,
  colourAlign: colorDefinition.colourTurmeric,
  colourWarning: colorDefinition.colourSunglow,
  colourFailure: colorDefinition.colourFroly,
  colourSuccess: colorDefinition.colourSalem,
  colourInfo: colorDefinition.colourMalibu,
  colourLink: colorDefinition.colourSapphireBlue,
  colourSelected: colorDefinition.colourGainsborough,
};
