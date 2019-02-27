import React, { Component } from "react";
import "./tailwind.css";

class Field extends React.PureComponent {
  render() {
    const { selected, field } = this.props;
    let selectedStyle = {
      padding: "10px",
      backgroundColor: "purple"
    };
    return (
      <div
        style={selected ? selectedStyle : {}}
        onClick={() => {
          this.props.onSelectField(field.id);
        }}
      >
        {field.type === "textarea" ? <textarea /> : <input type={field.type} />}
      </div>
    );
  }
}

const FormTemplate = props => {
  return (
    <div className="w-3/4">
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
      className="bg-blue text-white p-4"
      onClick={e => {
        props.onAddField(props.type);
      }}
    >
      {props.type}
    </button>
  );
};

const FormControls = props => {
  return (
    <div className="w-1/4">
      <h1>Controls</h1>
      <ControlType type="textfield" {...props} />
      <ControlType type="textarea" {...props} />
      <ControlType type="date" {...props} />
      <ControlType type="checkbox" {...props} />
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
          <FormControls onAddField={this.addField} />
        </div>
      </div>
    );
  }
}

export default TemplateDesigner;
