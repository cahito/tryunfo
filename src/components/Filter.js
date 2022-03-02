import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      handleFilter,
      nameFilter,
      onInputChange,
    } = this.props;

    return (
      <aside className="filter-area">
        <label htmlFor="filter">
          {'Filtro de buscas: '}
          <input
            data-testid="name-filter"
            name="nameFilter"
            type="text"
            value={ nameFilter }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="filter-button"
          id="filter"
          onClick={ handleFilter }
        >
          Buscar
        </button>
      </aside>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
