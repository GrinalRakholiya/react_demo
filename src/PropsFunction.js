
function Props(props) {   
    return(
    <div style={{backgroundColor:"yellow"}}>
        <h1> Hello {props.name}</h1>
        <h2> Email: {props.email}</h2>      
    </div>
    )
}
export default Props;