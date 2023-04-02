import * as fs from 'fs';

export const writeFile = (filename: string, data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      filename,
      data,
      'utf-8',
      (error: NodeJS.ErrnoException | null) => {
        error ? reject(error) : resolve(data);
      }
    );
  });
};
