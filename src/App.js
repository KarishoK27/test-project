import React from 'react'
import Tables from './Tables'
import Form from './Form'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tables: [
        { persons: [] }
      ]
    }
  }

  removeTable = index => {
    const { tables } = this.state;

    this.setState({
      tables: tables.filter((table, i) => {
        return (i !== index || i === 0);
      })
    });
  }

  copyTable = index => {
    const { tables } = this.state;
    const table = tables[index];
    tables.splice(index + 1, 0, { persons: table.persons })

    this.setState({
      tables: tables
    });
  }

  rowDelete = (index, id) => {
    const { tables } = this.state;

    tables[index].persons = tables[index].persons.filter((person, i) => {
      return i !== id;
    })

    this.setState({
      tables: tables
    });
  }

  rowEdit = (table, id, person) => {
    alert('Not working...')
  }

  handleEdit = (data) => {
    const { tables } = this.state;
    tables[data.table].persons[data.id] = {
      name: data.name,
      surname: data.surname,
      age: data.age,
      city: data.city
    };

    this.setState({
      tables: tables
    });
  }

  handleSubmit = person => {
    const tables = this.state.tables;
    tables[0].persons = [...tables[0].persons, person]
    this.setState(tables);
  }

  render() {

    const tables = this.state.tables;

    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />
        <Tables
          tables={tables}
          removeTable={this.removeTable}
          copyTable={this.copyTable}
          rowDelete={this.rowDelete}
          rowEdit={this.rowEdit}
        />
      </div>
    );
  }
}

export default App;