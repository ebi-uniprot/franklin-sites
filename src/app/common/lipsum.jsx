import { loremIpsum } from 'lorem-ipsum';
import v1 from 'uuid';
import { fillArray } from '../../utils';

export const getLipsumWord = () => loremIpsum({ count: 1, units: 'words' });

export const getLipsumSentence = (maxLength = null) => {
  const sentence = loremIpsum({
    sentenceLowerBound: 2,
    sentenceUpperBound: 30,
  });
  return maxLength ? sentence.slice(0, maxLength) : sentence;
};

export const getLipsumObjectArray = ({ numberElements, keys, idKey = 'id' }) =>
  fillArray(numberElements, () => {
    const dataPoint = { [idKey]: v1() };
    keys.forEach((key) => {
      const text = getLipsumSentence();
      dataPoint[key] = text;
    });
    return dataPoint;
  });

export default getLipsumObjectArray;
