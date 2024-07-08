import { faker } from "@faker-js/faker";
import * as fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const createFakeContact = () => {
  const data = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
  fs.writeFile(PATH_DB, JSON.stringify(data));
  console.log(data)
};