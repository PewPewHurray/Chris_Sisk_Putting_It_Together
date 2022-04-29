import React, {Component} from "react";

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthdayAge: this.props.age
        };
    }
    render() {
        const {firstName, lastName, hairColor} = this.props;
        const ageIncrement = () => {
            this.setState({birthdayAge: this.state.birthdayAge + 1});
        };
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.birthdayAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => ageIncrement()}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonComponent;