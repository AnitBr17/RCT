let count=0;
function Counter(){
  
    function increment(){
        count++;

        console.log(count)
    }
    
    function decrement(){
        count--;
        console.log(count)
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Counter />)