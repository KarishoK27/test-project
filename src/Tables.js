import React from 'react'
import './style/tables.scss'

class Table extends React.Component {
    renderTableHeader() {
        return (
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>City</th>
                <th></th>
            </tr>
        )
    }

    renderTableData() {
        return this.props.persons.map((person, id) => {
            const table = this.props.id
            const { name, surname, age, city } = person
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>{age}</td>
                    <td>{city}</td>
                    <td>
                        <button
                            className="row-edit"
                            onClick={() => this.props.personEdit(table, id, person)}>Edit
                        </button>
                        <button
                            className="row-delete"
                            onClick={() => this.props.personDelete(table, id)}>Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table id={this.props.id}>
                <thead>
                    {this.renderTableHeader()}
                </thead>
                <tbody>
                    {this.renderTableData()}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class Tables extends React.Component {

    personDelete = (index, id) => {
        this.props.rowDelete(index, id)
    }

    personEdit = (index, id, person) => {
        this.props.rowEdit(index, id, person)
    }

    render() {
        const tables = this.props.tables.map((table, index) => {
            return (
                <div className="table-container" key={index}>
                    <div className="table-control">
                        <button className="table-copy" onClick={() => this.props.copyTable(index)}>Copy table</button>
                        <button className="table-delete" onClick={() => this.props.removeTable(index)}></button>
                    </div>
                    <Table
                        id={index}
                        persons={table.persons}
                        personDelete={this.personDelete}
                        personEdit={this.personEdit}
                    />
                </div>
            )
        })

        return (
            <div>{tables}</div>
        )
    }
}

export default Tables