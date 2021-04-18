import React from "react";
import ProfileImage from "../../images/dummy.jpeg";
import TrendChart from "./trendChart";

function ProfileSection() {
  return (
    <div className="profile__sidebar">
      <div className="about__me">
        <img src={ProfileImage} />
        <p>Kislay</p>
      </div>
      <div className="all__trends">
        <button className="btn btn-primary">All</button>
        <button className="btn btn-primary">All</button>
        <button className="btn btn-primary">All</button>
        <button className="btn btn-primary">All</button>
      </div>
      <TrendChart />
    </div>
  );
}

export default ProfileSection;
