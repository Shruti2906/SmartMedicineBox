import { IonContent, IonPage } from "@ionic/react";
import { Network } from '@capacitor/network';
import { useState } from "react";
const WifiConnectivity : React.FC = () => {
    let currentStatus;
    const [wifistatus, changeStatus] = useState<Boolean>();
    
    const textStyle = {
        color: wifistatus ? 'green' : 'red',
    }

    const logCurrentNetworkStatus = async () => {
        const status = await Network.getStatus();
        changeStatus(status.connected);
    };


    logCurrentNetworkStatus();
    console.warn(currentStatus);
    
    Network.addListener('networkStatusChange', status => {
        changeStatus(status.connected);           
    });
      
      

      
    

    return(
        <IonPage>
            <IonContent>
                <div className="container-fluid">
                    <h1>Network Status</h1>
                    <h3 style={ textStyle } >{ `${wifistatus}` }</h3>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default WifiConnectivity;