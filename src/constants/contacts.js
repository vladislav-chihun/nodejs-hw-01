import path from 'node:path';

const pathToWorkDir = process.cwd();
const pathToFile = path.join(pathToWorkDir, 'src', 'db', 'db.json');

export const PATH_DB = pathToFile;
