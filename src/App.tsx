import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "font-awesome/css/font-awesome.min.css";

/* Theme variables */
import "./theme/variables.css";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import SelectUser from "./pages/SelectUser/SelectUser";
import MobileVerification from "./pages/MobileVerification/mobileVerification";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Homepage from "./pages/HomeScreen/homeScreen";
import SignupSuccessful from "./pages/signupSuccessful/signupSuccessful";
import CreateScheduleTablet from "./pages/CreateScheduleTablet/CreateScheduleTablet";
import CreateScheduleLiquid from "./pages/CreateScheduleLiquid/CreateScheduleLiquid";
import CreateScheduleInsulin from "./pages/CreateScheduleInsulin/CreateScheduleInsulin";
import ViewPrescription from "./pages/ViewPrescripton/ViewPrescription";
import SelectMedicine from "./pages/SelectMedicine/SelectMedicine";
import manualUploadPrescription from "./pages/manualUploadPrescription/manualUploadPrescription";
import uploadPrescription from "./pages/uploadPrescription/uploadPrescription";
import WifiConnectivity from "./pages/Wifi-Connectivity/WifiConnectivity";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <SelectUser />
        </Route>
        <Route exact path="/selectUser">
          <SelectUser />
        </Route>
        <Route exact path="/mobileVerification">
          <MobileVerification />
        </Route>
        <Route exact path="/splashScreen">
          <SplashScreen />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/homeScreen">
          <Homepage />
        </Route>
        <Route exact path="/signupSuccessful">
          <SignupSuccessful />
        </Route>

        <Route exact path="/createTabletSchedule">
          <CreateScheduleTablet />
        </Route>

        <Route exact path="/createLiquidSchedule">
          <CreateScheduleLiquid />
        </Route>

        <Route exact path="/createInsulinSchedule">
          <CreateScheduleInsulin />
        </Route>
        <Route exact path="/viewPrescription">
          <ViewPrescription />
        </Route>
        <Route exact path="/selectMedicine">
          <SelectMedicine/>
        </Route>
        <Route
          path="/upload-prescription"
          component={uploadPrescription}
        />
        <Route
          path="/manual-prescription"
          component={manualUploadPrescription}
          exact={true}
        />

        <Route exact path="/WifiConnectivity">
          <WifiConnectivity/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
