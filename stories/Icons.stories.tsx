import { Meta, StoryObj } from '@storybook/react';

import {
  BasketIcon,
  BinIcon,
  BookIcon,
  BookLineIcon,
  CalendarIcon,
  CameraIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CitedIcon,
  CitedSpeechIcon,
  ClockIcon,
  CloseIcon,
  CommunityAnnotationIcon,
  ComputerMappedIcon,
  ConfigureIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  EnvelopeIcon,
  ErrorIcon,
  EvidenceTagIcon,
  ExternalLinkIcon,
  HelpIcon,
  InformationIcon,
  ListIcon,
  LocationPinIcon,
  ObsoleteIcon,
  ProtVistaIcon,
  ProteinIcon,
  PublicationIcon,
  ReSubmitIcon,
  ReferenceProteomeIcon,
  RefreshIcon,
  SearchIcon,
  SpinnerIcon,
  StatisticsIcon,
  SuccessIcon,
  SwissProtIcon,
  TableIcon,
  TagIcon,
  TremblIcon,
  ToolboxIcon,
  UniParcIcon,
  WarningIcon,
  WarningTriangleIcon,
  WorldIcon,
  ZoomIn,
  ZoomOut,
  ZoomToSequence,
  FullViewIcon,
  ShareNodesIcon,
  RedundantProteomeIcon,
} from '../src/components';

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
    name: 'reference-proteome.svg',
    description: 'Reference proteome',
    icon: <ReferenceProteomeIcon width={size} height={size} />,
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
    name: 'book.svg',
    description: 'Book',
    icon: <BookIcon width={size} height={size} />,
  },
  {
    name: 'book-line.svg',
    description: 'Book Line',
    icon: <BookLineIcon width={size} height={size} />,
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
  {
    name: 'community.svg',
    description: 'Community',
    icon: <CommunityAnnotationIcon width={size} height={size} />,
  },
  {
    name: 'zoom-in.svg',
    description: 'Zoom In',
    icon: <ZoomIn width={size} height={size} />,
  },
  {
    name: 'zoom-out.svg',
    description: 'Zoom Out',
    icon: <ZoomOut width={size} height={size} />,
  },
  {
    name: 'zoom-to-sequence.svg',
    description: 'Zoom to sequence',
    icon: <ZoomToSequence width={size} height={size} />,
  },
  {
    name: 'envelope.svg',
    description: 'Envelope',
    icon: <EnvelopeIcon width={size} height={size} />,
  },
  {
    name: 'help.svg',
    description: 'Help',
    icon: <HelpIcon width={size} height={size} />,
  },
  {
    name: 'information.svg',
    description: 'Information',
    icon: <InformationIcon width={size} height={size} />,
  },
  {
    name: 'location-pin.svg',
    description: 'Location Pin',
    icon: <LocationPinIcon width={size} height={size} />,
  },
  {
    name: 'calendar.svg',
    description: 'Calendar',
    icon: <CalendarIcon width={size} height={size} />,
  },
  {
    name: 'camera.svg',
    description: 'Camera',
    icon: <CameraIcon width={size} height={size} />,
  },
  {
    name: 'world.svg',
    description: 'World',
    icon: <WorldIcon width={size} height={size} />,
  },
  {
    name: 'toolbox.svg',
    description: 'Toolbox',
    icon: <ToolboxIcon width={size} height={size} />,
  },
  {
    name: 'full-view.svg',
    description: 'Full View',
    icon: <FullViewIcon width={size} height={size} />,
  },
  {
    name: 'share-nodes.svg',
    description: 'Share',
    icon: <ShareNodesIcon width={size} height={size} />,
  },
  {
    name: 'redundant-proteome.svg',
    description: 'Redundant proteome',
    icon: <RedundantProteomeIcon width={size} height={size} />,
  },
];
const IconComponents = ({ color }: { color: string }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      color,
    }}
  >
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

const meta: Meta = {
  title: 'Core/Icons',
  component: IconComponents,
  render: ({ color }) => <IconComponents color={color} />,
  argTypes: {
    color: {
      control: 'select',
      name: 'CSS color',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'white',
        'blue',
      ],
    },
  },
  args: { color: 'sapphireBlue' },
};

export default meta;

type Story = StoryObj<typeof IconComponents>;

export const Icon: Story = {};
