import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Message from "./pages/Message";
import Message1 from "./pages/MessageBlank";
import Company from "./pages/CompanyMenu";
import InFlightMenu from "./pages/InFlightMenu";
import PostFlightMenu from "./pages/PostFlightMenu";
import MaintainceMenu from "./pages/MaintainceMenu";
import ReviewMenu from "./pages/ReviewMenu";
import FlightInfo from "./pages/FlightInfoMenu";
import MangerMenu from "./pages/MangerMenu";
import CommMenu from "./pages/menu";

// company

import Intialized from "./pages/Company/Intialize";
import Poilet from "./pages/Company/Poilet";
import Howgozit from "./pages/Company/Hocwz";
import TakeOff from "./pages/Company/TakeOff";
import TakeOff2 from "./pages/Company/TakeOff2";
import Landing from "./pages/Company/Landing";
import UaComm from "./pages/Company/UaComm";
import UaComm2 from "./pages/Company/Uacomm2";
import Expected from "./pages/Company/ExpectedTime";
import Weather from "./pages/Company/Weather";
import Ooo1Time from "./pages/Company/Ooo1Times";
import Ooo1Time2 from "./pages/Company/Ooo1Times2";
import Notam from "./pages/Company/Notam";
import GateAssign from "./pages/Company/GateAssign";
import Reminders from "./pages/Company/Reminders";
import CrewChange from "./pages/Company/CrewChange";
import DiversionReport from "./pages/Company/DiversionReport";
import PreFlightMenu from "./pages/PreFlightMenu";
import AtcMenu from "./pages/AtcMenu";

// Preflight

import Release from "./pages/Preflight/Release";
import PdcRequest from "./pages/Preflight/PdcRequest";
import FlightStatus from "./pages/Preflight/FlightStatus";
import CrewList from "./pages/Preflight/CrewList";
import FlightPaper from "./pages/Preflight/FlightPaper";
import DispatchRelease from "./pages/Preflight/DispatchRelease";
import DispatchRelease2 from "./pages/Preflight/DispatchRelease2";
import Dangerious from "./pages/Preflight/Dangerious";
import GateReturn from "./pages/Preflight/GateReturn";
import AirportDelay from "./pages/Preflight/AirportDelay";
import FuelSlip from "./pages/Preflight/FuelSlip";
import FinalWeight from "./pages/Preflight/FinalWeight";
import FlightService from "./pages/Preflight/FlightService";
import Miscellaneous from "./pages/Preflight/Miscellaneous";
import FitDuty from "./pages/Preflight/FitDuty";
import ReadyReport from "./pages/Preflight/ReadyReport";

// inflight

import ReDispatch from "./pages/Inflightmenu/ReDispatch";
import Etops from "./pages/Inflightmenu/Etops";
import HoldExpect from "./pages/Inflightmenu/HoldExpect";
import DepartureDelay from "./pages/Inflightmenu/DepartureDelay";
import LandingGross from "./pages/Inflightmenu/LamdingGross";
import MedicalReport from "./pages/Inflightmenu/MedicalReport";
import SubmitPriep from "./pages/Inflightmenu/SubmitPriep";
import Raim from "./pages/Inflightmenu/raim";
import ExpectedTime from "./pages/Inflightmenu/expectedTime";

// post flight report

import PostFlightReport from "./pages/postflight/postFlightReport";
import BarkingAction from "./pages/postflight/BrakingAction";
import StationIssue from "./pages/postflight/stationIssue";

// maintaince

import MaintainceRequest from "./pages/maintaince/maintainceRequest";
import CreditCard from "./pages/maintaince/creditCard";
import SensorStatus from "./pages/maintaince/sensorStatus";
import ElcLogbook from "./pages/maintaince/elcLogbook";
import EngineData from "./pages/maintaince/engineData";
import LogCancel from "./pages/maintaince/logCancel";
import VhfLink from "./pages/maintaince/vhfLink";
import PrinterTest from "./pages/maintaince/PrinterTest";

// ATC Menu

import LevelRequest from "./pages/Atc/LevelRequest";
import RouteRequest from "./pages/Atc/RouteRequest";
import SpeedRequest from "./pages/Atc/SpeedRequest";
import ClearanceRequest from "./pages/Atc/ClearanceRequest";
import WhenExpect from "./pages/Atc/WhenExpect";
import VoiceContact from "./pages/Atc/VoiceContact";
import FreeText from "./pages/Atc/FreeText";
import Login from "./pages/Atc/Login";
import Emergency from "./pages/Atc/Emergency";
import PositionReport from "./pages/Atc/PositionReport";
import ItpLevel from "./pages/Atc/ItpLevel";
import RequestedReport from "./pages/Atc/RequestReport";
import Conditional from "./pages/Atc/Conditional";
import MonitoringReport from "./pages/Atc/MonitoringReport";

// flight infor

import DepartureClearance from "./pages/Flightinfo/DepartueClearance";
import PushBack from "./pages/Flightinfo/PushBack";
import expectedTaxi from "./pages/Flightinfo/ExpectedClearance";
import AtisReq from "./pages/Flightinfo/AtisReq";
import Twip from "./pages/Flightinfo/twip";
import OcianClear from "./pages/Flightinfo/ocianClear";

// Manager
import Acars from "./pages/Manager/Acars";
import Vhf from "./pages/Manager/Vhf";
import Hf from "./pages/Manager/Hf";
import Satcom from "./pages/Manager/Satcom";
import Ads from "./pages/Manager/Ads";
import AutomaticMessage from "./pages/Manager/AutomationMessage";
import Master from "./pages/Manager/Master";
import CommAudit from "./pages/Manager/CommAudit";
import SystemInfo from "./pages/Manager/SystemInfo";

// review

import AtcUplinks from "./pages/Review/AtcUplink";
import Atcdownlinks from "./pages/Review/AtcDownlink";
import CommSystem from "./pages/Review/CommSystem";
import FlighInfoUp from "./pages/Review/FlightInfoUplink";
import FlightInfoDown from "./pages/Review/FlightInfoDown";
import Recived from "./pages/Review/Recived";
import Send from "./pages/Review/send";

// comming soon
import Comming from "./pages/Comming";

// Project 2
// Project 2
// Project 2

import Project2 from "./Project2/index";
// init
import Init from "./Project2/InitRef/Init";
import Indent from "./Project2/InitRef/Indent";
import Indent2 from "./Project2/InitRef/Indent2";
import POS from "./Project2/InitRef/Pos";
import POS1 from "./Project2/InitRef/Pos1";
import POS2 from "./Project2/InitRef/Pos2";
import Perf from "./Project2/InitRef/Perf";
import Perf2 from "./Project2/InitRef/Perf2";
import Takeoffp from "./Project2/InitRef/Takeoff";
import Takeoffp2 from "./Project2/InitRef/Takeoff2";
import Approach from "./Project2/InitRef/Approach";
import Offset from "./Project2/InitRef/Offset";
import Navdata from "./Project2/InitRef/Navdata";
import WptIndent from "./Project2/InitRef/WebIndent";
import AirportIndent from "./Project2/InitRef/AirportIndent";
import Navid from "./Project2/InitRef/Navid";

// rte

import Rte1 from "./Project2/RTE/Rte1";
import Rte2 from "./Project2/RTE/Rte2";
import Rte3 from "./Project2/RTE/Rte3";

// clb

import CLb from "./Project2/CLB/Clb";
import Maxrate from "./Project2/CLB/Maxrate";
import Engout from "./Project2/CLB/Engout";
import Maxangel from "./Project2/CLB/Maxangel";
import RTA from "./Project2/CLB/Rta";

// CRB

import Crz from "./Project2/CRZ/Crz";
import Lrc from "./Project2/CRZ/Lrc";
import Engcrz from "./Project2/CRZ/Engcrz";

// des
import Path from "./Project2/DES/Path";
import Forecast from "./Project2/DES/Forecast";
import Speed from "./Project2/DES/Speed";

// menu
import ProjectMenu from "./Project2/ProjecMenu";
import FMC from "./Project2/Menu/Fms";
import AcarsP from "./Project2/Menu/Acars";
import Dfdum from "./Project2/Menu/Dfdmu";

// legs

import Legs from "./Project2/Legs/Legs";
import Legs2 from "./Project2/Legs/Legs2";
import Legs3 from "./Project2/Legs/Legs3";

// dep arr

import DepArr from "./Project2/DepArr/DepArr";
import KiaDep from "./Project2/DepArr/KiahDep";
import KstArr from "./Project2/DepArr/KstArr";
import KiahArr from "./Project2/DepArr/KiahArr";

// Hold

import Hold from "./Project2/Hold/Hold";
import Hold2 from "./Project2/Hold/Hold2";
import Hold3 from "./Project2/Hold/Hold3";

// progress

import Progress from "./Project2/Proc/Progress";
import Progress2 from "./Project2/Proc/Progress2";
import Progress3 from "./Project2/Proc/Progress3";
import Progress4 from "./Project2/Proc/Progress4";
import Navstatus from "./Project2/Proc/Navstatus";
import Navstatus2 from "./Project2/Proc/Navstatus2";
import Navpos from "./Project2/Proc/Navpos";

// limits
import Limits from "./Project2/Limits/N1Limits";
import FixInfo from "./Project2/FixInfo/FixInfo";

// Project3

import Project3 from "./Project3/Project3Menu";
// Init Ref P3
import InitRefP3 from "./Project3/InitP3/InitRefP3";
import Lateraloff from "./Project3/LateralOff/lateraloff";

// Altn
import Altn1 from "./Project3/Alnt/Altn1";
import Altn2 from "./Project3/Alnt/Altn2";

// Pos Project 3
import PosP3 from "./Project3/Pos3/PosP3";
import PosP32 from "./Project3/Pos3/PosP32";
import PosP33 from "./Project3/Pos3/PosP33";
import PosP34 from "./Project3/Pos3/PosP34";

// Perf P 3

import PerfP3 from "./Project3/PerfP3/PerfP3";
// takeoff
import TakeOffP3 from "./Project3/TakeoffP3/TakeOffP3";
import TakeOffP31 from "./Project3/TakeoffP3/TakeOffp31";
// approach
import ApproachP3 from "./Project3/Approach/ApproachP3";

// Navdata
import NavDataP3 from "./Project3/NavData/NavDataP3";

// rte
import RteP3 from "./Project3/Rtep3/RteP3";
import RteP3act from "./Project3/Rtep3/RteP3act";
import RteP3act2 from "./Project3/Rtep3/RteP3act2";

// Dep Arr
import DepArrP3 from "./Project3/DepArrP3/DepArrP3";
import KdenDep from "./Project3/DepArrP3/KdenDep";
import KdnArrivalIndex from "./Project3/DepArrP3/KdnArrivalIndex";
import KdenArrival from "./Project3/DepArrP3/KdenArrival";
import KdenArrival2 from "./Project3/DepArrP3/KdenArrival2";

// Vnav
import Vnav from "./Project3/VNav/Vnav";
import Vnav1 from "./Project3/VNav/Vnav1";
import Vnav2 from "./Project3/VNav/Vnav2";

// Progress
import ProgressP3 from "./Project3/ProgressP3/ProgressP3";
import ProgressP31 from "./Project3/ProgressP3/ProgressP31";
import ProgressP32 from "./Project3/ProgressP3/ProgressP32";
import ProgressP33 from "./Project3/ProgressP3/ProgressP33";

// fmc
import CommP3 from "./Project3/FMCP3/CommP3";
import PosReport from "./Project3/FMCP3/PosReport";

// climb
import ClimbForest from "./Project3/ClimbForest/ClimbForest";
import desForcast from "./Project3/ClimbForest/desForcast";
// Rte 1
import ActRte1 from "./Project3/Rte1/ActRte1";
// rte 1 hold
import Rte1Hold from "./Project3/Hold/Rte1Hold";
import Rte1Hold1 from "./Project3/Hold/Rte1Hold1";
import ActRtwLegs from "./Project3/Legs/ActRtwLegs";
import FixInfoP3 from "./Project3/FixInfo/FixInfoP3";
import NavRad from "./Project3/NavRad/NavRad";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/message" exact component={Message} />
        <Route path="/message1" exact component={Message1} />
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

        {/* Inflight menu */}
        <Route path="/inflightmenu" exact component={InFlightMenu} />
        <Route path="/redispatch" exact component={ReDispatch} />
        <Route path="/etops" exact component={Etops} />
        <Route path="/holdexpect" exact component={HoldExpect} />
        <Route path="/departuredelay" exact component={DepartureDelay} />
        <Route path="/landinggross" exact component={LandingGross} />
        <Route path="/medicalreport" exact component={MedicalReport} />
        <Route path="/submitpriep" exact component={SubmitPriep} />
        <Route path="/raim" exact component={Raim} />
        <Route path="/expectedtime" exact component={ExpectedTime} />

        {/* postflight */}

        <Route path="/postflightmenu" exact component={PostFlightMenu} />
        <Route path="/postflightreport" exact component={PostFlightReport} />
        <Route path="/barkingaction" exact component={BarkingAction} />
        <Route path="/stationissue" exact component={StationIssue} />

        {/* maintaince */}

        <Route path="/maintaince" exact component={MaintainceMenu} />
        <Route path="/maintaincerequest" exact component={MaintainceRequest} />
        <Route path="/creditcard" exact component={CreditCard} />
        <Route path="/sensorstatus" exact component={SensorStatus} />
        <Route path="/elclogbook" exact component={ElcLogbook} />
        <Route path="/enginedata" exact component={EngineData} />
        <Route path="/logcancel" exact component={LogCancel} />
        <Route path="/vhflink" exact component={VhfLink} />
        <Route path="/printertest" exact component={PrinterTest} />

        {/* Atc menu */}

        <Route path="/atcmenu" exact component={AtcMenu} />
        <Route path="/levelrequest" exact component={LevelRequest} />
        <Route path="/routerequest" exact component={RouteRequest} />
        <Route path="/speedrequest" exact component={SpeedRequest} />
        <Route path="/clearancerequest" exact component={ClearanceRequest} />
        <Route path="/whenexpect" exact component={WhenExpect} />
        <Route path="/voicecontact" exact component={VoiceContact} />
        <Route path="/freetext" exact component={FreeText} />
        <Route path="/login" exact component={Login} />
        <Route path="/emergency" exact component={Emergency} />
        <Route path="/positionreport" exact component={PositionReport} />
        <Route path="/itplevel" exact component={ItpLevel} />
        <Route path="/RequestedReport" exact component={RequestedReport} />
        <Route path="/conditional" exact component={Conditional} />
        <Route path="/monitoringreport" exact component={MonitoringReport} />

        {/* review menu */}

        <Route path="/reviewmenu" exact component={ReviewMenu} />
        {/* <Route path="/reviewmenu" exact component={ReviewMenu} /> */}

        {/* flight ino */}

        <Route path="/flightinfo" exact component={FlightInfo} />
        <Route
          path="/departureclearance"
          exact
          component={DepartureClearance}
        />
        <Route path="/pushback" exact component={PushBack} />
        <Route path="/expectedtaxi" exact component={expectedTaxi} />
        <Route path="/atisreq" exact component={AtisReq} />
        <Route path="/twip" exact component={Twip} />
        <Route path="/ocenic" exact component={OcianClear} />

        {/* manger menu */}

        <Route path="/mangermenu" exact component={MangerMenu} />
        <Route path="/acars" exact component={Acars} />
        <Route path="/vhf" exact component={Vhf} />
        <Route path="/hf" exact component={Hf} />
        <Route path="/satcom" exact component={Satcom} />
        <Route path="/ads" exact component={Ads} />
        <Route path="/automaticmessage" exact component={AutomaticMessage} />
        <Route path="/master" exact component={Master} />
        <Route path="/commaudit" exact component={CommAudit} />
        <Route path="/mangersystem" exact component={SystemInfo} />

        {/* menu  */}

        <Route path="/commmenu" exact component={CommMenu} />

        {/* Review */}

        <Route path="/atcuplink" exact component={AtcUplinks} />
        <Route path="/atcdownlinks" exact component={Atcdownlinks} />
        <Route path="/commsystem" exact component={CommSystem} />
        <Route path="/flightinfoup" exact component={FlighInfoUp} />
        <Route path="/flightinfodown" exact component={FlightInfoDown} />
        <Route path="/recived" exact component={Recived} />
        <Route path="/send" exact component={Send} />

        <Route path="/comming" exact component={Comming} />

        {/* Project 2 */}

        <Route path="/project2" exact component={Project2} />

        {/* init */}
        <Route path="/init" exact component={Init} />
        <Route path="/indent" exact component={Indent} />
        <Route path="/indent2" exact component={Indent2} />
        <Route path="/pos" exact component={POS} />
        <Route path="/pos1" exact component={POS1} />
        <Route path="/pos2" exact component={POS2} />
        <Route path="/perf" exact component={Perf} />
        <Route path="/perf2" exact component={Perf2} />
        <Route path="/Takeoffpp" exact component={Takeoffp} />
        <Route path="/Takeoffp2" exact component={Takeoffp2} />
        <Route path="/Approach" exact component={Approach} />
        <Route path="/Offset" exact component={Offset} />
        <Route path="/navdata" exact component={Navdata} />
        <Route path="/WptIndent" exact component={WptIndent} />
        <Route path="/AirportIndent" exact component={AirportIndent} />
        <Route path="/Navid" exact component={Navid} />

        {/* RTE */}

        <Route path="/Rte1" exact component={Rte1} />
        <Route path="/Rte2" exact component={Rte2} />
        <Route path="/Rte3" exact component={Rte3} />

        {/* CLB */}

        <Route path="/CLb" exact component={CLb} />
        <Route path="/maxrate" exact component={Maxrate} />
        <Route path="/Engout" exact component={Engout} />
        <Route path="/Maxangel" exact component={Maxangel} />
        <Route path="/rta" exact component={RTA} />

        {/* crb */}
        <Route path="/Crz" exact component={Crz} />
        <Route path="/lrc" exact component={Lrc} />
        <Route path="/engcrz" exact component={Engcrz} />
        {/* path */}
        <Route path="/path" exact component={Path} />
        <Route path="/forecast" exact component={Forecast} />
        <Route path="/speed" exact component={Speed} />

        <Route path="/ProjectMenu" exact component={ProjectMenu} />
        <Route path="/fMC" exact component={FMC} />
        <Route path="/acarsp" exact component={AcarsP} />
        <Route path="/dfdum" exact component={Dfdum} />

        {/* Legs */}

        <Route path="/legs" exact component={Legs} />
        <Route path="/legs2" exact component={Legs2} />
        <Route path="/legs3" exact component={Legs3} />

        {/* dep arr */}
        <Route path="/DepArr" exact component={DepArr} />
        <Route path="/KiaDep" exact component={KiaDep} />
        <Route path="/KstArr" exact component={KstArr} />
        <Route path="/KiahArr" exact component={KiahArr} />

        {/* hold */}
        <Route path="/Hold" exact component={Hold} />
        <Route path="/Hold2" exact component={Hold2} />
        <Route path="/Hold3" exact component={Hold3} />

        {/* progress */}
        <Route path="/Progress" exact component={Progress} />
        <Route path="/Progress2" exact component={Progress2} />
        <Route path="/Progress3" exact component={Progress3} />
        <Route path="/Progress4" exact component={Progress4} />
        <Route path="/Navstatus" exact component={Navstatus} />
        <Route path="/Navstatus2" exact component={Navstatus2} />
        <Route path="/Navpos" exact component={Navpos} />
        {/* limits */}
        <Route path="/Limits" exact component={Limits} />
        <Route path="/FixInfo" exact component={FixInfo} />
        <Route path="/FixInfo" exact component={FixInfo} />

        {/* project 3 */}
        <Route path="/project3" exact component={Project3} />

        {/* init ref p3 */}
        <Route path="/InitRefP3" exact component={InitRefP3} />
        <Route path="/offsetp3" exact component={Lateraloff} />

        {/* Altn */}
        <Route path="/Altn1" exact component={Altn1} />
        <Route path="/Altn2" exact component={Altn2} />
        {/* Posp3 */}
        <Route path="/PosP3" exact component={PosP3} />
        <Route path="/PosP32" exact component={PosP32} />
        <Route path="/PosP33" exact component={PosP33} />
        <Route path="/PosP34" exact component={PosP34} />

        {/* perf */}
        <Route path="/PerfP3" exact component={PerfP3} />

        {/* takeoff */}
        <Route path="/TakeOffP3" exact component={TakeOffP3} />
        <Route path="/TakeOffP31" exact component={TakeOffP31} />
        {/* approach */}
        <Route path="/ApproachP3" exact component={ApproachP3} />

        {/* navdata */}
        <Route path="/NavDataP3" exact component={NavDataP3} />
        {/* rte */}
        <Route path="/RteP3" exact component={RteP3} />
        <Route path="/RteP3act" exact component={RteP3act} />
        <Route path="/RteP3act2" exact component={RteP3act2} />

        {/* Dep Arr */}
        <Route path="/DepArrP3" exact component={DepArrP3} />
        <Route path="/KdenDep" exact component={KdenDep} />
        <Route path="/KdnArrivalIndex" exact component={KdnArrivalIndex} />
        <Route path="/KdenArrival" exact component={KdenArrival} />
        <Route path="/KdenArrival2" exact component={KdenArrival2} />

        {/* Vnav */}
        <Route path="/Vnav" exact component={Vnav} />
        <Route path="/Vnav1" exact component={Vnav1} />
        <Route path="/Vnav2" exact component={Vnav2} />

        {/* progress */}
        <Route path="/ProgressP3" exact component={ProgressP3} />
        <Route path="/ProgressP31" exact component={ProgressP31} />
        <Route path="/ProgressP32" exact component={ProgressP32} />
        <Route path="/ProgressP33" exact component={ProgressP33} />

        {/* FMC */}
        <Route path="/CommP3" exact component={CommP3} />
        <Route path="/PosReport" exact component={PosReport} />

        {/* climb */}
        {/* climb */}
        <Route path="/ClimbForest" exact component={ClimbForest} />
        <Route path="/desForcast" exact component={desForcast} />
        {/* rte 1 */}
        <Route path="/ActRte1" exact component={ActRte1} />
        {/* hold */}
        <Route path="/Rte1Hold" exact component={Rte1Hold} />
        <Route path="/Rte1Hold1" exact component={Rte1Hold1} />
        <Route path="/ActRtwLegs" exact component={ActRtwLegs} />
        <Route path="/FixInfoP3" exact component={FixInfoP3} />
        <Route path="/NavRad" exact component={NavRad} />
      </Switch>
    </>
  );
}

export default App;
