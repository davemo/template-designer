import React, { Component } from "react";

class Field extends React.Component {
  consturctor(props) {
    let selected = true;
    // const { selected, field } = props;
    let selectedStyle = {
      padding: "10px",
      backgroundColor: "teal",
      color: "white"
    };
  }

  render() {
    return (
      <div>
        <blockquote>Field Type Here</blockquote>
        <textarea></textarea>
        <input />
      </div>
      // <div
      //   style={selected ? selectedStyle : {}}
      //   onClick={() => {
      //     props.onSelectField(field.id);
      //   }}
      // >
      //   <blockquote>{field.type}</blockquote>
      //   {
      //     field.type === "textarea" ?
      //       <textarea className={fieldStyleSelector(field.type)} /> :
      //       <input className={fieldStyleSelector(field.type)} type={field.type} />
      //   }
      // </div>
    );
  }
}

export default Field;