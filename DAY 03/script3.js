function LoginToggle() {
    const [name, setName] = React.useState(false); // Fixed useState typo

    function toggleLogin() {
        setName(prev => !prev); // Ensures correct state update
    }

    return (
        <div>
            <h1>{name ? "Logged In" : "Logged Out"}</h1>
            <button onClick={toggleLogin}>{name ? "Logout" : "Login"}</button>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<LoginToggle />);
