import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import "./ImgMediaCard.css";
import { useEffect, useState } from "react";


export default function ImgMediaCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetailsClickContact = () => {
    navigate("/view1");
  };

  const handleViewDetailsClickRecipe = () => {
    navigate("/view2");
  };

  const handleViewDetailsClickWeather = () => {
    navigate("/view3");
  };

  const handleViewDetailsClickJob = () => {
    navigate("/view4");
  };

  const dataList = ['contact', 'recipe', 'weather', 'board'];

  type Item = typeof dataList[number];

  type SearchMap = {
    [key in Item]: boolean;
  };
  
  const queryParam = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';
  
  const [matchedMap, setMatchedMap] = useState<SearchMap>({
    contact: false,
    recipe: false,
    weather: false,
    board: false,
  });

  useEffect(() => {
    const newMap: SearchMap = {
      contact: false,
      recipe: false,
      weather: false,
      board: false,
    };

    dataList.forEach((item) => {
      if (item.includes(queryParam)) {
        newMap[item] = true;
      }
    });

    setMatchedMap(newMap);
  }, [queryParam]);

  return (
    <>
      {/* Example card */}
      {matchedMap.contact && (
        <Card className="html5" sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt="CONTACT MANAGEMENT"
            height="150"
            image="https://th.bing.com/th/id/OIP.g5odnB5baYGLsG9V3ctZywHaEe?w=301&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CONTACT MANAGEMENT
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Contact management refers to the process of organizing, tracking,
              and managing a company's or individual's interactions and
              communications with their contacts or clients. It involves keeping
              accurate records of contact information, tracking communication
              history, and managing relationships
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                window.open(
                  "https://thriving-cannoli-525e64.netlify.app/",
                  "_blank"
                )
              }
            >
              Live Demo
            </Button>
            <Button size="small" onClick={handleViewDetailsClickContact}>
              View Details
            </Button>
          </CardActions>
        </Card>
      )}

      {matchedMap.recipe && (
        <Card className="css" sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt="RECIPIE BOOK"
            height="150"
            image="https://i.poweredtemplates.com/p/sp/112765/sp_slide_h_1.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              RECIPIE BOOK
            </Typography>
            These are marketing terms which you may not be familiar with. A “pain
            point” is actually a gap between where a consumer is right now and
            where they would like to be. How can your cookbook put them where they
            want to be
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            ></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                window.open("https://fancy-cobbler-24f370.netlify.app/", "_blank")
              }
            >
              Live Demo
            </Button>
            <Button size="small" onClick={handleViewDetailsClickRecipe}>
              View Details
            </Button>
          </CardActions>
        </Card>
      )}

      {matchedMap.weather && (
        <Card className="typescript" sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt="WEATHER APPLICATION"
            height="150"
            image="https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              WEATHER APPLICATION
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The world around us is time-dependent and seasonal, so are every
              aspect of our lives. Business is no exception: business analysts
              need predictive tools available to make sense of the time-dependent
              nature of the metrics they are analyzing. Forecasting is fundamental
              to any business strategy
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                window.open(
                  "https://thriving-cannoli-525e64.netlify.app/",
                  "_blank"
                )
              }
            >
              Live Demo
            </Button>
            <Button size="small" onClick={handleViewDetailsClickWeather}>
              View Details
            </Button>
          </CardActions>
        </Card>
      )}

      {matchedMap.board && (
        <Card className="react" sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt="JOB BOARD"
            height="150"
            image="https://30daysto100k.com/wp-content/uploads/2022/09/Job-Board-Cover-Image.jpeg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JOB BOARD
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Most job boards aren't a part or an extension of a business, they
              are a business by themselves. The majority of these businesses
              identify a niche in the job board market where there is still room
              for them and build their platform around it. You can choose a niche
              based on a specific industry, geography, or job-seeker demographic
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                window.open("https://jobboard-charan.netlify.app/", "_blank")
              }
            >
              Live Demo
            </Button>

            <Button size="small" onClick={handleViewDetailsClickJob}>
              View Details
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
