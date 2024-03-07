import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Class from './Class';
import Users,{User} from './Users';
import WithoutJSX from './WithoutJSX';
import Event from './Event';
import UseState from './UseStates';
import StateClass from './StateClass';
import Props from './PropsFunction';
import Prop from './PropsClass';
import InputBox from './InputBox';
import Hide from './HideShowElement';
import Form from './Form';
import Statement from './ControlStatement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Users/>   
    <User/>
    <Class/>
    <WithoutJSX/>
    <Event/>
    <UseState/>
    <StateClass/>
    <Props name={"Props Functional"} email="gb@gmail.com"/>
    <Prop name={"Props Class"}/>
    <InputBox/>
    <Hide/>
    <Form/>
    <Statement/>
  </React.StrictMode>
);

