import { IonContent, IonPage } from "@ionic/react"


const SplashScreen: React.FC = () => {
    return (
        <IonContent>
            <IonPage style={{color: 'black'}}>
                <h1>Splash Screen Page</h1>
            </IonPage>
        </IonContent>        
    )
}

export default SplashScreen;