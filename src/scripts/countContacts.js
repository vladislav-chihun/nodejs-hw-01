import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
    const dataBaseData = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const contacts = JSON.parse(dataBaseData);
    return contacts.length;
};

console.log(await countContacts());
