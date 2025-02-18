0o
function Counter(){
    const [count,setCount] = React.useState(0);
    const [name,setName] = React.useState("Masai")
    function increment(){
       // increase the initialstate by 1
       setCount(count+1)
    }
    function decrement(){
        // decrease the initialstate by 1
        setCount(count-1)
    }
    function changeName(){
        setName("Masai school")
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <h1>{name}</h1>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick= {changeName}>changeName</button>
        </div>
    )
    
}
// whenever your page is rendered , react will create a virtual DOM -> Object
// whenever your state is changing->New Virtual DOM will be created -> Object count is incresing 
// react reconcillation is a process that alloes react to effecienctly update the DOM by 
// comparing the current state of Virtual DOM, to previously 
ReactDOM.createRoot(document.querySelector("#root")).render(<Counter />)