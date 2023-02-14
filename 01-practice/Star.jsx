import React from "react"

function Star(props){
    const starIcon = props.isFilled
      ? "https://source.unsplash.com/random/?star"
      : "";
    return (
      <div>
        <img
          src={starIcon}
          className="card--favorite"
        //   onClick={toggleFavorite}
        />
      </div>
    );
}

export default Star