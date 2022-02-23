import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
/*   constructor() {
    super();
    this.state = {
      projects: data,
    };
  }
 */
  /*     addNewProject = (project) => {
    this.setState((prevState) => ({
      projects: [...prevState.projects, project],
    }));
  }

  removeTopic = (title) => {
    console.log(title);
    const { projects } = this.state;
    // this.setState(() => ({ projects: projects.filter((item) => item.title !== title) }));
    this.setState({
      projects: projects.filter((item) => item.title !== title),
    });
  } */

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
