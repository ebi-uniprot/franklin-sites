import { loremIpsum } from 'lorem-ipsum';
import v1 from 'uuid';
import { fillArray, capitaliseFirstLetter } from '../../utils';

export const getLipsumWords = () => capitaliseFirstLetter(loremIpsum({ count: 2, units: 'words' }));

export const getLipsumSentences = () =>
  loremIpsum({
    sentenceLowerBound: 2,
    sentenceUpperBound: 30,
  });

export const getLipsumObjectArray = ({
  numberElements, keys, idKey = 'id', type = 'sentences',
}) =>
  fillArray(numberElements, () => {
    const dataPoint = { [idKey]: v1() };
    keys.forEach((key) => {
      const text = type === 'sentences' ? getLipsumSentences() : getLipsumWords();
      dataPoint[key] = text;
    });
    return dataPoint;
  });

export default getLipsumObjectArray;
