import {
  BasketIcon,
  BinIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CitedIcon,
  CitedSpeechIcon,
  ClockIcon,
  CloseIcon,
  ComputerMappedIcon,
  ConfigureIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  ErrorIcon,
  EvidenceTagIcon,
  ExternalLinkIcon,
  ListIcon,
  ObsoleteIcon,
  ProteinIcon,
  ProtVistaIcon,
  PublicationIcon,
  PublicationLineIcon,
  RefreshIcon,
  ReSubmitIcon,
  SearchIcon,
  SpinnerIcon,
  StatisticsIcon,
  SuccessIcon,
  SwissProtIcon,
  TableIcon,
  TagIcon,
  TremblIcon,
  UniParcIcon,
  WarningIcon,
  WarningTriangleIcon,
} from '../src/components';

export default {
  title: 'Core/Icons',
};

const size = 30;

const iconDefinition = [
  {
    name: 'swissprot.svg',
    description: 'SwissProt reviewed',
    icon: <SwissProtIcon width={size} height={size} />,
  },
  {
    name: 'trembl.svg',
    description: 'Trembl unreviewed',
    icon: <TremblIcon width={size} height={size} />,
  },
  {
    name: 'uniparc.svg',
    description: 'UniParc',
    icon: <UniParcIcon width={size} height={size} />,
  },
  {
    name: 'obsolete.svg',
    description: 'Obsolete entry',
    icon: <ObsoleteIcon width={size} height={size} />,
  },
  {
    name: 'tag.svg',
    description: 'Tag',
    icon: <TagIcon width={size} height={size} />,
  },
  {
    name: 'chevron-up.svg',
    description: 'Chevron Up',
    icon: <ChevronUpIcon width={size} height={size} />,
  },
  {
    name: 'chevron-down.svg',
    description: 'Chevron Down',
    icon: <ChevronDownIcon width={size} height={size} />,
  },
  {
    name: 'external-link.svg',
    description: 'External Link',
    icon: <ExternalLinkIcon width={size} height={size} />,
  },
  {
    name: 'download.svg',
    description: 'Download',
    icon: <DownloadIcon width={size} height={size} />,
  },
  {
    name: 'basket.svg',
    description: 'Basket',
    icon: <BasketIcon width={size} height={size} />,
  },
  {
    name: 'statistics.svg',
    description: 'Statistics',
    icon: <StatisticsIcon width={size} height={size} />,
  },
  {
    name: 'protein.svg',
    description: 'Protein',
    icon: <ProteinIcon width={size} height={size} />,
  },
  {
    name: 'table.svg',
    description: 'Table',
    icon: <TableIcon width={size} height={size} />,
  },
  {
    name: 'th-list.svg',
    description: 'List',
    icon: <ListIcon width={size} height={size} />,
  },
  {
    name: 'cog.svg',
    description: 'Configure',
    icon: <ConfigureIcon width={size} height={size} />,
  },
  {
    name: 'search.svg',
    description: 'Search',
    icon: <SearchIcon width={size} height={size} />,
  },
  {
    name: 'times.svg',
    description: 'Close',
    icon: <CloseIcon width={size} height={size} />,
  },
  {
    name: 'pen.svg',
    description: 'Edit',
    icon: <EditIcon width={size} height={size} />,
  },
  {
    name: 'publication.svg',
    description: 'Publication',
    icon: <PublicationIcon width={size} height={size} />,
  },
  {
    name: 'publication-line.svg',
    description: 'Publication Line',
    icon: <PublicationLineIcon width={size} height={size} />,
  },
  {
    name: 'cited.svg',
    description: 'Cited',
    icon: <CitedIcon width={size} height={size} />,
  },
  {
    name: 'cited-speech.svg',
    description: 'Cited Speech',
    icon: <CitedSpeechIcon width={size} height={size} />,
  },
  {
    name: 'computer-mapped.svg',
    description: 'Computer Mapped',
    icon: <ComputerMappedIcon width={size} height={size} />,
  },
  {
    name: 'evidence-tag.svg',
    description: 'Evidence Tag',
    icon: <EvidenceTagIcon width={size} height={size} />,
  },
  {
    name: 'protvista.svg',
    description: 'ProtVista',
    icon: <ProtVistaIcon width={size} height={size} />,
  },
  {
    name: 'error.svg',
    description: 'Error',
    icon: <ErrorIcon width={size} height={size} />,
  },
  {
    name: 'warning.svg',
    description: 'Warning',
    icon: <WarningIcon width={size} height={size} />,
  },
  {
    name: 'warning-triangle.svg',
    description: 'Warning Triangle',
    icon: <WarningTriangleIcon width={size} height={size} />,
  },
  {
    name: 'refresh.svg',
    description: 'Refresh',
    icon: <RefreshIcon width={size} height={size} />,
  },
  {
    name: 'bin.svg',
    description: 'Bin',
    icon: <BinIcon width={size} height={size} />,
  },
  {
    name: 'copy.svg',
    description: 'Copy',
    icon: <CopyIcon width={size} height={size} />,
  },
  {
    name: 'clock.svg',
    description: 'Clock',
    icon: <ClockIcon width={size} height={size} />,
  },
  {
    name: 'spinner.svg',
    description: 'Spinner',
    icon: <SpinnerIcon width={size} height={size} />,
  },
  {
    name: 're-submit.svg',
    description: 'Re-submit',
    icon: <ReSubmitIcon width={size} height={size} />,
  },
  {
    name: 'success.svg',
    description: 'Success',
    icon: <SuccessIcon width={size} height={size} />,
  },
];

export const icons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {iconDefinition.map((d) => (
        <div
          key={d.name}
          style={{
            padding: '1rem',
            margin: '0.2rem',
            width: '10rem',
            textAlign: 'center',
          }}
        >
          {d.icon}
          <div>
            <small>{d.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};
