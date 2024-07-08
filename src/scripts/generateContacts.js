import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async (number) => {
    createFakeContact(number);
};

generateContacts(5);
