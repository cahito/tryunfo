import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { inputTestId, inputName, inputType, inputLabel, inputValue } = this.props;
    return (
      <label htmlFor={ inputName }>
        {inputLabel}
        <input
          data-testid={ inputTestId }
          type={ inputType }
          name={ inputName }
          id={ inputName }
          value={ inputValue }
          placeholder="Digite a informação"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputTestId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
};

Input.defaultProps = {
  inputValue: '',
};

export default Input;
