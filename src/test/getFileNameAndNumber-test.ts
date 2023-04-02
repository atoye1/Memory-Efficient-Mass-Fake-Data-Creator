import { getFileNameAndNumber } from '../utils/getFileNameAndNumbers';

const [filename, numberOfFakeData] = getFileNameAndNumber(
  'data/fake.csv',
  100_000
);
console.log(filename, numberOfFakeData);
