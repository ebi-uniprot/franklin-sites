import { Button } from '.';
import { Dropdown } from './dropdown-button';

const expasyPrefixUrl = '//web.expasy.org/cgi-bin';
const sequenceTools = [
  {
    name: 'ProtParam',
    url: '/protparam/protparam?',
  },
  {
    name: 'ProtScale',
    url: '/protscale/protscale.pl?',
  },
  {
    name: 'Compute pI/Mw',
    url: '/compute_pi/pi_tool?',
  },
  {
    name: 'PeptideMass',
    url: '/peptide_mass/peptide-mass.pl?',
  },
  {
    name: 'PeptideCutter',
    url: '/peptide_cutter/peptidecutter.pl?',
  },
];

const visibleElement = (onClick: () => unknown) => (
  <Button variant="tertiary" onClick={onClick}>
    Tools
  </Button>
);

type SequenceToolsProps = {
  accession: string;
  onBlastClick?: () => void;
};

const SequenceTools = ({ accession, onBlastClick }: SequenceToolsProps) => (
  <Dropdown visibleElement={visibleElement}>
    <ul>
      {onBlastClick && (
        <li>
          <Button variant="tertiary" onClick={onBlastClick}>
            BLAST
          </Button>
        </li>
      )}
      {sequenceTools.map((sequenceTool) => (
        <li key={sequenceTool.name}>
          <a
            href={`${expasyPrefixUrl}${sequenceTool.url}${accession}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sequenceTool.name}
          </a>
        </li>
      ))}
    </ul>
  </Dropdown>
);

export default SequenceTools;
