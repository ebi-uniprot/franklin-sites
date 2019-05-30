import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import v1 from 'uuid';

export const getLipsumData = ({ numberDataPoints, keys, idKey }) => Array(numberDataPoints)
  .fill(null)
  .map(() => {
    const dataPoint = { [idKey]: v1() };
    keys.forEach((key) => {
      const text = loremIpsum({
        sentenceLowerBound: 2,
        sentenceUpperBound: 30,
      });
      dataPoint[key] = text;
    });
    return dataPoint;
  });

export default getLipsumData;
