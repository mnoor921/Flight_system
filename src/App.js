import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

import Index from './pages/Index'
import Message from './pages/Message'
import Company from './pages/CompanyMenu'

// company

import Intialized from './pages/Company/Intialize'
import Poilet from './pages/Company/Poilet'
import Howgozit from './pages/Company/Hocwz'
import TakeOff from './pages/Company/TakeOff'
import TakeOff2 from './pages/Company/TakeOff2'
import Landing from './pages/Company/Landing'
import UaComm from './pages/Company/UaComm'
import UaComm2 from './pages/Company/Uacomm2'
import Expected from './pages/Company/ExpectedTime'
import Weather from './pages/Company/Weather'
import Ooo1Time from './pages/Company/Ooo1Times'
import Ooo1Time2 from './pages/Company/Ooo1Times2'
import Notam from './pages/Company/Notam'
import GateAssign from './pages/Company/GateAssign'
import Reminders from './pages/Company/Reminders'
import CrewChange from './pages/Company/CrewChange'
import DiversionReport from './pages/Company/DiversionReport'
import PreFlightMenu from './pages/PreFlightMenu'


// Preflight

import Release from './pages/Preflight/Release'
import PdcRequest from './pages/Preflight/PdcRequest'
import FlightStatus from './pages/Preflight/FlightStatus'
import CrewList from './pages/Preflight/CrewList'
import FlightPaper from './pages/Preflight/FlightPaper'
import DispatchRelease from './pages/Preflight/DispatchRelease'
import DispatchRelease2 from './pages/Preflight/DispatchRelease2'
import Dangerious from './pages/Preflight/Dangerious'
import GateReturn from './pages/Preflight/GateReturn'
import AirportDelay from './pages/Preflight/AirportDelay'
import FuelSlip from './pages/Preflight/FuelSlip'
import FinalWeight from './pages/Preflight/FinalWeight'
import FlightService from './pages/Preflight/FlightService'
import Miscellaneous from './pages/Preflight/Miscellaneous'
import FitDuty from './pages/Preflight/FitDuty'
import ReadyReport from './pages/Preflight/ReadyReport'


function App() {

  return (

    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/message" exact component={Message} />
        <Route path="/company" exact component={Company} />
        <Route path="/intial" exact component={Intialized} />
        <Route path="/poilet" exact component={Poilet} />
        <Route path="/howgozit" exact component={Howgozit} />
        <Route path="/takeoff" exact component={TakeOff} />
        <Route path="/takeoff2" exact component={TakeOff2} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/uacomm" exact component={UaComm} />
        <Route path="/uacomm2" exact component={UaComm2} />
        <Route path="/expected" exact component={Expected} />
        <Route path="/weather" exact component={Weather} />
        <Route path="/ooo1time" exact component={Ooo1Time} />
        <Route path="/ooo1time2" exact component={Ooo1Time2} />
        <Route path="/notam" exact component={Notam} />
        <Route path="/gateassign" exact component={GateAssign} />
        <Route path="/reminders" exact component={Reminders} />
        <Route path="/crewchange" exact component={CrewChange} />
        <Route path="/diversionreport" exact component={DiversionReport} />
        <Route path="/preflightmenu" exact component={PreFlightMenu} />

        {/* Prflight */}

        <Route path="/release" exact component={Release} />
        <Route path="/pdcrequest" exact component={PdcRequest} />
        <Route path="/flightstatus" exact component={FlightStatus} />
        <Route path="/crewlist" exact component={CrewList} />
        <Route path="/flightpaper" exact component={FlightPaper} />
        <Route path="/dispatchrelease" exact component={DispatchRelease} />
        <Route path="/dispatchrelease2" exact component={DispatchRelease2} />
        <Route path="/dangerious" exact component={Dangerious} />
        <Route path="/gatereturn" exact component={GateReturn} />
        <Route path="/airportdelay" exact component={AirportDelay} />
        <Route path="/fuelslip" exact component={FuelSlip} />
        <Route path="/finalweight" exact component={FinalWeight} />
        <Route path="/flightservice" exact component={FlightService} />
        <Route path="/miscellaneous" exact component={Miscellaneous} />
        <Route path="/fitduty" exact component={FitDuty} />
        <Route path="/readyreport" exact component={ReadyReport} />


        
      </Switch>

      


    </>
  );
}

export default App;
