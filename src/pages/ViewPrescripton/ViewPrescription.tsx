import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import "./ViewPrescription.css";
import "bootstrap/dist/css/bootstrap.min.css";
import prescription from "/src/assets/images/prescription.jpg";
import ImageWithText from "../../components/ImageWithText/imageWithTextComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";

const ViewPrescription: React.FC = () => {
  return (
    <IonPage className="content">
    {/* main Container */}
      <div className="container-fluid">
        {/* Title container */}
        <div className="title mt-5">
          <IonText>Prescription</IonText>
        </div>
      {/* prescription list container */}
      <div className="prescription-list">
        <IonGrid>
          <IonRow>
            <IonCol>
                {/* individual prescription */}
              <div className="prescription">
                <IonImg src={prescription} className="presc-img" />
                <IonText>Dr. Arvind</IonText>
              </div>
            </IonCol>
            <IonCol>
              <div className="prescription">
                <IonImg src={prescription} className="presc-img" />
                <IonText>Dr. Arvind</IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <hr />
      {/* Manual Prescription */}
      <div className="manual-prescription-list">
        <div className="manual-prescription">
        <IonGrid>
            <IonRow>
            <IonCol size="2"  >
            <IonText>1</IonText>
            </IonCol>
            <IonCol size="7"  >
                <IonText>Dr. Arwind</IonText>
            </IonCol>
            <IonCol size="3">
                <ButtonComponent title="open" style={{ color:"white", backgroundColor:"#EA4545" }} />
            </IonCol>
            </IonRow>
        </IonGrid>
        </div>
        <div className="manual-prescription">
        <IonGrid>
            <IonRow>
            <IonCol size="2"  >
            <IonText>2</IonText>
            </IonCol>
            <IonCol size="7"  >
                <IonText>Dr. Arwind</IonText>
            </IonCol>
            <IonCol size="3">
                <ButtonComponent title="open" style={{ color:"white", backgroundColor:"#EA4545" }} />
            </IonCol>
            </IonRow>
        </IonGrid>
        </div>
        <div className="manual-prescription">
        <IonGrid>
            <IonRow>
            <IonCol size="2"  >
            <IonText>3</IonText>
            </IonCol>
            <IonCol size="7"  >
                <IonText>Dr. Arwind</IonText>
            </IonCol>
            <IonCol size="3">
                <ButtonComponent title="open" style={{ color:"white", backgroundColor:"#EA4545" }} />
            </IonCol>
            </IonRow>
        </IonGrid>
        </div>
      </div>
      </div>
    </IonPage>
  );
};

export default ViewPrescription;
