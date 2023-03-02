import { getLastIndexOfSubstringIgnoreCase } from '../utils';

import '../styles/components/substring-highlight.scss';

type Props = {
  string: string;
  substring: string;
};

const SubstringHighlight = ({ string, substring }: Props) => {
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
      <span className="highlight">{highlight}</span>
      {poststring}
    </>
  );
};

export default SubstringHighlight;
