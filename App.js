// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Mascotas from './componentes/Mascotas/Mascotas';
import Servicios from './componentes/Servicios/Servicios';
import Citas from './componentes/Citas/Citas';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Mascotas} />
                <Route path="/servicios" component={Servicios} />
                <Route path="/citas" component={Citas} />
            </Switch>
        </Router>
    );
};

export default App;
