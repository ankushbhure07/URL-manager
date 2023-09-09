import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import bankLogo from '../../assets/bank-logo-dummy.png.png';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const writeSecretFile = async () => {
    console.log("adass")
  await Filesystem.writeFile({
    path: 'secrets/text.txt',
    data: 'This is a test',
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
  });
};

const UrlWrapper = () => {
    const [urls, setUrls] = useState([
        {
            url: "https://cloudidesys.com",
            name: "Cloud IDE",
            description: "Cloud Ide official site, Lets join and enjoy the workspace, Hurry!"
        },
        {
            url: "https://cloudidesys.com",
            name: "Cloud IDEsys",
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
                                        <IonCardSubtitle><a href={bankLogo} download={true} onClick={()=>{writeSecretFile()}} >Browse URL</a></IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        {value.description}
                                    </IonCardContent>
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