import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";

const generateContacts = async (number) => {
    try {
        const newContacts = createFakeContact(number);
        const dataBaseData = await fs.readFile(PATH_DB, { encoding: "utf-8" });
        const existingContacts = JSON.parse(dataBaseData);
        existingContacts.push(...newContacts);
        await fs.writeFile(PATH_DB, JSON.stringify(existingContacts), { encoding: "utf-8" });
        console.log(`Contacts added`);
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);
