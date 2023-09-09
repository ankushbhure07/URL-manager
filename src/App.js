import { useEffect, useState } from 'react';
import './App.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


import FlashScreen from './modules/info/flash-screen/FlasScreen';
import { IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Urlwrapper from './modules/url-wrapper/Urlwrapper';
import Dashboard from './modules/dashboard/Dashboard';
import { App as CapacitorApp } from '@capacitor/app';
setupIonicReact();
function App() {
  const [flashStatus, setFlshStatus] = useState(true);
  const [bank_name, setBankName] = useState('Sahayog Sahakari Pat Sanstha Maryadit Tumsar')
  useEffect(() => {
    setTimeout(() => {
      setFlshStatus(false);
    }, 2000)
  }, [])


  CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  return (
    <div className='bg-gradient vh-100 w-100'>

      {
        flashStatus
          ?
          <FlashScreen bank_name={bank_name} />
          :
          (
            <div>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>{bank_name}</IonTitle>
                </IonToolbar>
              </IonHeader>
              <BrowserRouter>
                <Routes>
                  <Route path="" element={<Dashboard />} />
                  <Route path="/urlwrapper" element={<Urlwrapper />} />
                </Routes>
              </BrowserRouter>
            </div>
          )
      }
    </div>
  );
}

export default App;
