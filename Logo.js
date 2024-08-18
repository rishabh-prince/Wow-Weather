import logoimg from "./images/weather app logo.png";

const Header=()=>{
    return (
        <div className="header">
            <img src={logoimg}></img>
            <h1>WOW WEATHER</h1>
        </div>
    )
}
export default Header;