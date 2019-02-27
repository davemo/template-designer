import React, { Component } from "react";
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

const Field = props => {
  const { selected, field } = props;
  let selectedStyle = {
    padding: "10px",
    backgroundColor: "purple"
  };
  return (
    <div
      style={selected ? selectedStyle : {}}
      onClick={() => {
        props.onSelectField(field.id);
      }}
    >
      {
        field.type === "textarea" ?
          <textarea className={fieldStyleSelector(field.type)} /> :
          <input className={fieldStyleSelector(field.type)} type={field.type} />
      }
    </div>
  );
}

const FormTemplate = props => {
  return (
    <div className="w-3/4 p-10 bg-white">
      <h1>Template</h1>
      {props.fields.map((field, index) => {
        let selected = props.selectedFieldId === field.id;
        return (
          <Field
            key={field.id}
            selected={selected}
            field={field}
            onSelectField={props.onSelectField}
          />
        );
      })}
    </div>
  );
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
      </div>
    );
  }
}

export default TemplateDesigner;
