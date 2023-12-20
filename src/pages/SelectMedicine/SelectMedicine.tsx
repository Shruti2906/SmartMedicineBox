import { IonButton, IonCheckbox, IonPage, IonText } from "@ionic/react";
import "./SelectMedicine.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SelectMedicine: React.FC = () => {
  return (
    <IonPage>
      <div className="container-fluid">
        {/* title container */}
        <div className="title-container mt-5">
          <div className="title-part p-5">
            <h1 className="text-center">Choose type of Medicine</h1>
          </div>
        </div>
        {/* Checkboxex for Medicine type */}
        <div className="checkboxe-grp-medicines">
          <div className="checkbox-tablet">
            <IonCheckbox></IonCheckbox>
            <IonText className="p-3">Tablet</IonText>
          </div>
          <div className="checkbox-tablet">
            <IonCheckbox></IonCheckbox>
            <IonText className="p-3">Liquid</IonText>
          </div>
          <div className="checkbox-tablet">
            <IonCheckbox></IonCheckbox>
            <IonText className="p-3">Insulin</IonText>
          </div>
        </div>

        {/* Button */}
        <div className="next-button mt-4">
            <IonButton>Next</IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default SelectMedicine;
