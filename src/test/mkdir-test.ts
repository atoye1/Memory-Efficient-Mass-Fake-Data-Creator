import { mkdir } from '../fileApi/mkdir';

const makdeDataDir = async (dirname: string) => {
  try {
    let result = await mkdir(dirname);
    console.log('done');
    console.log(`${result} dir created`);
  } catch (error) {
    console.log(error);
  }
};

makdeDataDir('./data/today');
