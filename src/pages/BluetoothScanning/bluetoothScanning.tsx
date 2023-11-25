import React, { useState, useEffect } from 'react';
import { IonPage } from '@ionic/react';
import { BLE } from '@awesome-cordova-plugins/ble'
import 'bootstrap/dist/css/bootstrap.min.css';

const BluetoothComponent = () => {
  const val = BLE.isEnabled();
  
  function turnON(){
    BLE.enable();
  }
  return (
    <IonPage>
      <h1 className='text-dark'>Hello  { JSON.stringify(val) }</h1>
      <button className='btn' onClick={ turnON }>Bluetooth</button>
    </IonPage>
  );
};
export default BluetoothComponent;
