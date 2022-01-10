import { loremIpsum } from 'lorem-ipsum';
import { v1 } from 'uuid';

export const getLipsumWords = () => loremIpsum({ count: 2, units: 'words' });

export const getLipsumSentences = () =>
  loremIpsum({
    sentenceLowerBound: 2,
    sentenceUpperBound: 30,
  });

type Args = {
  numberElements: number;
  keys: string[];
  idKey?: string;
  type?: 'sentences' | 'words';
};
export const getLipsumObjectArray = ({
  numberElements,
  keys,
  idKey = 'id',
  type = 'sentences',
}: Args): Array<Record<string, string>> =>
  Array.from({ length: numberElements }, () =>
    Object.fromEntries([
      [[idKey], v1()],
      ...keys.map((key) => [
        key,
        type === 'sentences' ? getLipsumSentences() : getLipsumWords(),
      ]),
    ])
  );

export default getLipsumObjectArray;
