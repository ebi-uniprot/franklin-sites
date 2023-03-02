import { getLastIndexOfSubstringIgnoreCase } from '../utils';

import '../styles/components/substring-highlight.scss';

type Props = {
  children: string;
  substring: string;
};

const SubstringHighlight = ({ children: string, substring }: Props) => {
  if (!string || !substring) {
    return <>{string}</>;
  }
  const trimmed = substring.trim();
  const i = getLastIndexOfSubstringIgnoreCase(string, trimmed);
  if (i < 0) {
    return <>{string}</>;
  }
  const prestring = string.slice(0, i);
  const highlight = string.slice(i, i + trimmed.length);
  const poststring = string.slice(i + trimmed.length);
  return (
    <>
      {prestring}
      <mark className="highlight">{highlight}</mark>
      {poststring}
    </>
  );
};

export default SubstringHighlight;
