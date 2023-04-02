import * as fs from 'fs';
export const readFile = (filename: string): Promise<any> =>
  new Promise((resolve, reject) =>
    fs.readFile(filename, (error: NodeJS.ErrnoException | null, data: any) => {
      error ? reject(error) : resolve(data);
    })
  );
