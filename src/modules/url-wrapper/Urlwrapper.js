import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import bankLogo from '../../assets/bank-logo-dummy.png.png';
import form1 from '../../assets/PM-Awas-Yojana-Urban-Housing-for-All-by-2022.pdf';
import form2 from '../../assets/SBI-Bank-RTGS-Form-PDF-Format-Download (1).pdf';


import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import {Browser} from '@capacitor/browser';

const writeSecretFile = async (url) => {
    console.log(url);
    Browser.open({url:url, presentationStyle: 'popover'})
 
};

const UrlWrapper = () => {
    const [urls, setUrls] = useState([
        {
            url: "https://sbiuk.statebank/documents/274771/992159/Fixed+Deposit+Account+Opening+Form.pdf/ebf7f1a7-bee4-a8ed-b20d-44931d11031d",
            name: "FD Form",
            description: "Cloud Ide official site, Lets join and enjoy the workspace, Hurry!"
        },
        {
            url: "https://img1.wsimg.com/blobby/go/d37a9b24-bc42-4cb1-ab3b-3d1b21b01aec/downloads/sbi_recurring_deposit_account_opening_form.pdf",
            name: "RD Form",
            description: "Cloud IDEsys official site, Lets join and enjoy the workspace, Hurry!"
        }
    ])
    return (
        <div>
            <IonGrid>
                {
                    urls.map((value) => {
                        return (<IonRow>
                            <IonCol>
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{value.name}</IonCardTitle>
                                        <IonCardSubtitle><a href={bankLogo} download={true} onClick={(value)=>{writeSecretFile(value.url)}} >Download From</a></IonCardSubtitle>
                                    </IonCardHeader>
                                    
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        )
                    })
                }
            </IonGrid>
        </div>
    );
}

export default UrlWrapper;