import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeLastContact = async () => {
    try {
        const dataBaseData = await fs.readFile(PATH_DB, { encoding: "utf-8" });
        let contacts = JSON.parse(dataBaseData);
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts), { encoding: "utf-8" });
            console.log("Deleted last contact");
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
