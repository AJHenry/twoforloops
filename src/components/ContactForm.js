import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import { Fade, Flip } from 'react-reveal';

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: false,
            idea: false,
            description: false,
            name: false,
            emailValue: '',
            ideaValue: '',
            descriptionValue: '',
            nameValue: '',
            mailto: '',
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
        let valid = true;
        if (this.state.descriptionValue.length < 20) {
            this.setState({ description: true })
            valid = false;
        } else {
            this.setState({ description: false })
        }

        if (this.state.ideaValue.length < 5) {
            this.setState({ idea: true })
            valid = false;
        } else {
            this.setState({ idea: false })
        }

        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailValue))) {
            this.setState({ email: true })
            valid = false;
        } else {
            this.setState({ email: false })
        }

        if (this.state.nameValue.length < 2) {
            this.setState({ name: true })
            valid = false;
        } else {
            this.setState({ name: false })
        }

        if (valid) {
            let mailtoString = "mailto:imandrewh@outlook.com"
                    + "?subject=" + this.state.ideaValue
                    + "&body=" + "Dear TwoForLoops Crew,%0D%0A%0D%0A"
                    + this.state.descriptionValue
                    + "%0D%0A%0D%0ASincerely,%0D%0A"
                    + this.state.nameValue
                    +"%0D%0A"
                    +this.state.emailValue;

            this.setState({
                mailto: mailtoString,
            });
            
            let x = window.open(mailtoString);
            x.close();
        }
    }

    render() {
        return (

            <Form>
                <Fade top cascade>
                    <FormGroup>
                        <Label>Name*</Label>
                        <Input placeholder="John Doe" value={this.state.nameValue} invalid={this.state.name} onChange={this.handleInputChange} name="nameValue" />
                        <FormFeedback>{this.props.nameError}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email*</Label>
                        <Input placeholder="example@example.com" value={this.state.emailValue} invalid={this.state.email} onChange={this.handleInputChange} name="emailValue" />
                        <FormFeedback>{this.props.emailError}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Idea*</Label>
                        <Input placeholder="Mobile Application" value={this.state.ideaValue} invalid={this.state.idea} onChange={this.handleInputChange} name="ideaValue" />
                        <FormFeedback>{this.props.ideaError}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tell Us More*</Label>
                        <Input placeholder="I want to make Tinder, but for animals" invalid={this.state.description} value={this.state.descriptionValue} type="textarea" onChange={this.handleInputChange} name="descriptionValue" />
                        <FormFeedback>{this.props.descriptionError}</FormFeedback>
                        <div className="small text-muted">This will open an email client since this is a hosted template</div>
                    </FormGroup>
                </Fade>
                <Fade bottom>
                    <div className="text-right">
                        <Button onClick={this.checkInput} href={this.state.mailto}>Send</Button>
                    </div>
                </Fade>
            </Form>

        );
    }
}

ContactForm.defaultProps = {
    ideaError: "Please enter an idea",
    emailError: "Please enter a valid email",
    descriptionError: "Please give a little more detail",
    nameError: "Please enter a name",
}