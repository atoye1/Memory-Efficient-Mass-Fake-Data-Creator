import * as fs from 'fs';
import { fileExists } from './fileExists';

export const deleteFile = (filename: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const isExist = await fileExists(filename);
    if (!isExist) resolve(filename);
    fs.unlink(filename, (error) => {
      error ? reject(error) : resolve(filename);
    });
  });
};
