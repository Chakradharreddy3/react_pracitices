 const user={firstName:"Chakradhar reddy",lastName:"Vanga"};
const fullname=(user)=> user.firstName+" "+user.lastName;
const element = <h1 className="greeting">Hi,{fullname(user)}</h1>;
ReactDOM.render(element, document.getElementById("root"));