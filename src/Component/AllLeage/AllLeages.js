import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import LeagueLogo from "../../Leauge Logo/image 1.png";
import './AllLeague.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import CardImg from "../CardImg/CardImg";

const AllLeages = (props) => {
    const { strLeague, strSport, idLeague } = props.leagues;
    const history = useHistory();
    const handleClick = (idLeague) => {
      history.push(`/Team/${idLeague}`);
    };
  return (
    
          <Card className="m-2 p-2 text-center" style={{ width: "16rem" }}>
            <CardImg idLeague = {idLeague}></CardImg>
            <Card.Body>
              <Card.Title>{strLeague}</Card.Title>
              <Card.Text>Sport Type: {strSport}</Card.Text>
              <Button variant="primary" onClick={() => handleClick(idLeague)}>Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
            </Card.Body>
          </Card>
        
  );
};

export default AllLeages;
