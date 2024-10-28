import React from "react";
import Img from '../Imgs/img.jpeg'

const NewsCard = ({title,description,url,src}) => {
  return (
    <div className="card" style={{height:'450px'}}>
      <img src={src ? src : Img} className="c-img card-img-top img-fluid p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description ? description.slice(0,100): "This endpoint provides live top and breaking headlines for a country, specific category in a country"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
