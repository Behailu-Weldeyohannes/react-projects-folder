import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";


const Page = (
  <div>
    <Header />
    <Main />
    {/* <Footer /> */}
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(Page);



// ReactDOM.render(Page, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(page);

// function TemporaryName() {
//   return (
//     <div>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//         width="40px"
//       />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

//  ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryName />);
// const Reacts = (
//   <div>
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//       alt="react-logo"
//     width="40px" />
//     <h1>Fun Facts about React</h1>
//   </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(<Reacts />)
