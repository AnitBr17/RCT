function UserCard(props){
    return (
        <div>
             <img src="" alt=""></img>
             <h3>{props.name}</h3>
             <p>{props.email}</p>

        </div>
    )
}

function App(){
    return (
        <>
        <UserCard name = "Anirudh" email = "anirudh@gmail.com"/>
        <UserCard  name = "Ankit" email = "ankit@gmail.com"/>
        <UserCard  name = "Anit" email = "anit@gmail.com"/>
        </>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)