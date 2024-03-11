
function Users() {
    function Apple() {
        return (
            <div>This function inside Function</div>
        )
    }
    return (
        <>
            <h1>this is Functional component </h1>
            <Apple />
        </>
    )
}
export default Users;

function User() {
    return (
        <>
            <h1> this is second functional component</h1>
            <h3>{30 + 20}</h3>
        </>
    )
}
export { User }

