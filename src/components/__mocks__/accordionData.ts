import { AccordionItem } from '../accordion-search';

const accordionData: AccordionItem[] = [
  {
    label: 'UniProt Data',
    id: 'uniprot-data',
    items: [
      {
        id: 'names_&_taxonomy',
        label: 'Names & Taxonomy',
        items: [
          {
            id: 'id',
            label: 'Entry Name',
          },
          {
            id: 'gene_names',
            label: 'Gene Names',
          },
          {
            id: 'gene_oln',
            label: 'Gene Names (ordered locus)',
          },
          {
            id: 'gene_orf',
            label: 'Gene Names (ORF)',
          },
          {
            id: 'gene_primary',
            label: 'Gene Names (primary)',
          },
          {
            id: 'gene_synonym',
            label: 'Gene Names (synonym)',
          },
          {
            id: 'organism_name',
            label: 'Organism',
          },
          {
            id: 'organism_id',
            label: 'Organism (ID)',
          },
          {
            id: 'protein_name',
            label: 'Protein names',
          },
          {
            id: 'xref_proteomes',
            label: 'Proteomes',
          },
          {
            id: 'lineage',
            label: 'Taxonomic lineage',
          },
          {
            id: 'lineage_ids',
            label: 'Taxonomic lineage (Ids)',
          },
          {
            id: 'virus_hosts',
            label: 'Virus hosts',
          },
        ],
      },
      {
        id: 'sequences',
        label: 'Sequences',
        items: [
          {
            id: 'cc_alternative_products',
            label: 'Alternative products (isoforms)',
          },
          {
            id: 'ft_var_seq',
            label: 'Alternative sequence',
          },
          {
            id: 'error_gmodel_pred',
            label: 'Erroneous gene model prediction',
          },
          {
            id: 'fragment',
            label: 'Fragment',
          },
          {
            id: 'organelle',
            label: 'Gene encoded by',
          },
          {
            id: 'length',
            label: 'Length',
          },
          {
            id: 'mass',
            label: 'Mass',
          },
          {
            id: 'cc_mass_spectrometry',
            label: 'Mass spectrometry',
          },
          {
            id: 'ft_variant',
            label: 'Natural variant',
          },
          {
            id: 'ft_non_cons',
            label: 'Non-adjacent residues',
          },
          {
            id: 'ft_non_std',
            label: 'Non-standard residue',
          },
          {
            id: 'ft_non_ter',
            label: 'Non-terminal residue',
          },
          {
            id: 'cc_polymorphism',
            label: 'Polymorphism',
          },
          {
            id: 'cc_rna_editing',
            label: 'RNA Editing',
          },
          {
            id: 'sequence',
            label: 'Sequence',
          },
          {
            id: 'cc_sequence_caution',
            label: 'Sequence caution',
          },
          {
            id: 'ft_conflict',
            label: 'Sequence conflict',
          },
          {
            id: 'ft_unsure',
            label: 'Sequence uncertainty',
          },
          {
            id: 'sequence_version',
            label: 'Sequence version',
          },
        ],
      },
      {
        id: 'function',
        label: 'Function',
        items: [
          {
            id: 'absorption',
            label: 'Absorption',
          },
          {
            id: 'ft_act_site',
            label: 'Active site',
          },
          {
            id: 'ft_binding',
            label: 'Binding site',
          },
          {
            id: 'cc_catalytic_activity',
            label: 'Catalytic activity',
          },
          {
            id: 'cc_cofactor',
            label: 'Cofactor',
          },
          {
            id: 'ft_dna_bind',
            label: 'DNA binding',
          },
          {
            id: 'ec',
            label: 'EC number',
          },
          {
            id: 'cc_activity_regulation',
            label: 'Activity regulation',
          },
          {
            id: 'cc_function',
            label: 'Function [CC]',
          },
          {
            id: 'kinetics',
            label: 'Kinetics',
          },
          {
            id: 'cc_pathway',
            label: 'Pathway',
          },
          {
            id: 'ph_dependence',
            label: 'pH dependence',
          },
          {
            id: 'redox_potential',
            label: 'Redox potential',
          },
          {
            id: 'rhea',
            label: 'Rhea ID',
          },
          {
            id: 'ft_site',
            label: 'Site',
          },
          {
            id: 'temp_dependence',
            label: 'Temperature dependence',
          },
        ],
      },
      {
        id: 'miscellaneous',
        label: 'Miscellaneous',
        items: [
          {
            id: 'annotation_score',
            label: 'Annotation',
          },
          {
            id: 'cc_caution',
            label: 'Caution',
          },
          {
            id: 'keyword',
            label: 'Keywords',
          },
          {
            id: 'keywordid',
            label: 'Keyword ID',
          },
          {
            id: 'cc_miscellaneous',
            label: 'Miscellaneous [CC]',
          },
          {
            id: 'protein_existence',
            label: 'Protein existence',
          },
          {
            id: 'reviewed',
            label: 'Reviewed',
          },
          {
            id: 'tools',
            label: 'Tools',
          },
          {
            id: 'uniparc_id',
            label: 'UniParc',
          },
          {
            id: 'comment_count',
            label: 'Comments',
          },
          {
            id: 'feature_count',
            label: 'Features',
          },
        ],
      },
      {
        id: 'interaction',
        label: 'Interaction',
        items: [
          {
            id: 'cc_interaction',
            label: 'Interacts with',
          },
          {
            id: 'cc_subunit',
            label: 'Subunit structure',
          },
        ],
      },
      {
        id: 'expression',
        label: 'Expression',
        items: [
          {
            id: 'cc_developmental_stage',
            label: 'Developmental stage',
          },
          {
            id: 'cc_induction',
            label: 'Induction',
          },
          {
            id: 'cc_tissue_specificity',
            label: 'Tissue specificity',
          },
        ],
      },
      {
        id: 'gene_ontology_(go)',
        label: 'Gene Ontology (GO)',
        items: [
          {
            id: 'go_p',
            label: 'Gene Ontology (biological process)',
          },
          {
            id: 'go_c',
            label: 'Gene Ontology (cellular component)',
          },
          {
            id: 'go',
            label: 'Gene Ontology (GO)',
          },
          {
            id: 'go_f',
            label: 'Gene Ontology (molecular function)',
          },
          {
            id: 'go_id',
            label: 'Gene Ontology IDs',
          },
        ],
      },
      {
        id: 'pathology_&_biotech',
        label: 'Pathology & Biotech',
        items: [
          {
            id: 'cc_allergen',
            label: 'Allergenic Properties',
          },
          {
            id: 'cc_biotechnology',
            label: 'Biotechnological use',
          },
          {
            id: 'cc_disruption_phenotype',
            label: 'Disruption phenotype',
          },
          {
            id: 'cc_disease',
            label: 'Involvement in disease',
          },
          {
            id: 'ft_mutagen',
            label: 'Mutagenesis',
          },
          {
            id: 'cc_pharmaceutical',
            label: 'Pharmaceutical use',
          },
          {
            id: 'cc_toxic_dose',
            label: 'Toxic dose',
          },
        ],
      },
      {
        id: 'subcellular_location',
        label: 'Subcellular location',
        items: [
          {
            id: 'ft_intramem',
            label: 'Intramembrane',
          },
          {
            id: 'cc_subcellular_location',
            label: 'Subcellular location [CC]',
          },
          {
            id: 'ft_topo_dom',
            label: 'Topological domain',
          },
          {
            id: 'ft_transmem',
            label: 'Transmembrane',
          },
        ],
      },
      {
        id: 'ptm_/_processing',
        label: 'PTM / Processing',
        items: [
          {
            id: 'ft_chain',
            label: 'Chain',
          },
          {
            id: 'ft_crosslnk',
            label: 'Cross-link',
          },
          {
            id: 'ft_disulfid',
            label: 'Disulfide bond',
          },
          {
            id: 'ft_carbohyd',
            label: 'Glycosylation',
          },
          {
            id: 'ft_init_met',
            label: 'Initiator methionine',
          },
          {
            id: 'ft_lipid',
            label: 'Lipidation',
          },
          {
            id: 'ft_mod_res',
            label: 'Modified residue',
          },
          {
            id: 'ft_peptide',
            label: 'Peptide',
          },
          {
            id: 'cc_ptm',
            label: 'Post-translational modification',
          },
          {
            id: 'ft_propep',
            label: 'Propeptide',
          },
          {
            id: 'ft_signal',
            label: 'Signal peptide',
          },
          {
            id: 'ft_transit',
            label: 'Transit peptide',
          },
        ],
      },
      {
        id: 'structure',
        label: 'Structure',
        items: [
          {
            id: 'structure_3d',
            label: '3D',
          },
          {
            id: 'ft_strand',
            label: 'Beta strand',
          },
          {
            id: 'ft_helix',
            label: 'Helix',
          },
          {
            id: 'ft_turn',
            label: 'Turn',
          },
        ],
      },
      {
        id: 'publications',
        label: 'Publications',
        items: [
          {
            id: 'lit_pubmed_id',
            label: 'PubMed ID',
          },
          {
            id: 'lit_doi_id',
            label: 'DOI ID',
          },
        ],
      },
      {
        id: 'date_of',
        label: 'Date of',
        items: [
          {
            id: 'date_created',
            label: 'Date of creation',
          },
          {
            id: 'date_modified',
            label: 'Date of last modification',
          },
          {
            id: 'date_sequence_modified',
            label: 'Date of last sequence modification',
          },
          {
            id: 'version',
            label: 'Entry version',
          },
        ],
      },
      {
        id: 'family_&_domains',
        label: 'Family & Domains',
        items: [
          {
            id: 'ft_coiled',
            label: 'Coiled coil',
          },
          {
            id: 'ft_compbias',
            label: 'Compositional bias',
          },
          {
            id: 'cc_domain',
            label: 'Domain [CC]',
          },
          {
            id: 'ft_domain',
            label: 'Domain [FT]',
          },
          {
            id: 'ft_motif',
            label: 'Motif',
          },
          {
            id: 'protein_families',
            label: 'Protein families',
          },
          {
            id: 'ft_region',
            label: 'Region',
          },
          {
            id: 'ft_repeat',
            label: 'Repeat',
          },
          {
            id: 'cc_similarity',
            label: 'Sequence similarities',
          },
          {
            id: 'ft_zn_fing',
            label: 'Zinc finger',
          },
        ],
      },
    ],
  },
  {
    label: 'External Resources',
    id: 'external-resources',
    items: [
      {
        id: 'sequence',
        label: 'Sequence',
        items: [
          {
            id: 'xref_ccds',
            label: 'CCDS',
          },
          {
            id: 'xref_embl',
            label: 'EMBL',
          },
          {
            id: 'xref_generif',
            label: 'GeneRIF',
          },
          {
            id: 'xref_pir',
            label: 'PIR',
          },
          {
            id: 'xref_refseq',
            label: 'RefSeq',
          },
        ],
      },
      {
        id: '3d_structure',
        label: '3D structure',
        items: [
          {
            id: 'xref_alphafolddb',
            label: 'AlphaFoldDB',
          },
          {
            id: 'xref_bmrb',
            label: 'BMRB',
          },
          {
            id: 'xref_emdb',
            label: 'EMDB',
          },
          {
            id: 'xref_pcddb',
            label: 'PCDDB',
          },
          {
            id: 'xref_pdb',
            label: 'PDB',
          },
          {
            id: 'xref_pdbsum',
            label: 'PDBsum',
          },
          {
            id: 'xref_sasbdb',
            label: 'SASBDB',
          },
          {
            id: 'xref_smr',
            label: 'SMR',
          },
        ],
      },
      {
        id: 'protein-protein_interaction',
        label: 'Protein-protein interaction',
        items: [
          {
            id: 'xref_biogrid',
            label: 'BioGRID',
          },
          {
            id: 'xref_corum',
            label: 'CORUM',
          },
          {
            id: 'xref_complexportal',
            label: 'ComplexPortal',
          },
          {
            id: 'xref_dip',
            label: 'DIP',
          },
          {
            id: 'xref_elm',
            label: 'ELM',
          },
          {
            id: 'xref_intact',
            label: 'IntAct',
          },
          {
            id: 'xref_mint',
            label: 'MINT',
          },
          {
            id: 'xref_string',
            label: 'STRING',
          },
        ],
      },
      {
        id: 'chemistry',
        label: 'Chemistry',
        items: [
          {
            id: 'xref_bindingdb',
            label: 'BindingDB',
          },
          {
            id: 'xref_chembl',
            label: 'ChEMBL',
          },
          {
            id: 'xref_drugbank',
            label: 'DrugBank',
          },
          {
            id: 'xref_drugcentral',
            label: 'DrugCentral',
          },
          {
            id: 'xref_guidetopharmacology',
            label: 'GuidetoPHARMACOLOGY',
          },
          {
            id: 'xref_swisslipids',
            label: 'SwissLipids',
          },
        ],
      },
      {
        id: 'protein_family/group',
        label: 'Protein family/group',
        items: [
          {
            id: 'xref_allergome',
            label: 'Allergome',
          },
          {
            id: 'xref_cazy',
            label: 'CAZy',
          },
          {
            id: 'xref_clae',
            label: 'CLAE',
          },
          {
            id: 'xref_esther',
            label: 'ESTHER',
          },
          {
            id: 'xref_imgt_gene-db',
            label: 'IMGT_GENE-DB',
          },
          {
            id: 'xref_merops',
            label: 'MEROPS',
          },
          {
            id: 'xref_moondb',
            label: 'MoonDB',
          },
          {
            id: 'xref_moonprot',
            label: 'MoonProt',
          },
          {
            id: 'xref_peroxibase',
            label: 'PeroxiBase',
          },
          {
            id: 'xref_rebase',
            label: 'REBASE',
          },
          {
            id: 'xref_tcdb',
            label: 'TCDB',
          },
          {
            id: 'xref_unilectin',
            label: 'UniLectin',
          },
        ],
      },
      {
        id: 'ptm',
        label: 'PTM',
        items: [
          {
            id: 'xref_carbonyldb',
            label: 'CarbonylDB',
          },
          {
            id: 'xref_depod',
            label: 'DEPOD',
          },
          {
            id: 'xref_glyconnect',
            label: 'GlyConnect',
          },
          {
            id: 'xref_glycosmos',
            label: 'GlyCosmos',
          },
          {
            id: 'xref_glygen',
            label: 'GlyGen',
          },
          {
            id: 'xref_metosite',
            label: 'MetOSite',
          },
          {
            id: 'xref_phosphositeplus',
            label: 'PhosphoSitePlus',
          },
          {
            id: 'xref_swisspalm',
            label: 'SwissPalm',
          },
          {
            id: 'xref_unicarbkb',
            label: 'UniCarbKB',
          },
          {
            id: 'xref_iptmnet',
            label: 'iPTMnet',
          },
        ],
      },
      {
        id: 'polymorphism_and_mutation',
        label: 'Genetic variation',
        items: [
          {
            id: 'xref_alzforum',
            label: 'Alzforum',
          },
          {
            id: 'xref_biomuta',
            label: 'BioMuta',
          },
          {
            id: 'xref_dmdm',
            label: 'DMDM',
          },
          {
            id: 'xref_dbsnp',
            label: 'dbSNP',
          },
        ],
      },
      {
        id: '2d_gel',
        label: '2D gel',
        items: [
          {
            id: 'xref_compluyeast-2dpage',
            label: 'COMPLUYEAST-2DPAGE',
          },
          {
            id: 'xref_dosac-cobs-2dpage',
            label: 'DOSAC-COBS-2DPAGE',
          },
          {
            id: 'xref_ogp',
            label: 'OGP',
          },
          {
            id: 'xref_reproduction-2dpage',
            label: 'REPRODUCTION-2DPAGE',
          },
          {
            id: 'xref_swiss-2dpage',
            label: 'SWISS-2DPAGE',
          },
          {
            id: 'xref_ucd-2dpage',
            label: 'UCD-2DPAGE',
          },
          {
            id: 'xref_world-2dpage',
            label: 'World-2DPAGE',
          },
        ],
      },
      {
        id: 'proteomic',
        label: 'Proteomic',
        items: [
          {
            id: 'xref_cptac',
            label: 'CPTAC',
          },
          {
            id: 'xref_epd',
            label: 'EPD',
          },
          {
            id: 'xref_massive',
            label: 'MassIVE',
          },
          {
            id: 'xref_maxqb',
            label: 'MaxQB',
          },
          {
            id: 'xref_pride',
            label: 'PRIDE',
          },
          {
            id: 'xref_paxdb',
            label: 'PaxDb',
          },
          {
            id: 'xref_peptideatlas',
            label: 'PeptideAtlas',
          },
          {
            id: 'xref_promex',
            label: 'ProMEX',
          },
          {
            id: 'xref_proteomicsdb',
            label: 'ProteomicsDB',
          },
          {
            id: 'xref_pumba',
            label: 'Pumba',
          },
          {
            id: 'xref_topdownproteomics',
            label: 'TopDownProteomics',
          },
          {
            id: 'xref_jpost',
            label: 'jPOST',
          },
        ],
      },
      {
        id: 'protocols_and_materials',
        label: 'Protocols and materials',
        items: [
          {
            id: 'xref_abcd',
            label: 'ABCD',
          },
          {
            id: 'xref_antibodypedia',
            label: 'Antibodypedia',
          },
          {
            id: 'xref_cptc',
            label: 'CPTC',
          },
          {
            id: 'xref_dnasu',
            label: 'DNASU',
          },
        ],
      },
      {
        id: 'genome_annotation',
        label: 'Genome annotation',
        items: [
          {
            id: 'xref_ensembl',
            label: 'Ensembl',
          },
          {
            id: 'xref_ensemblbacteria',
            label: 'EnsemblBacteria',
          },
          {
            id: 'xref_ensemblfungi',
            label: 'EnsemblFungi',
          },
          {
            id: 'xref_ensemblmetazoa',
            label: 'EnsemblMetazoa',
          },
          {
            id: 'xref_ensemblplants',
            label: 'EnsemblPlants',
          },
          {
            id: 'xref_ensemblprotists',
            label: 'EnsemblProtists',
          },
          {
            id: 'xref_geneid',
            label: 'GeneID',
          },
          {
            id: 'xref_gramene',
            label: 'Gramene',
          },
          {
            id: 'xref_kegg',
            label: 'KEGG',
          },
          {
            id: 'xref_mane-select',
            label: 'MANE-Select',
          },
          {
            id: 'xref_patric',
            label: 'PATRIC',
          },
          {
            id: 'xref_ucsc',
            label: 'UCSC',
          },
          {
            id: 'xref_vectorbase',
            label: 'VectorBase',
          },
          {
            id: 'xref_wbparasite',
            label: 'WBParaSite',
          },
        ],
      },
      {
        id: 'organism-specific',
        label: 'Organism-specific',
        items: [
          {
            id: 'xref_agr',
            label: 'AGR',
          },
          {
            id: 'xref_arachnoserver',
            label: 'ArachnoServer',
          },
          {
            id: 'xref_araport',
            label: 'Araport',
          },
          {
            id: 'xref_cgd',
            label: 'CGD',
          },
          {
            id: 'xref_ctd',
            label: 'CTD',
          },
          {
            id: 'xref_conoserver',
            label: 'ConoServer',
          },
          {
            id: 'xref_disgenet',
            label: 'DisGeNET',
          },
          {
            id: 'xref_echobase',
            label: 'EchoBASE',
          },
          {
            id: 'xref_flybase',
            label: 'FlyBase',
          },
          {
            id: 'xref_genecards',
            label: 'GeneCards',
          },
          {
            id: 'xref_genereviews',
            label: 'GeneReviews',
          },
          {
            id: 'xref_hgnc',
            label: 'HGNC',
          },
          {
            id: 'xref_hpa',
            label: 'HPA',
          },
          {
            id: 'xref_ic4r',
            label: 'IC4R',
          },
          {
            id: 'xref_japonicusdb',
            label: 'JaponicusDB',
          },
          {
            id: 'xref_legiolist',
            label: 'LegioList',
          },
          {
            id: 'xref_leproma',
            label: 'Leproma',
          },
          {
            id: 'xref_mgi',
            label: 'MGI',
          },
          {
            id: 'xref_mim',
            label: 'MIM',
          },
          {
            id: 'xref_maizegdb',
            label: 'MaizeGDB',
          },
          {
            id: 'xref_malacards',
            label: 'MalaCards',
          },
          {
            id: 'xref_niagads',
            label: 'NIAGADS',
          },
          {
            id: 'xref_opentargets',
            label: 'OpenTargets',
          },
          {
            id: 'xref_orphanet',
            label: 'Orphanet',
          },
          {
            id: 'xref_pharmgkb',
            label: 'PharmGKB',
          },
          {
            id: 'xref_pombase',
            label: 'PomBase',
          },
          {
            id: 'xref_pseudocap',
            label: 'PseudoCAP',
          },
          {
            id: 'xref_rgd',
            label: 'RGD',
          },
          {
            id: 'xref_sgd',
            label: 'SGD',
          },
          {
            id: 'xref_tair',
            label: 'TAIR',
          },
          {
            id: 'xref_tuberculist',
            label: 'TubercuList',
          },
          {
            id: 'xref_veupathdb',
            label: 'VEuPathDB',
          },
          {
            id: 'xref_vgnc',
            label: 'VGNC',
          },
          {
            id: 'xref_wormbase',
            label: 'WormBase',
          },
          {
            id: 'xref_xenbase',
            label: 'Xenbase',
          },
          {
            id: 'xref_zfin',
            label: 'ZFIN',
          },
          {
            id: 'xref_dictybase',
            label: 'dictyBase',
          },
          {
            id: 'xref_euhcvdb',
            label: 'euHCVdb',
          },
          {
            id: 'xref_nextprot',
            label: 'neXtProt',
          },
        ],
      },
      {
        id: 'phylogenomic',
        label: 'Phylogenomic',
        items: [
          {
            id: 'xref_genetree',
            label: 'GeneTree',
          },
          {
            id: 'xref_hogenom',
            label: 'HOGENOM',
          },
          {
            id: 'xref_inparanoid',
            label: 'InParanoid',
          },
          {
            id: 'xref_ko',
            label: 'KO',
          },
          {
            id: 'xref_oma',
            label: 'OMA',
          },
          {
            id: 'xref_orthodb',
            label: 'OrthoDB',
          },
          {
            id: 'xref_phylomedb',
            label: 'PhylomeDB',
          },
          {
            id: 'xref_treefam',
            label: 'TreeFam',
          },
          {
            id: 'xref_eggnog',
            label: 'eggNOG',
          },
        ],
      },
      {
        id: 'enzyme_and_pathway',
        label: 'Enzyme and pathway',
        items: [
          {
            id: 'xref_brenda',
            label: 'BRENDA',
          },
          {
            id: 'xref_biocyc',
            label: 'BioCyc',
          },
          {
            id: 'xref_pathwaycommons',
            label: 'PathwayCommons',
          },
          {
            id: 'xref_plantreactome',
            label: 'PlantReactome',
          },
          {
            id: 'xref_reactome',
            label: 'Reactome',
          },
          {
            id: 'xref_sabio-rk',
            label: 'SABIO-RK',
          },
          {
            id: 'xref_signor',
            label: 'SIGNOR',
          },
          {
            id: 'xref_signalink',
            label: 'SignaLink',
          },
          {
            id: 'xref_unipathway',
            label: 'UniPathway',
          },
        ],
      },
      {
        id: 'other',
        label: 'Miscellaneous',
        items: [
          {
            id: 'xref_biogrid-orcs',
            label: 'BioGRID-ORCS',
          },
          {
            id: 'xref_chitars',
            label: 'ChiTaRS',
          },
          {
            id: 'xref_evolutionarytrace',
            label: 'EvolutionaryTrace',
          },
          {
            id: 'xref_genewiki',
            label: 'GeneWiki',
          },
          {
            id: 'xref_genomernai',
            label: 'GenomeRNAi',
          },
          {
            id: 'xref_orcid',
            label: 'ORCID',
          },
          {
            id: 'xref_pgenn',
            label: 'PGenN',
          },
          {
            id: 'xref_phi-base',
            label: 'PHI-base',
          },
          {
            id: 'xref_pro',
            label: 'PRO',
          },
          {
            id: 'xref_pharos',
            label: 'Pharos',
          },
          {
            id: 'xref_pubtator',
            label: 'PubTator',
          },
          {
            id: 'xref_rnact',
            label: 'RNAct',
          },
          {
            id: 'xref_emind',
            label: 'eMIND',
          },
        ],
      },
      {
        id: 'gene_expression',
        label: 'Gene expression',
        items: [
          {
            id: 'xref_bgee',
            label: 'Bgee',
          },
          {
            id: 'xref_cleanex',
            label: 'CleanEx',
          },
          {
            id: 'xref_collectf',
            label: 'CollecTF',
          },
          {
            id: 'xref_expressionatlas',
            label: 'ExpressionAtlas',
          },
          {
            id: 'xref_genevisible',
            label: 'Genevisible',
          },
        ],
      },
      {
        id: 'family_and_domain',
        label: 'Family and domain',
        items: [
          {
            id: 'xref_cdd',
            label: 'CDD',
          },
          {
            id: 'xref_disprot',
            label: 'DisProt',
          },
          {
            id: 'xref_gene3d',
            label: 'Gene3D',
          },
          {
            id: 'xref_hamap',
            label: 'HAMAP',
          },
          {
            id: 'xref_ideal',
            label: 'IDEAL',
          },
          {
            id: 'xref_interpro',
            label: 'InterPro',
          },
          {
            id: 'xref_ncbifam',
            label: 'NCBIfam',
          },
          {
            id: 'xref_panther',
            label: 'PANTHER',
          },
          {
            id: 'xref_pirsf',
            label: 'PIRSF',
          },
          {
            id: 'xref_prints',
            label: 'PRINTS',
          },
          {
            id: 'xref_prosite',
            label: 'PROSITE',
          },
          {
            id: 'xref_pfam',
            label: 'Pfam',
          },
          {
            id: 'xref_sfld',
            label: 'SFLD',
          },
          {
            id: 'xref_smart',
            label: 'SMART',
          },
          {
            id: 'xref_supfam',
            label: 'SUPFAM',
          },
        ],
      },
    ],
  },
];
export default accordionData;
