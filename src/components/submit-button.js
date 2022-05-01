import React from "react";

export default class SubmitButton extends React.Component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Submit');
    }
}