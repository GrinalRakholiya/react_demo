import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Class from './components/Class';
import Users, { User } from './components/Users';
import WithoutJSX from './components/WithoutJSX';
import Event from './components/Event';
import UseState from './components/hooks/UseStates';
import StateClass from './components/StateClass';
import Props from './components/PropsFunction';
import Prop from './components/PropsClass';
import InputBox from './components/InputBox';
import Hide from './components/HideShowElement';
import Form from './components/Form';
import Statement from './components/ControlStatement';
import FunctionAsPara from './components/FunctionAsPara';
import CompoDidMount from './components/lifecycleMethods/CompoDidMount';
import CompoDidUpdate from './components/lifecycleMethods/ComponentDidUpdate';
import ShouldCompoUpdate from './components/lifecycleMethods/ShouldCompoUpdate';
import Hooks from './components/hooks/Hooks';
import UseEffect from './components/hooks/UseEffect';
import DiffStyles from './components/styleTypes/withStyles';
import Array from './components/Array';
import NestedList from './components/arrayHandling/NestedList';
import PureComp from './components/PureCompo';
import UseMemo from './components/hooks/UseMemo';
import Ref from './components/Ref';
import UseRef from './components/hooks/useRef';
import ForwardRef from './components/hooks/ForwardRef';
import ControlledCompo from './components/component/ControlledCompo';
import UncontrolledCompo from './components/component/UncontrolledCompo';
import HighOrderCompo from './components/HOC';
import Routing from './components/router/reactRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import DynamicRouting from './components/router/dynamicRouting';
import GetMethod from './components/APICall/getMethod';
// import UseEffects from './components/hooks/useEffectComparison';
import ReactMemo from './components/hooks/reactMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Users />
    <User />
    <Class />
    <WithoutJSX />
    <Event />
    <UseState />
    <StateClass />
    <Props name={"Props Functional"} email="gb@gmail.com" />
    <Prop name={"Props Class"} />
    <InputBox />
    <Hide />
    <Form />
    <Statement />
    <FunctionAsPara />
    <CompoDidMount />
    <CompoDidUpdate />
    <ShouldCompoUpdate />
    <Hooks />
    <UseEffect />
    <DiffStyles />
    <Array />
    <NestedList />
    <PureComp />
    <UseMemo />
    <Ref />
    <UseRef />
    <ForwardRef />
    <ControlledCompo />
    <UncontrolledCompo />
    <HighOrderCompo />
    <Router>
      <Routing />
    </Router>
    <DynamicRouting />
    <GetMethod/>
    {/* <UseEffects/> */}
    <ReactMemo/>
  </React.StrictMode>
);

