import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import data from './data';

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
    const { cards } = this.state;
    const limit = 32;
    if (cards.length < limit) {
      this.setState((prevState) => ({
        cards: [...prevState.cards, card],
      }));
    }
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
    console.log(cards);
    const cardToBeDeleted = parseInt(event.target.parentNode.id, 10);
    console.log(cardToBeDeleted);
    const newCards = cards.splice(cardToBeDeleted, 1);
    console.log(newCards);
    console.log(cards);
    this.buttonDisabled();
    this.handleHasTrunfo();
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
      <>
        <Header />
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
        <h2>Todas as cartas disponíveis</h2>
        <section className="card-collection">
          <aside className="filter-area">
            <label htmlFor="filter">
              {'Filtro de buscas: '}
              <input
                data-testid="name-filter"
                type="text"
              />
            </label>
            <button
              type="button"
              data-testid="filter-button"
              id="filter"
              onClick={ this.handleFilter }
            >
              Buscar
            </button>
          </aside>
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
      </>
    );
  }
}

export default App;
