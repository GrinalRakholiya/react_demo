import React,{Component} from "react";
class StateClass extends Component{
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    Increment(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.Increment()}>Increase</button>
            </>
        )
    }
}
export default StateClass;