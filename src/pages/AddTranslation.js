import React, { PureComponent } from 'react';
import axios from 'axios';
import '../App.css';

import { Container, Form, Button } from 'react-bootstrap';

class AddTranslation extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleChange(field, e){         
		let fields = this.state.fields;
		fields[field] = e.target.value;        
		this.setState({fields});
	}

    handleValidation() {
        let fields = this.state.fields;
		let errors = this.state.errors;
		let formIsValid = true;

        if (!fields['arabic']) {
            formIsValid = false;
			errors["arabic"] = "Arabisch kan niet leeg zijn...";
        }

        if (!fields['statement']) {
            formIsValid = false;
			errors["statement"] = "Uitspraak kan niet leeg zijn...";
        }

        if(typeof fields["statement"] !== "undefined") {
			if(!fields["statement"].match(/^[a-zA-Z]+$/)){
			   formIsValid = false;
			   errors["statement"] = "Uitspraak mag alleen uit letters bestaan";
			}        
		 }

        if (!fields['translation']) {
            formIsValid = false;
			errors["translation"] = "Vertaling kan niet leeg zijn...";
        }

        if(typeof fields["translation"] !== "undefined") {
			if(!fields["translation"].match(/^[a-zA-Z]+$/)) {
			   formIsValid = false;
			   errors["translation"] = "Vertaling mag alleen uit letters bestaan";
			}        
		}

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.handleValidation()) {
            axios.post("https://sheet.best/api/sheets/34d3f928-d3c4-4ff1-a2ff-8af1f2c53ca5", this.state.fields)
                .then((response) => {
                    console.log(console.log(response));
                });
            alert("Succesvol toegevoegd!");
        } else {
            alert("De formulier heeft een of meerdere foutmelden. Probeer opnieuw!");
        }
    }

    render() {
        return(
            <Container className="m-5">
                <Container className="m-5">
                    <h1>Add Translation</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group controlId="arabic">
                            <Form.Label>Arabisch</Form.Label>
                            <Form.Control type="text" name="arabic" placeholder="Arabisch ..." onChange={this.handleChange.bind(this, "arabic")} value={this.state.fields["arabic"]} />
                            <span style={{color: "red"}}>{this.state.errors["arabic"]}</span>
                        </Form.Group>
                        <Form.Group controlId="statement">
                            <Form.Label>Uitspraak</Form.Label>
                            <Form.Control type="text" name="statement" placeholder="Uitspraak ..." onChange={this.handleChange.bind(this, "statement")} value={this.state.fields["statement"]} />
                            <span style={{color: "red"}}>{this.state.errors["statement"]}</span>
                        </Form.Group>
                        <Form.Group controlId="translation">
                            <Form.Label>Vertaling</Form.Label>
                            <Form.Control type="text" name="translation" placeholder="Vertaling ..." onChange={this.handleChange.bind(this, "translation")} value={this.state.fields["translation"]} />
                            <span style={{color: "red"}}>{this.state.errors["translation"]}</span>
                        </Form.Group>
                        <Button variant="primary" type="submit"> Toevoegen </Button>
                    </Form>
                </Container>
            </Container>
        );
    }
}

export default AddTranslation;