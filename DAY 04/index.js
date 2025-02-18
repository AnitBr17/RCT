function UserForm(){
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name,email)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onchange={(e)=>setName(e.target.value)}type="text" placeholder="enter name"></input>
                <input onchange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email"></input>
                <input type="submit"></input>
                
            </form>
        </div>

    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<UserForm />);