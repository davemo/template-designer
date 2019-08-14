import React, { Component } from "react";
import Field from "./Field"
import FormTemplate from './FormTemplate'
import "./tailwind.css";

const fieldStyleSelector = (fieldType) => {
  switch (fieldType){
    case 'checkbox':
      return "mr-2 leading-tight"
    case 'textarea':
      return "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
    default:
      return "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  }
};

const ControlType = props => {
  return (
    <button
      className="bg-blue text-white p-4 block rounded w-full mb-4"
      onClick={e => {
        props.onAddField(props.type);
      }}
    >
      {props.label}
    </button>
  );
};

const FormControls = props => {
  return (
    <div className="w-1/4 p-10">
      <h1>Add Item</h1>
      <ControlType type="textfield" label="Text Field" {...props} />
      <ControlType type="textarea" label="Text Area" {...props} />
      <ControlType type="date" label="Date" {...props} />
      <ControlType type="checkbox" label="Checkbox" {...props} />
      <h1>Item Options</h1>
      <p>Selected Item Id: {props.selectedFieldId}</p>
    </div>
  );
};

class TemplateDesigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      selectedFieldId: -1
    };
  }
  addField = field => {
    this.setState({
      fields: [...this.state.fields, { id: new Date().valueOf(), type: field }]
    });
  };

  selectField = id => {
    this.setState({ selectedFieldId: id });
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex bg-grey-lighter">
          <FormTemplate
            fields={this.state.fields}
            onSelectField={this.selectField}
            selectedFieldId={this.state.selectedFieldId}
          />
          <FormControls
            onAddField={this.addField}
            selectedFieldId={this.state.selectedFieldId}
          />
        </div>
        <h3>Next Steps</h3>
        <ul>
          <li>Item Options Panel</li>
          <li>Visual Regression Testing w/ Chroma.UI</li>
          <li>Integration Testing with Cypress.io</li>
          <li>Deploy into Traverse alongside Angular</li>
          <li>Deploy into Electron as a Standalone App</li>
        </ul>
      </div>
    );
  }
}

export default TemplateDesigner;
