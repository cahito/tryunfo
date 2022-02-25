import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const data = [
  {
    cardName: 'Carta muito loca',
    cardDescription: 'Qualquer coisa',
    cardAttr1: '70',
    cardAttr2: '70',
    cardAttr3: '70',
    cardImage: 'https://picsum.photos/id/237/100',
    cardRare: 'muito raro',
    cardTrunfo: true,
  },
  {
    cardName: 'Outra carta',
    cardDescription: 'Default',
    cardAttr1: '7',
    cardAttr2: '7',
    cardAttr3: '7',
    cardImage: 'https://picsum.photos/id/1022/100',
    cardRare: 'raro',
    cardTrunfo: false,
  },
  {
    cardName: 'Terceira carta',
    cardDescription: 'Default',
    cardAttr1: '5',
    cardAttr2: '5',
    cardAttr3: '5',
    cardImage: 'https://picsum.photos/id/27/100',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Quarta carta',
    cardDescription: 'Default',
    cardAttr1: '2',
    cardAttr2: '2',
    cardAttr3: '2',
    cardImage: 'https://picsum.photos/id/37/100',
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: data,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.handleHasTrunfo();
      this.buttonDisabled();
    });
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

  handleHasTrunfo = () => {
    const { cards } = this.state;
    this.setState({ hasTrunfo: cards.some((card) => card.cardTrunfo) });
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
      }, () => {
        this.buttonDisabled();
        this.handleHasTrunfo();
      });
    }
  }

  handleDelete = (event) => {
    event.preventDefault();
    const { cards } = this.state;
    const cardToBeDeleted = event.target.parentNode.id;
    console.log(cardToBeDeleted);
    const newCards = cards.splice(cardToBeDeleted, 1);
    console.log(newCards);
    this.setState({
      cards: newCards,
    });
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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.handleSave }
            />
          </div>
          <div>
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
        </main>
        <section className="card-collection">
          {cards.map((card, idx) => (
            <div key={ idx } id={ idx }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                id="delete"
                onClick={ this.handleDelete }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
