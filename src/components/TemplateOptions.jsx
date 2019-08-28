import React, { Component } from "react";
import ControlType from './ControlType'

const TemplateOptions = props => {
  return (
    <div className="w-1/4">
      <div className="p-3 w-full bg-teal-800">
        <button className="w-full bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded">Save Progress</button>
        <button className="w-full mt-2 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded">Preview PDF</button>
        <button className="w-full mt-2 bg-green-300 hover:bg-green-400 py-2 px-4 rounded">Make This Form Active</button>
      </div>
      <div className="border">
        <h1 className="p-3 text-lg font-bold mb-2">Add Item</h1>
        <div className="layout-controls">
          <h2 className="pl-3 text-md font-light mt-2 mb-2">Layout Controls</h2>
          <ControlType type="headerImage" label="Header Image" {...props} />
          <ControlType type="lineBreak" label="Line Break" {...props} />
        </div>
        <div className="generic-controls">
          <h2 className="pl-3 text-md font-light mt-2 mb-2">Generic Controls</h2>
          <ControlType type="textfield" label="Text Field" {...props} />
          <ControlType type="textarea" label="Text Area" {...props} />
          <ControlType type="date" label="Date" {...props} />
          <ControlType type="checkbox" label="Checkbox" {...props} />
        </div>
        <div className="special-controls">
          <h2 className="pl-3 text-md font-light mt-2 mb-2">Special Controls</h2>
          <ControlType type="tabular" label="Tabular" {...props} />
          <ControlType type="paragraphWithData" label="Paragraph with In-Line Data" {...props} />
          <ControlType type="signature" label="Signature" {...props} />
          <ControlType type="lockingGroup" label="LockingGroup" {...props} />
        </div>

        <div>
          <h1 className="p-3 text-lg font-bold mb-2">Item Options:</h1>
          <h2 className="pl-3 text-md font-light mt-2 mb-2">Selected Item Id: {props.selectedFieldId}</h2>
        </div>
      </div>
    </div>
  );
};

export default TemplateOptions