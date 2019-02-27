import React, { Component } from 'react';
import './tailwind.css';

const FormTemplate = (props) => {
  return (
    <div className="w-3/4">
      <h1>Template</h1>
      <pre>{JSON.stringify(props.fields)}</pre>
    </div>
  )
}

const ControlType = (props) => {
  return (
      <button className="bg-blue text-white p-4" onClick={
        (e) => {
          props.onAddField(props.type)
        }
      }>{props.type}</button>
  )
}

const FormControls = (props) => {
  return (
    <div className="w-1/4">
      <h1>Controls</h1>
      <ControlType type="textfield" {...props}/>
      <ControlType type="textarea" {...props}/>
      <ControlType type="date" {...props}/>
      <ControlType type="checkbox" {...props}/>
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
  addField = (field) => {
    this.setState({
      fields: [...this.state.fields, field]
    })
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex bg-grey-lighter">
        <FormTemplate fields={this.state.fields} />
        <FormControls onAddField={this.addField} />
        </div>
      </div>
    );
  }
}

export default TemplateDesigner;
