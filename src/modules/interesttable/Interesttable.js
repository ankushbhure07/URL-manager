import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';import { Link } from "react-router-dom";

const Interesttable = () => {
    return (
       
        <div>
             <IonGrid>
            <table >
                <tr>
                    <th>Customer Type</th>
                    <th>Interes Rate</th>
                    <th>Tenor</th>
                    <th>Total Interest Earned</th>
                    <th>Total Maturity</th>
                </tr>
                <tr>
                    <th>Citizens below the age of 60 years</th>
                    <td>6.40 % pa</td>
                    <td>24 month</td>
                    <td>Rs 26419</td>
                    <td>Rs 226419</td>
                </tr>
                <tr>
                    <th>Senior Citizens</th>
                    <td>6.40 % pa</td>
                    <td>24 month</td>
                    <td>Rs 26419</td>
                    <td>Rs 226419</td>
                </tr>
                <tr>
                    <th>Citizens Below the age of 60 year</th>
                    <td>6.40 % pa</td>
                    <td>24 month</td>
                    <td>Rs 26419</td>
                    <td>Rs 226419</td>
                </tr>
            </table>
            </IonGrid>
        </div>
    );
}

export default Interesttable;