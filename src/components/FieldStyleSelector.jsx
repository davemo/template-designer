import React, { Component } from "react";

const fieldStyleSelector = (fieldType) => {
  switch (fieldType) {
    case 'checkbox':
      return "mr-2 leading-tight"
    case 'textarea':
      return "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
    default:
      return "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  }
};