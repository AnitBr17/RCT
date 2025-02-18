function Todo() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleAdd() {
        const newTodo={
            todoList:value,
            id: Math.random()
        }
        setTodos([...todos, newTodo]);
    }
    console.log(todos);

    // const todos= [{text:,id:},{text:,id:}]

    function handleDelete(todoId){
        console.log(id) // 2
        //filter returns an array which satisfies given condition
        const updateList = todos.filter(el, index)=>(el.id===todoId) // ["a","b","c"]
        setTodos(updateList)
    }
''
    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={handleChange} type="text" placeholder="Enter task.." />
            <button onClick={handleAdd}>Add Todo</button>
            <div>
                <ul>{todos.map((item, index) => (
                    <li>
                        {item.todoText} <button onCLick={()=>handleDelete(item.id)}>Delete</button>
                    // { /*Delete Button */}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Todo />);
