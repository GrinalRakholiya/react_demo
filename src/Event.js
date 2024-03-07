function Event(){
    let data = "Grinal Rakholiya"

    function onClicks(){
        let data="RGB"
        alert(data)
        alert("function called")
    }
    return(
        <>
        <div>
            <h1>{data}</h1>
            <button onClick={onClicks}>Click Me</button><br/><br/>
            <button onClick={() => alert("using arrow function")}>Click Me</button><br /><br />
            <button onClick={()=>onClicks()}>Click Me</button>
            </div></>
    )
}
export default Event