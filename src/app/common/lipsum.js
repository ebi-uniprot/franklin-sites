import { loremIpsum } from 'lorem-ipsum';
import v1 from 'uuid';

export const getLipsumData = ({ numberDataPoints, keys, idKey }) => Array(numberDataPoints)
  .fill(null)
  .map(() => {
    const dataPoint = { [idKey]: v1() };
    keys.forEach((key) => {
      dataPoint[key] = {
        value: loremIpsum({
          sentenceLowerBound: 2,
          sentenceUpperBound: 30,
        }),
      };
    });
    return dataPoint;
  });

export default getLipsumData;
