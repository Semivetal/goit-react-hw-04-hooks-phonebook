import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contactItem}>
        <span className={styles.contactName}>{name}</span>
        <span className={styles.contactNumber}>{number}</span>
        <button
          className={styles.contactBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  OnDeleteContact: PropTypes.func,
};

export default ContactList;
