import { IonPage, IonRouterLink } from "@ionic/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeScreen.css';
import ButtonComponent from "../../components/Button/buttonComponent";

const Homepage: React.FC = () =>{
    return(
        <IonPage className="bg-dark text-light d-flex justify-content-center">
            <div>
                <div className="title mt-auto">
                    <h5 className="text-center">Welcome Username</h5>
                </div>
                <div className="text-center">
                    <IonRouterLink routerLink="/bluetoothScan">
                    <ButtonComponent title="Create Shedule" style={{ color:"white",
                                                                    backgroundColor:"gray",
                                                                    width:"150px",
                                                                    margin: "0 10px",
                                                                    padding:"10px 0"
                    }}/>
                    </IonRouterLink>

                    <ButtonComponent title="View Shedule" style={{ color:"white",
                                                                    backgroundColor:"gray",
                                                                    width:"150px",
                                                                    margin: "0 10px",
                                                                    padding:"10px 0"
                    }}/>
                </div><br/>
                <div className="text-center">
                    <ButtonComponent title="Create Shedule" style={{ color:"white",
                                                                    backgroundColor:"gray",
                                                                    width:"150px",
                                                                    margin: "0 10px",
                                                                    padding:"10px 0"
                    }}/>

                    <ButtonComponent title="View Shedule" style={{ color:"white",
                                                                    backgroundColor:"gray",
                                                                    width:"150px",
                                                                    margin: "0 10px",
                                                                    padding:"10px 0"    
                    }}/>
                </div>  
                    
            </div>
            
        </IonPage>

    );
} 

export default Homepage;