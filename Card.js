import Searchimg from "./images/search.png";
import { useState } from "react";
import Graphic from "./graphic";



const Card=()=>{

    const [searchinput,setSearchinput]=useState();
    const [data,setData]=useState();
    const apikey="a953a43783de9c136da495fb480cf371";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    async function getinfo(city){
    const weatherdata=await fetch(apiurl+city+`&appid=${apikey}`);
    const data=await weatherdata.json();
    console.log(data);
    setData(data);
}
    return (
     <div className="card">
      <div className="search">
        <input className="searchtxt" type="text" placeholder="enter city name" value={searchinput}
        onChange={(e)=>{
            setSearchinput(e.target.value);
        }}
        ></input>
        <button className="searchbtn"
        onClick={()=>{
           getinfo(searchinput);
        }
        }
        ><img src={Searchimg} /></button>
      </div>
      {!data? <h1 classname="message">Enter City Name</h1>:data.cod==='404'?
      <h1 classname="message">{data.message}</h1>:
      <Graphic {...data}/>}
     </div>
    )
}
export default Card;