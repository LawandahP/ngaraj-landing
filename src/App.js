import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import SignInPage from './components/SignIn';


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/signin' component={SignInPage} exact/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


