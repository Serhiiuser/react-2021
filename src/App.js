import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/PostsFile'
import Comments from "./components/coments/Comments";
// import User from "./components/user/User";
function App() {
    return (
        <Router>
            <div>
                <Link to={"/"}>home page</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/coments'}>comments page</Link>
                <hr/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} render={(props)=>{
                        return <Posts/>
                    }
                        }/>
                    <Route path={'/comments'} component={Comments}/>
                    {/*<User/>*/}

                </Switch>

            </div>

        </Router>

    );
}

export default App;
