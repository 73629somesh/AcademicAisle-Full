import { useSelector } from "react-redux";

function Header() {
    const state = useSelector((state) => state);
    // console.log("Header ", state.loggedin.Username)
    return (
            <div className="row jumbotron p-2 mb-0 rounded-0 text-white" style={{backgroundColor: "white"}}>
                <div className="col ">
                    <img  src={'https://cdn-icons-png.flaticon.com/512/7562/7562565.png'} alt={"icon"} style={{ width: "120px", height: "80px" }} className="float-left"/>
                </div>
                <div className="col">
                    <h4 className="text-center " style={{ marginTop: "10px" }} >Academic Aisle</h4>
                </div>
                <div className="col">
                    {state.loggedin.IsLoggedIn ?
                        <>
                            <label className="float-right">Welcome ! {state.loggedin.Username}</label> </> :
                        ''}
                </div>
            </div>  
    )
}

export default Header;
