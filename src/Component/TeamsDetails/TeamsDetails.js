import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamsDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import Maleimg from "../../Photo/male.png";
import Femaleimg from "../../Photo/female.png";
import facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import YouTube from '../../Icon/YouTube.png';

const TeamsDetails = () => {
  const { idLeague } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.leagues[0]));
  }, [idLeague]);

  const {
    strPoster,
    strBadge,
    strLeague,
    dateFirstEvent,
    strCountry,
    strSport,
    strGender,
  } = teamDetails;

  const conditionalImg = strGender === "Male" ? Maleimg : Femaleimg;
  return (
    <div className="teamInfoPage ">
      <div className="teamBanner">
        <img src={strBadge} alt="" />
      </div>

      <div className="team d-flex flex-column flex-md-row mt-3 container ">
        <div className="teamInfo container m-3 mt-5">
          <h5 className="mb-3">{strLeague}</h5>
          <h6>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {dateFirstEvent}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faVolleyballBall} /> Sport Type: {strSport}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}
          </h6>
        </div>
        <div className=" teamImage m-3 ">
          <img src={conditionalImg} alt="" />
        </div>
      </div>
      <div className="container mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nobis
        illum quos, accusamus earum fugit placeat esse ea magnam, quo
        reprehenderit facere architecto nostrum error obcaecati voluptatum
        aliquam, quas minima. Sapiente repellat facilis pariatur magni beatae
        sit quia eum dolorum? Molestias repudiandae perferendis fugit recusandae
        praesentium corrupti modi laboriosam tenetur porro dolorum? Alias,
        obcaecati delectus? Harum optio sapiente illo atque! Dignissimos quam
        adipisci quibusdam alias minus quo nesciunt inventore explicabo expedita
        aut suscipit fugit nisi nemo dolor totam omnis asperiores perferendis
        laboriosam, laborum quas? Quo suscipit temporibus dolore deleniti
        aliquam.
      </div>
      <div className="socialMedia mt-5 container  ">
       <a href="#" ><img  src={facebook} alt=""/> </a>
       <a href="#" ><img src={Twitter} alt=""/> </a>
       <a href="#" ><img src={YouTube} alt=""/> </a>
      </div>
    </div>
  );
};

export default TeamsDetails;
