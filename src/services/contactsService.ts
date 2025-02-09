async function getAllContacts() {
  try {
    const response = await fetch(
      "https://frontend-task-api.metasite.lt/api/contacts"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

async function getContactById(id: string) {
  try {
    const response = await fetch(
      `https://frontend-task-api.metasite.lt/api/contacts/${id}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

const contactsService = { getAllContacts, getContactById };

export default contactsService;
