import React, { Component } from "react";
import Field from "./Field"

class FormTemplate extends React.Component {
  props = {};

  render() {
    return (
      <div className="w-3/4 p-10 bg-white">
        <h1>Template</h1>
        {this.props.fields.map((field, index) => {
          let selected = this.props.selectedFieldId === field.id;
          return (
            <Field
              key={field.id}
              selected={selected}
              field={field}
              onSelectField={this.props.onSelectField}
            />
          );
        })}
      </div>
    );
  }
}

export default FormTemplate;