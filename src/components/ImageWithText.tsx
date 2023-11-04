import React from 'react';
import { IonText } from '@ionic/react';

const ImageWithText: React.FC<{ imageSrc: string; text: string }> = ({ imageSrc, text }) => {
  return (
    <div className="image-container" style={{ textAlign: 'center' }}>
    <img
      src={imageSrc}
      alt="Image"
      style={{
        display: 'block',
        margin: '0 auto',
        width: '142px', 
        height: '122px',
        position: 'relative',
        top: '32px', 
        left: '0', 
      }}
    />
    <IonText style={{ color: 'black', textAlign: 'center', position: 'relative',
      top: '32px', }}>{text}</IonText>
  </div>
  );
};

export default ImageWithText;
