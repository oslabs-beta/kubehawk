import "./styles/application.scss";
import React from "react";
import Splash from "./components/Splash";
import ViewSelector from "./components/ViewSelector";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                {/* <ViewSelector name={'CPU Stats'}/> */}
                <ViewSelector name={'Security'}/>
            </div>
        </>
    )
}

export default App;
