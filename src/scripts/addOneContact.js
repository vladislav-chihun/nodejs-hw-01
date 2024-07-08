import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { faker } from "@faker-js/faker";

export const addOneContact = async () => {
    const newContact = {
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        job: faker.person.jobTitle(),
    };

    try {
        const dataBaseData = await fs.readFile(PATH_DB, { encoding: "utf-8" });
        const contacts = JSON.parse(dataBaseData);
        contacts.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), { encoding: "utf-8" });
        console.log("Contact added");
    } catch (error) {
        console.error(error);
    }
};

addOneContact();
