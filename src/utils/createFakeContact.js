import { faker } from "@faker-js/faker";

export const createFakeContact = (number) => {
    const contacts = [];

    for (let i = 0; i < number; i++) {
        contacts.push({
            id: faker.datatype.uuid(),
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            job: faker.person.jobTitle(),
        });
    }

    return contacts; 
};
