import React from "react";
/*
export default function App() {

  const isGoingOut = false;
  // let answer = isGoingOut === true ? "Yes" : "No";
  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        
        <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

*/

/*

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
 
  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
*/


export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "FName",
    lastName: "LName",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    // isFavorite: false,
    isFavorite: true,
  });
   let starIcon = contact.isFavorite
     ? "https://source.unsplash.com/random/?star"
     : "";

  function toggleFavorite() {
    // console.log("Toggle Favorite");
    setContact(prevContact => {
      return{
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img
          src="https://source.unsplash.com/random/?profile"
          className="card--image"
        />
        <div className="card--info">
          <img
            src={starIcon}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
