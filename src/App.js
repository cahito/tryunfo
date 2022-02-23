import React from 'react';
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
        <Form />
      </div>
    );
  }
}

export default App;
