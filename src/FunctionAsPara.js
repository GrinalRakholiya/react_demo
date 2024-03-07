import PassParam from "./Parameter";
import MemberofFunction from "./MemberOfFunction";

function FunctionAsPara() {
    function getData() {
        alert("Hello from FunctionAsParameter")
    }
    return (<>
        <PassParam data={getData} />
        <div style={{color:"red"}}>
            <MemberofFunction data={getData} />
        </div>
    </>
    );
}

export default FunctionAsPara;
