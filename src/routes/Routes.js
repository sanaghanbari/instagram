import { BrowserRouter,Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Post from "../pages/Post";

const Routes = () =>{

    return(
    <>
    <BrowserRouter>
    <Switch>
<Route exact path={"/"}>
<Main/>
</Route>
<Route path={"/Post/:id/:name"}>
    <Post/>
</Route>
<Route path={"/Post/:id"}>
    <Post/>
</Route>

    </Switch>
    <Route path={"/Login"}>
        <Login/>
    </Route>
    </BrowserRouter>
    </>
    );
}



export default Routes;
