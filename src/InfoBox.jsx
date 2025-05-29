import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.jpg?s=612x612&w=0&k=20&c=CWg58-taK46CyW3vcGnKlG0wkjiNhfzsPKZp_zVpAFc="
    const RAIN_URL = "https://i.pinimg.com/736x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg"
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6CWHJUDTgJeCCTUDxDoGtUIhU-zoKiXnyA&s"

 

    return (
        <div className="card-content">
        <div className="InfoBox" >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}%</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
         </p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
}