import React, { Component } from 'react';
import './tailwind.css';

const FormTemplate = (props) => {
  return (
    <div className="w-3/4">Template</div>
  )
}

const FormControls = (props) => {
  return (
    <div className="w-1/4">Controls</div>
  )
}


class TemplateDesigner extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="flex bg-grey-lighter">
        <FormTemplate />
        <FormControls />
        </div>
      </div>
    );
  }
}

export default TemplateDesigner;
