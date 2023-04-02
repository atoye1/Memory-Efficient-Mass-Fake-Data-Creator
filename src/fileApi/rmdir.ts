import rimraf from 'rimraf';
import { fileExists } from './fileExists';

export const rmdir = (dirname: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const alreadyExists = fileExists(dirname);
    !alreadyExists
      ? resolve(dirname)
      : rimraf(dirname).then((data) => resolve(dirname));
  });
};
