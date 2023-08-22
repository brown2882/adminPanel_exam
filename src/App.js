import './assets/style/styles.scss'
import {Home} from "./pages/home";
import {Routes, Route} from "react-router";
import {SignUp} from "./pages/signUp";

function App() {

    return (
    <div>

        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/signUp'} element={<SignUp/>}/>
            <Route path={'*'} element={<div><h1>404</h1></div>}/>
        </Routes>
    </div>
  );
}

export default App;
