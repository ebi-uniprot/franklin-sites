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
            key: 'names_&_taxonomy/entry_name',
          },
          {
            id: 'gene_names',
            label: 'Gene Names',
            key: 'names_&_taxonomy/gene_names',
          },
          {
            id: 'gene_oln',
            label: 'Gene Names (ordered locus)',
            key: 'names_&_taxonomy/gene_names_(ordered_locus)',
          },
          {
            id: 'gene_orf',
            label: 'Gene Names (ORF)',
            key: 'names_&_taxonomy/gene_names_(orf)',
          },
          {
            id: 'gene_primary',
            label: 'Gene Names (primary)',
            key: 'names_&_taxonomy/gene_names_(primary)',
          },
          {
            id: 'gene_synonym',
            label: 'Gene Names (synonym)',
            key: 'names_&_taxonomy/gene_names_(synonym)',
          },
          {
            id: 'organism_name',
            label: 'Organism',
            key: 'names_&_taxonomy/organism_name',
          },
          {
            id: 'organism_id',
            label: 'Organism (ID)',
            key: 'names_&_taxonomy/organism_(id)',
          },
          {
            id: 'protein_name',
            label: 'Protein names',
            key: 'names_&_taxonomy/protein_names',
          },
          {
            id: 'xref_proteomes',
            label: 'Proteomes',
            key: 'names_&_taxonomy/proteomes',
          },
          {
            id: 'lineage',
            label: 'Taxonomic lineage',
            key: 'names_&_taxonomy/taxonomic_lineage',
          },
          {
            id: 'lineage_ids',
            label: 'Taxonomic lineage (Ids)',
            key: 'names_&_taxonomy/taxonomic_lineage_ids',
          },
          {
            id: 'virus_hosts',
            label: 'Virus hosts',
            key: 'names_&_taxonomy/virus_hosts',
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
            key: 'sequences/alternative_products_(isoforms)',
          },
          {
            id: 'ft_var_seq',
            label: 'Alternative sequence',
            key: 'sequences/alternative_sequence',
          },
          {
            id: 'error_gmodel_pred',
            label: 'Erroneous gene model prediction',
            key: 'sequences/erroneous_gene_model_prediction',
          },
          {
            id: 'fragment',
            label: 'Fragment',
            key: 'sequences/fragment',
          },
          {
            id: 'organelle',
            label: 'Gene encoded by',
            key: 'sequences/gene_encoded_by',
          },
          {
            id: 'length',
            label: 'Length',
            key: 'sequences/length',
          },
          {
            id: 'mass',
            label: 'Mass',
            key: 'sequences/mass',
          },
          {
            id: 'cc_mass_spectrometry',
            label: 'Mass spectrometry',
            key: 'sequences/mass_spectrometry',
          },
          {
            id: 'ft_variant',
            label: 'Natural variant',
            key: 'sequences/natural_variant',
          },
          {
            id: 'ft_non_cons',
            label: 'Non-adjacent residues',
            key: 'sequences/non-adjacent_residues',
          },
          {
            id: 'ft_non_std',
            label: 'Non-standard residue',
            key: 'sequences/non-standard_residue',
          },
          {
            id: 'ft_non_ter',
            label: 'Non-terminal residue',
            key: 'sequences/non-terminal_residue',
          },
          {
            id: 'cc_polymorphism',
            label: 'Polymorphism',
            key: 'sequences/polymorphism',
          },
          {
            id: 'cc_rna_editing',
            label: 'RNA Editing',
            key: 'sequences/rna_editing',
          },
          {
            id: 'sequence',
            label: 'Sequence',
            key: 'sequences/sequence',
          },
          {
            id: 'cc_sequence_caution',
            label: 'Sequence caution',
            key: 'sequences/sequence_caution',
          },
          {
            id: 'ft_conflict',
            label: 'Sequence conflict',
            key: 'sequences/sequence_conflict',
          },
          {
            id: 'ft_unsure',
            label: 'Sequence uncertainty',
            key: 'sequences/sequence_uncertainty',
          },
          {
            id: 'sequence_version',
            label: 'Sequence version',
            key: 'sequences/sequence_version',
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
            key: 'function/absorption',
          },
          {
            id: 'ft_act_site',
            label: 'Active site',
            key: 'function/active_site',
          },
          {
            id: 'ft_binding',
            label: 'Binding site',
            key: 'function/binding_site',
          },
          {
            id: 'cc_catalytic_activity',
            label: 'Catalytic activity',
            key: 'function/catalytic_activity',
          },
          {
            id: 'cc_cofactor',
            label: 'Cofactor',
            key: 'function/cofactor',
          },
          {
            id: 'ft_dna_bind',
            label: 'DNA binding',
            key: 'function/dna_binding',
          },
          {
            id: 'ec',
            label: 'EC number',
            key: 'function/ec_number',
          },
          {
            id: 'cc_activity_regulation',
            label: 'Activity regulation',
            key: 'function/activity_regulation',
          },
          {
            id: 'cc_function',
            label: 'Function [CC]',
            key: 'function/function_[cc]',
          },
          {
            id: 'kinetics',
            label: 'Kinetics',
            key: 'function/kinetics',
          },
          {
            id: 'cc_pathway',
            label: 'Pathway',
            key: 'function/pathway',
          },
          {
            id: 'ph_dependence',
            label: 'pH dependence',
            key: 'function/ph_dependence',
          },
          {
            id: 'redox_potential',
            label: 'Redox potential',
            key: 'function/redox_potential',
          },
          {
            id: 'rhea',
            label: 'Rhea ID',
            key: 'function/rhea',
          },
          {
            id: 'ft_site',
            label: 'Site',
            key: 'function/site',
          },
          {
            id: 'temp_dependence',
            label: 'Temperature dependence',
            key: 'function/temperature_dependence',
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
            key: 'miscellaneous/annotation',
          },
          {
            id: 'cc_caution',
            label: 'Caution',
            key: 'miscellaneous/caution',
          },
          {
            id: 'keyword',
            label: 'Keywords',
            key: 'miscellaneous/keywords',
          },
          {
            id: 'keywordid',
            label: 'Keyword ID',
            key: 'miscellaneous/keyword_id',
          },
          {
            id: 'cc_miscellaneous',
            label: 'Miscellaneous [CC]',
            key: 'miscellaneous/miscellaneous_[cc]',
          },
          {
            id: 'protein_existence',
            label: 'Protein existence',
            key: 'miscellaneous/protein_existence',
          },
          {
            id: 'reviewed',
            label: 'Reviewed',
            key: 'miscellaneous/reviewed',
          },
          {
            id: 'tools',
            label: 'Tools',
            key: 'miscellaneous/tools',
          },
          {
            id: 'uniparc_id',
            label: 'UniParc',
            key: 'miscellaneous/uniparc',
          },
          {
            id: 'comment_count',
            label: 'Comments',
            key: 'miscellaneous/comment_count',
          },
          {
            id: 'feature_count',
            label: 'Features',
            key: 'miscellaneous/feature_count',
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
            key: 'interaction/interacts_with',
          },
          {
            id: 'cc_subunit',
            label: 'Subunit structure',
            key: 'interaction/subunit_structure',
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
            key: 'expression/developmental_stage',
          },
          {
            id: 'cc_induction',
            label: 'Induction',
            key: 'expression/induction',
          },
          {
            id: 'cc_tissue_specificity',
            label: 'Tissue specificity',
            key: 'expression/tissue_specificity',
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
            key: 'gene_ontology_(go)/gene_ontology_(biological_process)',
          },
          {
            id: 'go_c',
            label: 'Gene Ontology (cellular component)',
            key: 'gene_ontology_(go)/gene_ontology_(cellular_component)',
          },
          {
            id: 'go',
            label: 'Gene Ontology (GO)',
            key: 'gene_ontology_(go)/gene_ontology_(go)',
          },
          {
            id: 'go_f',
            label: 'Gene Ontology (molecular function)',
            key: 'gene_ontology_(go)/gene_ontology_(molecular_function)',
          },
          {
            id: 'go_id',
            label: 'Gene Ontology IDs',
            key: 'gene_ontology_(go)/gene_ontology_ids',
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
            key: 'pathology_&_biotech/allergenic_properties',
          },
          {
            id: 'cc_biotechnology',
            label: 'Biotechnological use',
            key: 'pathology_&_biotech/biotechnological_use',
          },
          {
            id: 'cc_disruption_phenotype',
            label: 'Disruption phenotype',
            key: 'pathology_&_biotech/disruption_phenotype',
          },
          {
            id: 'cc_disease',
            label: 'Involvement in disease',
            key: 'pathology_&_biotech/involvement_in_disease',
          },
          {
            id: 'ft_mutagen',
            label: 'Mutagenesis',
            key: 'pathology_&_biotech/mutagenesis',
          },
          {
            id: 'cc_pharmaceutical',
            label: 'Pharmaceutical use',
            key: 'pathology_&_biotech/pharmaceutical_use',
          },
          {
            id: 'cc_toxic_dose',
            label: 'Toxic dose',
            key: 'pathology_&_biotech/toxic_dose',
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
            key: 'subcellular_location/intramembrane',
          },
          {
            id: 'cc_subcellular_location',
            label: 'Subcellular location [CC]',
            key: 'subcellular_location/subcellular_location_[cc]',
          },
          {
            id: 'ft_topo_dom',
            label: 'Topological domain',
            key: 'subcellular_location/topological_domain',
          },
          {
            id: 'ft_transmem',
            label: 'Transmembrane',
            key: 'subcellular_location/transmembrane',
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
            key: 'ptm_/_processing/chain',
          },
          {
            id: 'ft_crosslnk',
            label: 'Cross-link',
            key: 'ptm_/_processing/cross-link',
          },
          {
            id: 'ft_disulfid',
            label: 'Disulfide bond',
            key: 'ptm_/_processing/disulfide_bond',
          },
          {
            id: 'ft_carbohyd',
            label: 'Glycosylation',
            key: 'ptm_/_processing/glycosylation',
          },
          {
            id: 'ft_init_met',
            label: 'Initiator methionine',
            key: 'ptm_/_processing/initiator_methionine',
          },
          {
            id: 'ft_lipid',
            label: 'Lipidation',
            key: 'ptm_/_processing/lipidation',
          },
          {
            id: 'ft_mod_res',
            label: 'Modified residue',
            key: 'ptm_/_processing/modified_residue',
          },
          {
            id: 'ft_peptide',
            label: 'Peptide',
            key: 'ptm_/_processing/peptide',
          },
          {
            id: 'cc_ptm',
            label: 'Post-translational modification',
            key: 'ptm_/_processing/post-translational_modification',
          },
          {
            id: 'ft_propep',
            label: 'Propeptide',
            key: 'ptm_/_processing/propeptide',
          },
          {
            id: 'ft_signal',
            label: 'Signal peptide',
            key: 'ptm_/_processing/signal_peptide',
          },
          {
            id: 'ft_transit',
            label: 'Transit peptide',
            key: 'ptm_/_processing/transit_peptide',
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
            key: 'structure/structure_3d',
          },
          {
            id: 'ft_strand',
            label: 'Beta strand',
            key: 'structure/beta_strand',
          },
          {
            id: 'ft_helix',
            label: 'Helix',
            key: 'structure/helix',
          },
          {
            id: 'ft_turn',
            label: 'Turn',
            key: 'structure/turn',
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
            key: 'publications/lit_pubmed_id',
          },
          {
            id: 'lit_doi_id',
            label: 'DOI ID',
            key: 'publications/lit_doi_id',
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
            key: 'date_of/date_of_creation',
          },
          {
            id: 'date_modified',
            label: 'Date of last modification',
            key: 'date_of/date_of_last_modification',
          },
          {
            id: 'date_sequence_modified',
            label: 'Date of last sequence modification',
            key: 'date_of/date_of_last_sequence_modification',
          },
          {
            id: 'version',
            label: 'Entry version',
            key: 'date_of/entry_version',
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
            key: 'family_&_domains/coiled_coil',
          },
          {
            id: 'ft_compbias',
            label: 'Compositional bias',
            key: 'family_&_domains/compositional_bias',
          },
          {
            id: 'cc_domain',
            label: 'Domain [CC]',
            key: 'family_&_domains/domain_[cc]',
          },
          {
            id: 'ft_domain',
            label: 'Domain [FT]',
            key: 'family_&_domains/domain_[ft]',
          },
          {
            id: 'ft_motif',
            label: 'Motif',
            key: 'family_&_domains/motif',
          },
          {
            id: 'protein_families',
            label: 'Protein families',
            key: 'family_&_domains/protein_families',
          },
          {
            id: 'ft_region',
            label: 'Region',
            key: 'family_&_domains/region',
          },
          {
            id: 'ft_repeat',
            label: 'Repeat',
            key: 'family_&_domains/repeat',
          },
          {
            id: 'cc_similarity',
            label: 'Sequence similarities',
            key: 'family_&_domains/sequence_similarity',
          },
          {
            id: 'ft_zn_fing',
            label: 'Zinc finger',
            key: 'family_&_domains/zinc_finger',
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
            key: 'sequence/ccds',
          },
          {
            id: 'xref_embl',
            label: 'EMBL',
            key: 'sequence/embl',
          },
          {
            id: 'xref_generif',
            label: 'GeneRIF',
            key: 'sequence/generif',
          },
          {
            id: 'xref_pir',
            label: 'PIR',
            key: 'sequence/pir',
          },
          {
            id: 'xref_refseq',
            label: 'RefSeq',
            key: 'sequence/refseq',
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
            key: '3d_structure/alphafolddb',
          },
          {
            id: 'xref_bmrb',
            label: 'BMRB',
            key: '3d_structure/bmrb',
          },
          {
            id: 'xref_emdb',
            label: 'EMDB',
            key: '3d_structure/emdb',
          },
          {
            id: 'xref_pcddb',
            label: 'PCDDB',
            key: '3d_structure/pcddb',
          },
          {
            id: 'xref_pdb',
            label: 'PDB',
            key: '3d_structure/pdb',
          },
          {
            id: 'xref_pdbsum',
            label: 'PDBsum',
            key: '3d_structure/pdbsum',
          },
          {
            id: 'xref_sasbdb',
            label: 'SASBDB',
            key: '3d_structure/sasbdb',
          },
          {
            id: 'xref_smr',
            label: 'SMR',
            key: '3d_structure/smr',
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
            key: 'protein-protein_interaction/biogrid',
          },
          {
            id: 'xref_corum',
            label: 'CORUM',
            key: 'protein-protein_interaction/corum',
          },
          {
            id: 'xref_complexportal',
            label: 'ComplexPortal',
            key: 'protein-protein_interaction/complexportal',
          },
          {
            id: 'xref_dip',
            label: 'DIP',
            key: 'protein-protein_interaction/dip',
          },
          {
            id: 'xref_elm',
            label: 'ELM',
            key: 'protein-protein_interaction/elm',
          },
          {
            id: 'xref_intact',
            label: 'IntAct',
            key: 'protein-protein_interaction/intact',
          },
          {
            id: 'xref_mint',
            label: 'MINT',
            key: 'protein-protein_interaction/mint',
          },
          {
            id: 'xref_string',
            label: 'STRING',
            key: 'protein-protein_interaction/string',
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
            key: 'chemistry/bindingdb',
          },
          {
            id: 'xref_chembl',
            label: 'ChEMBL',
            key: 'chemistry/chembl',
          },
          {
            id: 'xref_drugbank',
            label: 'DrugBank',
            key: 'chemistry/drugbank',
          },
          {
            id: 'xref_drugcentral',
            label: 'DrugCentral',
            key: 'chemistry/drugcentral',
          },
          {
            id: 'xref_guidetopharmacology',
            label: 'GuidetoPHARMACOLOGY',
            key: 'chemistry/guidetopharmacology',
          },
          {
            id: 'xref_swisslipids',
            label: 'SwissLipids',
            key: 'chemistry/swisslipids',
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
            key: 'protein_family/group/allergome',
          },
          {
            id: 'xref_cazy',
            label: 'CAZy',
            key: 'protein_family/group/cazy',
          },
          {
            id: 'xref_clae',
            label: 'CLAE',
            key: 'protein_family/group/clae',
          },
          {
            id: 'xref_esther',
            label: 'ESTHER',
            key: 'protein_family/group/esther',
          },
          {
            id: 'xref_imgt_gene-db',
            label: 'IMGT_GENE-DB',
            key: 'protein_family/group/imgt_gene-db',
          },
          {
            id: 'xref_merops',
            label: 'MEROPS',
            key: 'protein_family/group/merops',
          },
          {
            id: 'xref_moondb',
            label: 'MoonDB',
            key: 'protein_family/group/moondb',
          },
          {
            id: 'xref_moonprot',
            label: 'MoonProt',
            key: 'protein_family/group/moonprot',
          },
          {
            id: 'xref_peroxibase',
            label: 'PeroxiBase',
            key: 'protein_family/group/peroxibase',
          },
          {
            id: 'xref_rebase',
            label: 'REBASE',
            key: 'protein_family/group/rebase',
          },
          {
            id: 'xref_tcdb',
            label: 'TCDB',
            key: 'protein_family/group/tcdb',
          },
          {
            id: 'xref_unilectin',
            label: 'UniLectin',
            key: 'protein_family/group/unilectin',
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
            key: 'ptm/carbonyldb',
          },
          {
            id: 'xref_depod',
            label: 'DEPOD',
            key: 'ptm/depod',
          },
          {
            id: 'xref_glyconnect',
            label: 'GlyConnect',
            key: 'ptm/glyconnect',
          },
          {
            id: 'xref_glycosmos',
            label: 'GlyCosmos',
            key: 'ptm/glycosmos',
          },
          {
            id: 'xref_glygen',
            label: 'GlyGen',
            key: 'ptm/glygen',
          },
          {
            id: 'xref_metosite',
            label: 'MetOSite',
            key: 'ptm/metosite',
          },
          {
            id: 'xref_phosphositeplus',
            label: 'PhosphoSitePlus',
            key: 'ptm/phosphositeplus',
          },
          {
            id: 'xref_swisspalm',
            label: 'SwissPalm',
            key: 'ptm/swisspalm',
          },
          {
            id: 'xref_unicarbkb',
            label: 'UniCarbKB',
            key: 'ptm/unicarbkb',
          },
          {
            id: 'xref_iptmnet',
            label: 'iPTMnet',
            key: 'ptm/iptmnet',
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
            key: 'polymorphism_and_mutation/alzforum',
          },
          {
            id: 'xref_biomuta',
            label: 'BioMuta',
            key: 'polymorphism_and_mutation/biomuta',
          },
          {
            id: 'xref_dmdm',
            label: 'DMDM',
            key: 'polymorphism_and_mutation/dmdm',
          },
          {
            id: 'xref_dbsnp',
            label: 'dbSNP',
            key: 'polymorphism_and_mutation/dbsnp',
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
            key: '2d_gel/compluyeast-2dpage',
          },
          {
            id: 'xref_dosac-cobs-2dpage',
            label: 'DOSAC-COBS-2DPAGE',
            key: '2d_gel/dosac-cobs-2dpage',
          },
          {
            id: 'xref_ogp',
            label: 'OGP',
            key: '2d_gel/ogp',
          },
          {
            id: 'xref_reproduction-2dpage',
            label: 'REPRODUCTION-2DPAGE',
            key: '2d_gel/reproduction-2dpage',
          },
          {
            id: 'xref_swiss-2dpage',
            label: 'SWISS-2DPAGE',
            key: '2d_gel/swiss-2dpage',
          },
          {
            id: 'xref_ucd-2dpage',
            label: 'UCD-2DPAGE',
            key: '2d_gel/ucd-2dpage',
          },
          {
            id: 'xref_world-2dpage',
            label: 'World-2DPAGE',
            key: '2d_gel/world-2dpage',
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
            key: 'proteomic/cptac',
          },
          {
            id: 'xref_epd',
            label: 'EPD',
            key: 'proteomic/epd',
          },
          {
            id: 'xref_massive',
            label: 'MassIVE',
            key: 'proteomic/massive',
          },
          {
            id: 'xref_maxqb',
            label: 'MaxQB',
            key: 'proteomic/maxqb',
          },
          {
            id: 'xref_pride',
            label: 'PRIDE',
            key: 'proteomic/pride',
          },
          {
            id: 'xref_paxdb',
            label: 'PaxDb',
            key: 'proteomic/paxdb',
          },
          {
            id: 'xref_peptideatlas',
            label: 'PeptideAtlas',
            key: 'proteomic/peptideatlas',
          },
          {
            id: 'xref_promex',
            label: 'ProMEX',
            key: 'proteomic/promex',
          },
          {
            id: 'xref_proteomicsdb',
            label: 'ProteomicsDB',
            key: 'proteomic/proteomicsdb',
          },
          {
            id: 'xref_pumba',
            label: 'Pumba',
            key: 'proteomic/pumba',
          },
          {
            id: 'xref_topdownproteomics',
            label: 'TopDownProteomics',
            key: 'proteomic/topdownproteomics',
          },
          {
            id: 'xref_jpost',
            label: 'jPOST',
            key: 'proteomic/jpost',
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
            key: 'protocols_and_materials/abcd',
          },
          {
            id: 'xref_antibodypedia',
            label: 'Antibodypedia',
            key: 'protocols_and_materials/antibodypedia',
          },
          {
            id: 'xref_cptc',
            label: 'CPTC',
            key: 'protocols_and_materials/cptc',
          },
          {
            id: 'xref_dnasu',
            label: 'DNASU',
            key: 'protocols_and_materials/dnasu',
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
            key: 'genome_annotation/ensembl',
          },
          {
            id: 'xref_ensemblbacteria',
            label: 'EnsemblBacteria',
            key: 'genome_annotation/ensemblbacteria',
          },
          {
            id: 'xref_ensemblfungi',
            label: 'EnsemblFungi',
            key: 'genome_annotation/ensemblfungi',
          },
          {
            id: 'xref_ensemblmetazoa',
            label: 'EnsemblMetazoa',
            key: 'genome_annotation/ensemblmetazoa',
          },
          {
            id: 'xref_ensemblplants',
            label: 'EnsemblPlants',
            key: 'genome_annotation/ensemblplants',
          },
          {
            id: 'xref_ensemblprotists',
            label: 'EnsemblProtists',
            key: 'genome_annotation/ensemblprotists',
          },
          {
            id: 'xref_geneid',
            label: 'GeneID',
            key: 'genome_annotation/geneid',
          },
          {
            id: 'xref_gramene',
            label: 'Gramene',
            key: 'genome_annotation/gramene',
          },
          {
            id: 'xref_kegg',
            label: 'KEGG',
            key: 'genome_annotation/kegg',
          },
          {
            id: 'xref_mane-select',
            label: 'MANE-Select',
            key: 'genome_annotation/mane-select',
          },
          {
            id: 'xref_patric',
            label: 'PATRIC',
            key: 'genome_annotation/patric',
          },
          {
            id: 'xref_ucsc',
            label: 'UCSC',
            key: 'genome_annotation/ucsc',
          },
          {
            id: 'xref_vectorbase',
            label: 'VectorBase',
            key: 'genome_annotation/vectorbase',
          },
          {
            id: 'xref_wbparasite',
            label: 'WBParaSite',
            key: 'genome_annotation/wbparasite',
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
            key: 'organism-specific/agr',
          },
          {
            id: 'xref_arachnoserver',
            label: 'ArachnoServer',
            key: 'organism-specific/arachnoserver',
          },
          {
            id: 'xref_araport',
            label: 'Araport',
            key: 'organism-specific/araport',
          },
          {
            id: 'xref_cgd',
            label: 'CGD',
            key: 'organism-specific/cgd',
          },
          {
            id: 'xref_ctd',
            label: 'CTD',
            key: 'organism-specific/ctd',
          },
          {
            id: 'xref_conoserver',
            label: 'ConoServer',
            key: 'organism-specific/conoserver',
          },
          {
            id: 'xref_disgenet',
            label: 'DisGeNET',
            key: 'organism-specific/disgenet',
          },
          {
            id: 'xref_echobase',
            label: 'EchoBASE',
            key: 'organism-specific/echobase',
          },
          {
            id: 'xref_flybase',
            label: 'FlyBase',
            key: 'organism-specific/flybase',
          },
          {
            id: 'xref_genecards',
            label: 'GeneCards',
            key: 'organism-specific/genecards',
          },
          {
            id: 'xref_genereviews',
            label: 'GeneReviews',
            key: 'organism-specific/genereviews',
          },
          {
            id: 'xref_hgnc',
            label: 'HGNC',
            key: 'organism-specific/hgnc',
          },
          {
            id: 'xref_hpa',
            label: 'HPA',
            key: 'organism-specific/hpa',
          },
          {
            id: 'xref_ic4r',
            label: 'IC4R',
            key: 'organism-specific/ic4r',
          },
          {
            id: 'xref_japonicusdb',
            label: 'JaponicusDB',
            key: 'organism-specific/japonicusdb',
          },
          {
            id: 'xref_legiolist',
            label: 'LegioList',
            key: 'organism-specific/legiolist',
          },
          {
            id: 'xref_leproma',
            label: 'Leproma',
            key: 'organism-specific/leproma',
          },
          {
            id: 'xref_mgi',
            label: 'MGI',
            key: 'organism-specific/mgi',
          },
          {
            id: 'xref_mim',
            label: 'MIM',
            key: 'organism-specific/mim',
          },
          {
            id: 'xref_maizegdb',
            label: 'MaizeGDB',
            key: 'organism-specific/maizegdb',
          },
          {
            id: 'xref_malacards',
            label: 'MalaCards',
            key: 'organism-specific/malacards',
          },
          {
            id: 'xref_niagads',
            label: 'NIAGADS',
            key: 'organism-specific/niagads',
          },
          {
            id: 'xref_opentargets',
            label: 'OpenTargets',
            key: 'organism-specific/opentargets',
          },
          {
            id: 'xref_orphanet',
            label: 'Orphanet',
            key: 'organism-specific/orphanet',
          },
          {
            id: 'xref_pharmgkb',
            label: 'PharmGKB',
            key: 'organism-specific/pharmgkb',
          },
          {
            id: 'xref_pombase',
            label: 'PomBase',
            key: 'organism-specific/pombase',
          },
          {
            id: 'xref_pseudocap',
            label: 'PseudoCAP',
            key: 'organism-specific/pseudocap',
          },
          {
            id: 'xref_rgd',
            label: 'RGD',
            key: 'organism-specific/rgd',
          },
          {
            id: 'xref_sgd',
            label: 'SGD',
            key: 'organism-specific/sgd',
          },
          {
            id: 'xref_tair',
            label: 'TAIR',
            key: 'organism-specific/tair',
          },
          {
            id: 'xref_tuberculist',
            label: 'TubercuList',
            key: 'organism-specific/tuberculist',
          },
          {
            id: 'xref_veupathdb',
            label: 'VEuPathDB',
            key: 'organism-specific/veupathdb',
          },
          {
            id: 'xref_vgnc',
            label: 'VGNC',
            key: 'organism-specific/vgnc',
          },
          {
            id: 'xref_wormbase',
            label: 'WormBase',
            key: 'organism-specific/wormbase',
          },
          {
            id: 'xref_xenbase',
            label: 'Xenbase',
            key: 'organism-specific/xenbase',
          },
          {
            id: 'xref_zfin',
            label: 'ZFIN',
            key: 'organism-specific/zfin',
          },
          {
            id: 'xref_dictybase',
            label: 'dictyBase',
            key: 'organism-specific/dictybase',
          },
          {
            id: 'xref_euhcvdb',
            label: 'euHCVdb',
            key: 'organism-specific/euhcvdb',
          },
          {
            id: 'xref_nextprot',
            label: 'neXtProt',
            key: 'organism-specific/nextprot',
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
            key: 'phylogenomic/genetree',
          },
          {
            id: 'xref_hogenom',
            label: 'HOGENOM',
            key: 'phylogenomic/hogenom',
          },
          {
            id: 'xref_inparanoid',
            label: 'InParanoid',
            key: 'phylogenomic/inparanoid',
          },
          {
            id: 'xref_ko',
            label: 'KO',
            key: 'phylogenomic/ko',
          },
          {
            id: 'xref_oma',
            label: 'OMA',
            key: 'phylogenomic/oma',
          },
          {
            id: 'xref_orthodb',
            label: 'OrthoDB',
            key: 'phylogenomic/orthodb',
          },
          {
            id: 'xref_phylomedb',
            label: 'PhylomeDB',
            key: 'phylogenomic/phylomedb',
          },
          {
            id: 'xref_treefam',
            label: 'TreeFam',
            key: 'phylogenomic/treefam',
          },
          {
            id: 'xref_eggnog',
            label: 'eggNOG',
            key: 'phylogenomic/eggnog',
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
            key: 'enzyme_and_pathway/brenda',
          },
          {
            id: 'xref_biocyc',
            label: 'BioCyc',
            key: 'enzyme_and_pathway/biocyc',
          },
          {
            id: 'xref_pathwaycommons',
            label: 'PathwayCommons',
            key: 'enzyme_and_pathway/pathwaycommons',
          },
          {
            id: 'xref_plantreactome',
            label: 'PlantReactome',
            key: 'enzyme_and_pathway/plantreactome',
          },
          {
            id: 'xref_reactome',
            label: 'Reactome',
            key: 'enzyme_and_pathway/reactome',
          },
          {
            id: 'xref_sabio-rk',
            label: 'SABIO-RK',
            key: 'enzyme_and_pathway/sabio-rk',
          },
          {
            id: 'xref_signor',
            label: 'SIGNOR',
            key: 'enzyme_and_pathway/signor',
          },
          {
            id: 'xref_signalink',
            label: 'SignaLink',
            key: 'enzyme_and_pathway/signalink',
          },
          {
            id: 'xref_unipathway',
            label: 'UniPathway',
            key: 'enzyme_and_pathway/unipathway',
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
            key: 'other/biogrid-orcs',
          },
          {
            id: 'xref_chitars',
            label: 'ChiTaRS',
            key: 'other/chitars',
          },
          {
            id: 'xref_evolutionarytrace',
            label: 'EvolutionaryTrace',
            key: 'other/evolutionarytrace',
          },
          {
            id: 'xref_genewiki',
            label: 'GeneWiki',
            key: 'other/genewiki',
          },
          {
            id: 'xref_genomernai',
            label: 'GenomeRNAi',
            key: 'other/genomernai',
          },
          {
            id: 'xref_orcid',
            label: 'ORCID',
            key: 'other/orcid',
          },
          {
            id: 'xref_pgenn',
            label: 'PGenN',
            key: 'other/pgenn',
          },
          {
            id: 'xref_phi-base',
            label: 'PHI-base',
            key: 'other/phi-base',
          },
          {
            id: 'xref_pro',
            label: 'PRO',
            key: 'other/pro',
          },
          {
            id: 'xref_pharos',
            label: 'Pharos',
            key: 'other/pharos',
          },
          {
            id: 'xref_pubtator',
            label: 'PubTator',
            key: 'other/pubtator',
          },
          {
            id: 'xref_rnact',
            label: 'RNAct',
            key: 'other/rnact',
          },
          {
            id: 'xref_emind',
            label: 'eMIND',
            key: 'other/emind',
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
            key: 'gene_expression/bgee',
          },
          {
            id: 'xref_cleanex',
            label: 'CleanEx',
            key: 'gene_expression/cleanex',
          },
          {
            id: 'xref_collectf',
            label: 'CollecTF',
            key: 'gene_expression/collectf',
          },
          {
            id: 'xref_expressionatlas',
            label: 'ExpressionAtlas',
            key: 'gene_expression/expressionatlas',
          },
          {
            id: 'xref_genevisible',
            label: 'Genevisible',
            key: 'gene_expression/genevisible',
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
            key: 'family_and_domain/cdd',
          },
          {
            id: 'xref_disprot',
            label: 'DisProt',
            key: 'family_and_domain/disprot',
          },
          {
            id: 'xref_gene3d',
            label: 'Gene3D',
            key: 'family_and_domain/gene3d',
          },
          {
            id: 'xref_hamap',
            label: 'HAMAP',
            key: 'family_and_domain/hamap',
          },
          {
            id: 'xref_ideal',
            label: 'IDEAL',
            key: 'family_and_domain/ideal',
          },
          {
            id: 'xref_interpro',
            label: 'InterPro',
            key: 'family_and_domain/interpro',
          },
          {
            id: 'xref_ncbifam',
            label: 'NCBIfam',
            key: 'family_and_domain/ncbifam',
          },
          {
            id: 'xref_panther',
            label: 'PANTHER',
            key: 'family_and_domain/panther',
          },
          {
            id: 'xref_pirsf',
            label: 'PIRSF',
            key: 'family_and_domain/pirsf',
          },
          {
            id: 'xref_prints',
            label: 'PRINTS',
            key: 'family_and_domain/prints',
          },
          {
            id: 'xref_prosite',
            label: 'PROSITE',
            key: 'family_and_domain/prosite',
          },
          {
            id: 'xref_pfam',
            label: 'Pfam',
            key: 'family_and_domain/pfam',
          },
          {
            id: 'xref_sfld',
            label: 'SFLD',
            key: 'family_and_domain/sfld',
          },
          {
            id: 'xref_smart',
            label: 'SMART',
            key: 'family_and_domain/smart',
          },
          {
            id: 'xref_supfam',
            label: 'SUPFAM',
            key: 'family_and_domain/supfam',
          },
        ],
      },
    ],
  },
];
export default accordionData;
