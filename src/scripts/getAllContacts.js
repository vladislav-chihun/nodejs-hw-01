import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
export const getAllContacts = async () => {
    return fs.readFile("db.json", { encoding: "utf-8" });
};

console.log(await getAllContacts());
