import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from "@ionic/react";
import ImageWithText from "../components/ImageWithText";

const SelectUser: React.FC = () => {
    return (
        <IonPage>
     
      <IonContent>
        <div style={{marginTop: '66px',}}>
      <IonText
  style={{
    fontFamily: 'Manrope',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '33px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: 'red',
    display: 'block',
  }}
>
  Smart Medicine Box
</IonText >
</div>

        <div className="image-container">
        <ImageWithText imageSrc="src/assets/images/Hospital.png" text="Single User"/>
        <ImageWithText imageSrc="src/assets/images/Hospital.png" text="Hospital" />
        <ImageWithText imageSrc="src/assets/images/Hospital.png" text="Super Admin" />
        </div>
      </IonContent>
    </IonPage>
      
    );
};

export default SelectUser;