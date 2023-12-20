import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./manualUploadPrescription.css";

const manualUploadPrescription: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <div
          style={{
            backgroundColor: "red",
            width: "80%",
            height: "5vh",
            margin: "auto",
            textAlign: "center",
            paddingTop: "7px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          Prescription Details
        </div>
      </IonHeader>
      <IonContent>
        <div style={{ display: "flex", margin: " 40px 0 40px 20px " }}>
          <div style={{ display: "flex" }}>Doctor's Name : </div>
          <input
            style={{
              display: "flex",
              width: "40%",
              marginLeft: "10px",
            }}
            type="text"
          ></input>
          <br />
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <th>Type</th>
              <th>Medicine Name</th>
              <th>Day</th>
              <th>Time</th>
              <th>Quantity</th>
              <th>Dose</th>
            </thead>
            <br />
            <tbody>
              <tr>
                <td>
                  <IonList>
                    <IonItem>
                      <IonSelect aria-label="fruit" placeholder="Select fruit">
                        <IonSelectOption value="apples">Apples</IonSelectOption>
                        <IonSelectOption value="oranges">
                          Oranges
                        </IonSelectOption>
                        <IonSelectOption value="bananas">
                          Bananas
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <IonList>
                    <IonItem>
                      <IonSelect aria-label="fruit" placeholder="Select fruit">
                        <IonSelectOption value="apples">Apples</IonSelectOption>
                        <IonSelectOption value="oranges">
                          Oranges
                        </IonSelectOption>
                        <IonSelectOption value="bananas">
                          Bananas
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <IonList>
                    <IonItem>
                      <IonSelect aria-label="fruit" placeholder="Select fruit">
                        <IonSelectOption value="apples">Apples</IonSelectOption>
                        <IonSelectOption value="oranges">
                          Oranges
                        </IonSelectOption>
                        <IonSelectOption value="bananas">
                          Bananas
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <IonList>
                    <IonItem>
                      <IonSelect aria-label="fruit" placeholder="Select fruit">
                        <IonSelectOption value="apples">Apples</IonSelectOption>
                        <IonSelectOption value="oranges">
                          Oranges
                        </IonSelectOption>
                        <IonSelectOption value="bananas">
                          Bananas
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <IonList>
                    <IonItem>
                      <IonSelect aria-label="fruit" placeholder="Select fruit">
                        <IonSelectOption value="apples">Apples</IonSelectOption>
                        <IonSelectOption value="oranges">
                          Oranges
                        </IonSelectOption>
                        <IonSelectOption value="bananas">
                          Bananas
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
        <button
          style={{
            backgroundColor: "red",
            width: "40%",
            padding: "11px",
            borderRadius: "10px",
            marginLeft: "30%",
            marginTop: "20px",
          }}
        >
          Upload Prescription
        </button>
      </IonContent>
    </IonPage>
  );
};

export default manualUploadPrescription;
