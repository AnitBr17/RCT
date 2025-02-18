function ToggleColor() {
    const [color, setColor] = React.useState("blue");

    function changeBackground() {
        setColor("blue" ?"red":"blue");
    }

    return (
        <div>
            <button onClick={changeBackground} style={{backgroundColor:color,color:"white",padding:"10px 20px",borderRadius:"10px",cursor:"pointer"}}>
                Color: {color}</button>
        </div>
    );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<ToggleColor />);
