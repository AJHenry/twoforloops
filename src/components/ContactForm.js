import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: false,
            idea: false,
            description: false,
            emailValue: '',
            ideaValue: '',
            descriptionValue: '',
        };
        
        this.checkInput = this.checkInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    checkInput() {
        if(this.state.descriptionValue.length < 20){
            this.setState({description: true})
        }else{
            this.setState({description: false})
        }

        if(this.state.ideaValue.length < 5){
            this.setState({idea: true})
        }else{
            this.setState({idea: false})
        }

        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailValue))) {
            this.setState({email: true})
        }else{
            this.setState({email: false})
        }
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>Email*</Label>
                    <Input placeholder="example@example.com" value={this.state.emailValue} invalid={this.state.email} onChange={this.handleInputChange} name="emailValue"/>
                    <FormFeedback>{this.props.emailError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Idea*</Label>
                    <Input placeholder="Mobile Application" value={this.state.ideaValue} invalid={this.state.idea} onChange={this.handleInputChange}  name="ideaValue"/>
                    <FormFeedback>{this.props.ideaError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Tell Us More*</Label>
                    <Col sm={10}>
                        <Input placeholder="I want to make Tinder, but for animals" invalid={this.state.description} value={this.state.descriptionValue} type="textarea" onChange={this.handleInputChange} name="descriptionValue"/>
                        <FormFeedback>{this.props.descriptionError}</FormFeedback>
                    </Col>
                </FormGroup>
                <Button onClick={this.checkInput}>Send</Button>
            </Form>
        );
    }
}

ContactForm.defaultProps = {
    ideaError: "Please enter an idea",
    emailError: "Please enter a valid email",
    descriptionError: "Please give a little more detail",
}