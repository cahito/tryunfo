import React from 'react';
// import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo } = this.state;
    return (
      <form>
        <label htmlFor="name">
          {'Nome do objeto: '}
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          {'Descrição: '}
          <textarea
            cols={ 25 }
            rows={ 3 }
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr1">
          {'Atributo 1: '}
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="attr1"
            value={ attr1 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr2">
          {'Atributo 2: '}
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="attr2"
            value={ attr2 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr3">
          {'Atributo 3: '}
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="attr3"
            value={ attr3 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image">
          {'Imagem: '}
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="image"
            value={ image }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rare">
          {'Raridade: '}
          <select
            data-testid="rare-input"
            type="text"
            id="rare"
            name="rare"
            value={ rare }
            onChange={ this.handleChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          {'Super trunfo: '}
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            name="trunfo"
            value={ trunfo }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          id="save"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
