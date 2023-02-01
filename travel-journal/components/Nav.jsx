import "./Nav.css";
import globe from "../public/images/globe.svg";

export default function Nav() {
  return (
    <>
      <nav>
        <img src={globe} alt="world wide web icon" />
        <h6>My Travel Journal</h6>
      </nav>
    </>
  );
}
