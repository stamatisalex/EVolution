import React from 'react';
import Navbar from './components_main_manufacturers/Navbar';
import './MainManufacturers.css';
import Home from './components_main_manufacturers/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components_main_manufacturers/pages/Services';
import Profile from './components_main_manufacturers/pages/Profile';
import ContactUs from './components_main_manufacturers/ContactUs';
import SignInPage from './SignInPage';
import ChargingSessions from './components_main_manufacturers/pages/ChargingSessionsPerManufacturer';
import MeanCostPerCar from './components_main_manufacturers/pages/MeanCostPerCar';
import MeanCostTotal from './components_main_manufacturers/pages/MeanCostTotal';
import EnergyConsumption from './components_main_manufacturers/pages/EnergyConsumption';
import MeanEnergyCost from './components_main_manufacturers/pages/MeanEnergyCost'
import Founders from './components_main_manufacturers/Founders';

function MainManufacturers() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/mainman' exact component={Home} />
        <Route path='/mainman/services' component={Services} />
        <Route path='/mainman/profile' component={Profile} />
        <Route path='/mainman/contact_us' component={ContactUs} />
        <Route path='/sign_in' component={SignInPage} />
        <Route path='/mainman/charging_sessions' component={ChargingSessions} />
        <Route path='/mainman/mean_energy_cost_per_car' component={MeanCostPerCar} />
        <Route path='/mainman/mean_energy_cost_statistics' component={MeanCostTotal} />
        <Route path='/mainman/energy_consumption_report' component={EnergyConsumption} />
        <Route path='/mainman/mean_energy_cost' component={MeanEnergyCost} />
        <Route path='/mainman/founders' component={Founders} />
      </Switch>
    </Router>
  );
}

export default MainManufacturers;
