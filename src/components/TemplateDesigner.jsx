import React, { Component } from "react";
import Template from './Template'
import TemplateOptions from "./TemplateOptions";

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
      <div>
        <div className="bg-gray-700 h-20">
          <div className="container mx-auto">
            <h1 className="ml-8 pt-8 text-xl font-thin text-gray-100">Some Very Important Form</h1>
          </div>
        </div>
        <div className="container mx-auto h-screen border flex bg-grey-lighter">
          <Template
            fields={this.state.fields}
            onSelectField={this.selectField}
            selectedFieldId={this.state.selectedFieldId}
          />
          <TemplateOptions
            onAddField={this.addField}
            selectedFieldId={this.state.selectedFieldId}
          />
        </div>
        {/* <h3>Next Steps</h3>
        <ul>
          <li>Item Options Panel</li>
          <li>Visual Regression Testing w/ Chroma.UI</li>
          <li>Integration Testing with Cypress.io</li>
          <li>Deploy into Traverse alongside Angular</li>
          <li>Deploy into Electron as a Standalone App</li>
        </ul> */}
      </div>
    );
  }
}

export default TemplateDesigner;
