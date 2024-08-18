import humidityimg from "./images/humidity.png";
import windimg from "./images/wind.png";
import clearimg from "./images/clear.png";
import cloudimg from "./images/clouds.png";
import drizzleimg from "./images/drizzle.png";
import hazeimg from "./images/haze.png";
import mistimg from "./images/mist.png";
import rainimg from "./images/rain.png";
import snowimg from "./images/snow.png";


const Graphic=({main,name,wind,weather})=>{
    console.log(weather);
    const description=weather[0].main;
    let imgsrc;
    if(description=="Clear"){
      imgsrc=clearimg;
    }
    else if(description=="Clouds"){
        imgsrc=cloudimg;
    }
    else if(description=="Drizzle"){
        imgsrc=drizzleimg;
    }
    else if(description=="Haze"){
        imgsrc=hazeimg;
    }
    else if(description=="Mist"){
        imgsrc=mistimg;
    }
    else if(description=="Snow"){
        imgsrc=snowimg;
    }
    else if(description=="Rain"){
        imgsrc=rainimg;
    }
    
    return(
        <div className="details">
            
            <div className="city">
            <img className="weatherimg" src={imgsrc}></img>
            <h1 className="cityname">{name}</h1>
            <h1>{main.temp} °C</h1>
            </div>
            <div className="maindata">
            <div className="humidity">
                <img className="mainimg" src={humidityimg}></img>
                <div>
                    <h2>Humidity</h2>
                <h2>{main?.humidity} %</h2>
                </div>
                </div>
            <div className="wind">
            <img className="mainimg" src={windimg}></img>
            <div>
            <h2>Wind Speed</h2>
            <h2>{wind.speed} km/h</h2>
            </div>
            </div>
        </div>
        
        </div>
    )
}
export default Graphic;