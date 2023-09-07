import { useEffect, useState } from 'react';
import './App.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


import FlashScreen from './modules/info/flash-screen/FlasScreen';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();
function App() {
  const [flashStatus, setFlshStatus] = useState(true);
  const [bank_name, setBankName] = useState('Sahayog Sahakari Pat Sanstha Maryadit Tumsar')
  useEffect(() => {
    setTimeout(() => {
      setFlshStatus(false);
    }, 2000)
  }, [])
  return (
    <div className='bg-gradient vh-100 w-100'>

      {
        flashStatus
          ?
          <FlashScreen bank_name={bank_name} />
          :
          (
            <div>
              <ion-header>
                <ion-toolbar>
                  <ion-title>{bank_name}</ion-title>
                </ion-toolbar>
              </ion-header>


              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>All Forms</ion-card-title>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                      </ion-card-header>

                      <ion-card-content>
                        Here's a small text description for the card content. Nothing more, nothing less.
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                  <ion-col>
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>Intrest Rate</ion-card-title>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                      </ion-card-header>

                      <ion-card-content>
                        Here's a small text description for the card content. Nothing more, nothing less.
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          )


      }
    </div>
  );
}

export default App;
