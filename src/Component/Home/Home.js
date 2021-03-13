import AllLeages from "../AllLeage/AllLeages";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './Home.css';
import bannerLogo from '../../Leauge Logo/download.jpg';
const Home = () => {
  const [league, setLeague] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues));
  }, []);
  return (
    <div>
      <div className="img">
        <Card className=" text-dark text-center ">
          <Card.Img src={bannerLogo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="pt-5"> <h2>World Premium League</h2></Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
     <div className="d-flex flex-wrap justify-content-center">
     {
      league.map((allLeague) => (
        <AllLeages leagues={allLeague}></AllLeages>
      ))}
     </div>
    </div>
  );
};

export default Home;
