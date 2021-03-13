import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
const CardImg = ({idLeague}) => {
    
    const [teamImg, setTeamImg] = useState("");
    useEffect(() => {
        fetch(
          `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        )
          .then((res) => res.json())
          .then((data) => setTeamImg(data.leagues[0].strBadge));
      }, [idLeague]);
    return (
       
            <Card.Img className="img-fluid w-5 mx-auto" style={{}} variant="top" src={teamImg} />
        
    );
};

export default CardImg;