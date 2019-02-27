import React, { Component } from 'react';
import './tailwind.css';

const FormTemplate = (props) => {
  return (
    <div className="w-3/4">Template</div>
  )
}

const FormControls = (props) => {
  return (
    <div className="w-1/4">
      <h1>Controls</h1>
      <button className="bg-blue text-white p-4" onClick={
        (e) => {
          debugger;
          props.fields.push(1);
        }
      }>Text Field</button>
    </div>
  )
}


class TemplateDesigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    }
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex bg-grey-lighter">
        <FormTemplate />
        <FormControls fields={this.state.fields} />
        </div>
      </div>
    );
  }
}

export default TemplateDesigner;
