import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Routes} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;