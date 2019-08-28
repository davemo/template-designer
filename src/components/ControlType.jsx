import React, { Component } from "react";

const ControlType = props => {
  return (
    <div className="border-solid border pb-2 h-full w-full pt-2">
      <a
        href="#"
        className="w-full ml-5 text-sm"
        onClick={e => {
          props.onAddField(props.type);
        }}
      >
        {props.label}
      </a>
    </div>
  );
};

export default ControlType;