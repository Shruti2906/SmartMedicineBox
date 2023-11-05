import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ImageWithText from "../components/ImageWithText";

const SelectUser: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={{ marginTop: "66px" }}>
          <IonText
            style={{
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "33px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "red",
              display: "block",
              marginBottom:"25px"
            }}
          >
            Smart Medicine Box
          </IonText>
        </div>

        <div className="image-container text-center">
          <ImageWithText
            imageSrc="src/assets/images/user.png"
            text="Single User"
            style={{
              height: "122px",top: "355px",left: "116px", marginBottom:"10px"
            }}
          />
          <ImageWithText
            imageSrc="src/assets/images/Hospital.png"
            text="Hospital"
            style={{
              height: "122px",top: "355px",left: "116px" , marginBottom:"10px"
            }}
          />
          <ImageWithText
            imageSrc="src/assets/images/superAdmin.png"
            text="Super Admin"
            style={{
              height: "122px",top: "355px",left: "116px" , marginBottom:"10px"
            }}
          />
          <IonButton className="" routerLink="/mobileVerification" >Login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectUser;
