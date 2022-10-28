import { connect } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions';
import { PropTypes } from 'prop-types';

function Filter({ filter, changeFilter }) {
  return (
    <label>
      Find contact by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => {
  return { filter: state.filter };
};
const mapDispatchToProps = dispatch => {
  return {
    changeFilter: e => dispatch(changeFilter(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
