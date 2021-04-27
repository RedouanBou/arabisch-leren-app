import React, { PureComponent } from 'react';
import axios from 'axios';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Form, Button } from 'react-bootstrap';

class AddTranslation extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
		let errors = this.state.errors;
		let formIsValid = true;

        if (!fields["arabisch"]) {
            formIsValid = false;
            alert("Arabisch kan niet leeg zijn...");
        }

        if (!fields["uitspraak"]) {
            formIsValid = false;
            alert("Uitspraak kan niet leeg zijn...");
        }

        if (!fields["vertaling"]) {
            formIsValid = false;
            alert("Vertaling kan niet leeg zijn...");
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.fields);
        if(this.handleValidation()) {
            axios.post("https://sheet.best/api/sheets/20ea87ab-3cc5-41a7-a007-dbb4644c8923", this.state.fields)
                .then((response) => {
                    console.log(response);
                });
            alert("Succesvol toegevoegd!");
        }
    }

    handleChange(field, e) {         
		let fields = this.state.fields;
		fields[field] = e.target.value;        
		this.setState({fields});
	}

    render() {
        return(
            <Container className="p-0 mt-5">
                <Container className="p-0 mt-5">
                    <h1>Voeg Arabisch Toe</h1>
                    <hr />
                    <Form className="form" onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group controlId="arabic">
                            <Form.Label>Arabisch</Form.Label>
                            <Form.Control type="text" name="arabisch" placeholder="Arabisch ..." onChange={this.handleChange.bind(this, "arabisch")} value={this.state.fields["arabisch"]} />
                        </Form.Group>
                        <Form.Group controlId="statement">
                            <Form.Label>Uitspraak</Form.Label>
                            <Form.Control type="text" name="uitspraak" placeholder="Uitspraak ..." onChange={this.handleChange.bind(this, "uitspraak")} value={this.state.fields["uitspraak"]} />
                            <p style={{color: "red"}}>{this.state.errors["uitspraak"]}</p>
                        </Form.Group>
                        <Form.Group controlId="translation">
                            <Form.Label>Vertaling</Form.Label>
                            <Form.Control type="text" name="vertaling" placeholder="Vertaling ..." onChange={this.handleChange.bind(this, "vertaling")} value={this.state.fields["vertaling"]} />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Toevoegen </Button>
                    </Form>
                </Container>
            </Container>
        );
    }
}

export default AddTranslation;