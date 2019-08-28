import React from 'react';
import ReactDOM from 'react-dom';
import ControlType from './components/ControlType';
import Field from './components/Field';
import FieldStyleSelector from './components/FieldStyleSelector';
import Template from './components/Template';
import TemplateOptions from './components/TemplateOptions';
import TemplateDesigner from './components/TemplateDesigner';
import * as serviceWorker from './serviceWorker';

const rootElement = < TemplateDesigner />;
ReactDOM.render(rootElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();