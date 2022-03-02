import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends React.Component {
  render() {
    const {
      // handleFilter,
      nameFilter,
      onInputChange,
      rareFilter,
      trunfoFilter,
    } = this.props;

    return (
      <aside className="filter-area">
        <label htmlFor="nameFilter">
          {'Filtro de buscas: '}
          <input
            data-testid="name-filter"
            disabled={ trunfoFilter }
            name="nameFilter"
            type="text"
            value={ nameFilter }
            onChange={ onInputChange }
          />
        </label>
        <select
          data-testid="rare-filter"
          id="rareFilter"
          name="rareFilter"
          disabled={ trunfoFilter }
          value={ rareFilter }
          onChange={ onInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="trunfoFilter">
          {'Super Trunfo: '}
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            id="trunfoFilter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </aside>
    );
  }
}

Filter.propTypes = {
  rareFilter: PropTypes.string.isRequired,
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // handleFilter: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filter;

/* <button
type="button"
data-testid="filter-button"
id="filter"
onClick={ handleFilter }
>
Buscar
</button> */
