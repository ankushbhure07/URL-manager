import { Link } from "react-router-dom";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';

const Dashboard = () => {
    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <Link to="urlwrapper" className="text-decoration-none">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>All Forms</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                </IonCardContent>
                            </IonCard>
                        </Link>
                    </IonCol>
                    <IonCol>
                        <IonCard>
                            <Link to="interesttable" className="text-decoration-none">
                                <IonCardHeader>
                                    <IonCardTitle>Intrest Rate</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                </IonCardContent>
                            </Link>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}

export default Dashboard;