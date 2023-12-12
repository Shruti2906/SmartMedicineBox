import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./CreateScheduleInsulin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { add, logoIonic } from "ionicons/icons";

const CreateScheduleInsulin: React.FC = () => {
  return (
    <IonPage className="content">
      <div className="container-fluid">
        <div className="title-container">
          <div className="title-part p-5">
            <h1 className="text-center">Create Schedule</h1>
            <h1 className="text-center">(Insulin)</h1>
          </div>

          <div className="icon-container">
            <IonIcon className="icon" icon={add}></IonIcon>
          </div>
        </div>
        <div className="add-container mx-1">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="Name"
                  value="Insulin"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="Total ml"
                  value="350ml"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="days"
                  value="M, T, W"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="Time"
                  value="9.00 pm"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="ml per Dose"
                  value="10ml per Dose"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
              <IonCol>
                <IonInput
                  type="text"
                  fill="outline"
                  color="medium"
                  className="form-control pl-2 mb-3"
                  placeholder="When"
                  value="After Dinner"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
      <div className="btn-container- text-center">
        <ButtonComponent
          title="Add Schedule"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 70px",
            margin: "20px",
            fontSize: "20px",
            borderRadius: "30px",
          }}
        />
      </div>
    </IonPage>
  );
};

export default CreateScheduleInsulin;
