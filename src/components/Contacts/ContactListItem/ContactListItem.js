import { PropTypes } from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDelete, isLoading }) {
  return (
    <li className={s.item}>
      <p className={s.name}>
        {name}: {number}
      </p>
      <button
        className={s.delete}
        type="button"
        disabled={isLoading}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
