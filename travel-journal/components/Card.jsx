import "./Card.css";
import locationIcon from "../public/images/locationIcon.svg";

function Card(props) {
  return (
    <div className="card-container">
      <div className="main--container">
        <img className="main-img" src={props.imageUrl} alt="" />
      </div>

      <div className="info">
        <div className="location">
          <img className="small-icon" src={locationIcon} alt="" />
          <h6>{props.locationIcon}</h6>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="title">{props.title}</h2>
        <h6 className="date">
          {props.startDate} - {props.endDate}
        </h6>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
