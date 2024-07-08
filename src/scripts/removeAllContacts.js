import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
export const removeAllContacts = async () => {
    try {
        const dataBaseData = await fs.readFile(PATH_DB, { encoding: "utf-8" });
        let contacts = JSON.parse(dataBaseData);
        contacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), { encoding: "utf-8" });
        console.log("Contacts deleted");
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
