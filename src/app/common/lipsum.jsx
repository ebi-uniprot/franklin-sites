import { loremIpsum } from 'lorem-ipsum';
import v1 from 'uuid';

export const getLipsumSentence = () =>
  loremIpsum({
    sentenceLowerBound: 2,
    sentenceUpperBound: 30,
  });

export const fillArray = (numberElements, func) =>
  Array(numberElements)
    .fill(null)
    .map(func);

export const getLipsumObjectArray = ({ numberElements, keys, idKey }) =>
  fillArray(numberElements, () => {
    const dataPoint = { [idKey]: v1() };
    keys.forEach((key) => {
      const text = getLipsumSentence();
      dataPoint[key] = text;
    });
    return dataPoint;
  });

export default getLipsumObjectArray;
