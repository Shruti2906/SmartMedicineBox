import {
  faCalendarDays,
  faFileImage,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
// import "./styles.css";

interface ContainerProps {}

const uploadPrescription: React.FC<ContainerProps> = ({ handleFile }: any) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput: any = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    //   if (hiddenFileInput.current) {
    hiddenFileInput.current.click();
    // }
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <IonCard
        style={{ backgroundColor: "white", margin: "0", height: "100%" }}
      >
        {/* <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        /> */}
        <button
          style={{
            width: "100%",
            height: "55vh",
            borderRadius: "15px",
            padding: "0 10px 10px 0",
          }}
          className="button-upload"
          onClick={handleClick}
        >
          <div
            style={{
              width: "20%",
              height: "15%",
              borderRadius: "50%",
              backgroundColor: "lightgrey",
              marginLeft: "40%",
            }}
          >
            <FontAwesomeIcon
              style={{
                width: "60px",
                marginTop: "20px",
              }}
              icon={faImage}
              size="2xl"
            />
          </div>
        </button>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{ display: "none" }} // Make the file input element invisible
        />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ padding: "20px 20px 10px 20px", marginRight: "30px" }}>
            {/* <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            <FontAwesomeIcon
              style={{ marginRight: "7px" }}
              icon={faCalendarDays}
            />
            <input
              type="date"
              style={{
                width: "80%",
                backgroundColor: "white",
                color: "grey",
                borderRadius: "6px",
                // padding: "0  0 25px",
                //   border: "none",
              }}
            />
            <div
              style={{ marginTop: "9px", marginLeft: "1px", fontSize: "18px" }}
            >
              Purchase Date
            </div>
          </div>

          <div
            style={{
              padding: "20px 0 0 0",
              height: "20px",
            }}
          >
            <input
              type="number"
              style={{
                width: "40%",
                height: "20px",
                backgroundColor: "lightgray",
                color: "black",
                padding: "0",
                marginRight: "5px",
                marginLeft: "30px",
                borderRadius: "6px",
              }}
            />
            Days
          </div>
          <div
            style={{
              fontSize: "18px",
              //   display: "block",
              position: "absolute",
              right: "45px",
              bottom: "34%",
            }}
          >
            Scheduled Days
          </div>
        </div>

        <IonCardContent style={{ marginTop: "20px" }}>
          <span>Doctor's Name :</span>
          <input
            type="text"
            style={{
              backgroundColor: "lightgray",
              color: "black",
              borderRadius: "6px",
              marginLeft: "8px",
            }}
          />
        </IonCardContent>

        <button
          style={{
            width: "60%",
            marginLeft: "20%",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            backgroundColor: "black",
          }}
        >
          Enter Prescription Manually
        </button>
        <br />
        <button
          style={{
            width: "40%",
            marginLeft: "30%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: "red",
            marginBottom: "20px",
          }}
        >
          Upload Prescription
        </button>
      </IonCard>
    </>
  );
};

export default uploadPrescription;
