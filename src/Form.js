import React from 'react'
import './style/form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            surname: '',
            age: '',
            city: ''
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleValidation() {
        const { name, surname, age, city } = this.state;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!name) {
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }

        if (typeof name !== "undefined") {
            if (!name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters in Name";
            }
        }

        //Surname
        if (!surname) {
            formIsValid = false;
            errors["surname"] = "Surname cannot be empty";
        }

        if (typeof surname !== "undefined") {
            if (!surname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["surname"] = "Only letters in Surname";
            }
        }

        //Age
        if (!age) {
            formIsValid = false;
            errors["age"] = "Age cannot be empty";
        }

        if (typeof age !== "undefined") {
            if (!age.match(/^\+?\d+$/)) {
                formIsValid = false;
                errors["age"] = "Age must be positive number";
            }
        }

        //City
        if (typeof city !== "undefined") {
            if (!city.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["city"] = "Only letters in City";
            }
        }

        if (JSON.stringify(errors) !== JSON.stringify({})) {
            alert(JSON.stringify(errors));
        }
        return formIsValid;
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidation()) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        }
    }



    render() {
        const { name, surname, age, city } = this.state;

        return (
            <div className="form-container">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        value={surname}
                        placeholder="Surname"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="age"
                        id="age"
                        value={age}
                        placeholder="Age"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        placeholder="City"
                        onChange={this.handleChange} />
                    <input id="row-add" type="submit" value="Add" />
                    <button id="row-edit" onClick={() => this.props.handleEdit(this.state)}>Edit</button>
                </form>
            </div>
        )
    }
}

export default Form