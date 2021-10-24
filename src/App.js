import styles from "./App.module.css";
import React, { useState } from "react";
import { v1 as uuid, v1 } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const addContact = (name, number) => {
    const foundNames = contacts.map((contact) => contact.name.toLowerCase());
    const lowerName = name.toLocaleLowerCase();
    if (foundNames.includes(lowerName)) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: uuid(v1),
      name,
      number,
    };

    setContacts((contacts) => [contact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const lowerCasedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(lowerCasedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
