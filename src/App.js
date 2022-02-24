import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: 'https://picsum.photos/id/237/100',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.buttonDisabled());
  }

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    // const errors = {};
    const limiteIndividual = 90;
    const limiteTotal = 210;
    const isDisabled = (bool) => { this.setState({ isSaveButtonDisabled: bool }); };
    isDisabled(false);
    if (cardName === '') {
      isDisabled(true);
      // errors.cardName = '*Preencha o nome da carta*';
    }
    if (cardDescription === '') {
      isDisabled(true);
      // errors.cardDescription = '*Preencha a descrição da carta*';
    }
    if (cardImage === '') {
      isDisabled(true);
      // errors.cardImage = '*Coloque a URL de uma imagem para a carta*';
    }
    if (cardRare === '') {
      isDisabled(true);
      // errors.cardRare = '*Selecione a raridade da carta*';
    }
    if (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)
      > limiteTotal) {
      isDisabled(true);
      // errors.cardAttr3 = '*A soma dos atributos não pode ultrapassar 210*';
    }
    if (cardAttr1 > limiteIndividual
      || cardAttr2 > limiteIndividual
      || cardAttr3 > limiteIndividual) {
      isDisabled(true);
      // errors.cardAttr3 = '*Cada atributo não pode ultrapassar 90*';
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      isDisabled(true);
      // errors.cardAttr3 = '*Não pode existir atributo negativo*';
    }
  }

  addNewCard = (card) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  }

  handleSave = (event) => {
    event.preventDefault();
    if (!this.buttonDisabled()) {
      this.addNewCard(this.state);
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.handleSave }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
