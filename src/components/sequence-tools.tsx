import Button from './button';
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
] as const;
export type SequenceToolName = (typeof sequenceTools)[number]['name'];

const visibleElement = (onClick: () => unknown) => (
  <Button variant="tertiary" onClick={onClick}>
    Tools
  </Button>
);

type SequenceToolsProps = {
  accession: string;
  onBlastClick?: () => void;
  tools?: SequenceToolName[];
};

const SequenceTools = ({
  accession,
  onBlastClick,
  tools,
}: SequenceToolsProps) => {
  const applicableTools = tools || sequenceTools.map((tool) => tool.name);
  return (
    <Dropdown visibleElement={visibleElement}>
      <ul>
        {onBlastClick && (
          <li>
            <Button variant="tertiary" onClick={onBlastClick}>
              BLAST
            </Button>
          </li>
        )}
        {sequenceTools.map((sequenceTool) => {
          if (applicableTools.includes(sequenceTool.name)) {
            return (
              <li key={sequenceTool.name}>
                <a
                  href={`${expasyPrefixUrl}${sequenceTool.url}${accession}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sequenceTool.name}
                </a>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </Dropdown>
  );
};

export default SequenceTools;
