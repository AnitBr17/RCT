// let head = React.createElement("h1",{id:"masai"},"Ankit kumar");
// console.log(head)
// let para = React.createElement("p",null,"enroll rct305");
// let root = ReactDOM.createRoot(document.querySelector("#root")).render(head);

// let head = React.createElement("div",{id:"masai"},[React.createElement("h1",null,"Ankit"),React.createElement("p",null,"kumar")]);
// console.log(head)
// let para = React.createElement("p",null,"I am Ankit kumar My dob is 20/05/2004");
// let root = ReactDOM.createRoot(document.querySelector("#root")).render(head);
// let p = ReactDOM.createRoot(document.querySelector("#root")).render(para);

// let head = (
//     <div>
//          <div>
//             <h1>Ankit kumar</h1>
//             <p> Hi sir!</p>
//             <p> here use addition like this 10 and 20 = {10+20}</p>
//          </div>
//             <h1>Masai student</h1>
//     </div>
   
// //    fragments -> <> </> or use React.Fragment in parent div
// )
// let root = ReactDOM.createRoot(document.querySelector("#root")).render(head);

//create a h1 tag with your name
// create p tag with your DOB
// add your address in p tag
//use babel

const user = {
    imageUrl: 'https://example.com/profile.jpg',
    name: 'Jane Doe',
    bio: 'Software Engineer with 5 years of experience in web applications.',
    email: 'jane.doe@example.com',
    phone: '+1234567890',
    subsribed:true,
};

const {imageUrl,name,bio,email,phone,subsribed} = user
const userCard = (
    <div>
        <img src = "{user.imageUrl}" alt = ""/>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <div>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
        <p>{subsribed ?"Subscribed":"Not Subscribed"}</p>
    </div>

);
ReactDOM.createRoot(document.querySelector("#root")).render(userCard)
