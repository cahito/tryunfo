import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{cardName}</h2>
        <div className="image-container">
          <img
            alt={ cardName }
            data-testid="image-card"
            src={ cardImage }
          />
        </div>
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{`Atributo 1:____ ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Atributo 2:____ ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Atributo 3:____ ${cardAttr3}`}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {(cardTrunfo)
          ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <p className="blank" />}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
