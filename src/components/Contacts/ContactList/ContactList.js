import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useDeleteEntryMutation } from 'redux/phonebook/phonebook-slice';
import s from './ContactList.module.css';

function ContactList({ contacts, filter }) {
  const filtredContacts = visibleFilter(filter, contacts);
  const [onDelete, { isLoading }] = useDeleteEntryMutation();

  return (
    <ul className={s.list}>
      {filtredContacts.map(contactsItem => (
        <ContactListItem
          key={contactsItem.id}
          id={contactsItem.id}
          name={contactsItem.name}
          number={contactsItem.number}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onVisibleFilter: PropTypes.func,
  onDeleteUser: PropTypes.func,
};

const visibleFilter = (filter, allContacts) => {
  const normalizedFilter = filter.toLowerCase();

  if (allContacts !== []) {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};

const mapStateToProps = state => {
  return { filter: state.filter };
};

export default connect(mapStateToProps, null)(ContactList);
