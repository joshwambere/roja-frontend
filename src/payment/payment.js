import {StripeProvider} from "@stripe/stripe-react-native";
import StripeApp from "./StripeApp";
import {STRIPE_PUBLISHABLE_KEY} from '@env'

const Payment =({navigation})=>{
    const offer = navigation.getState().routes[navigation.getState().index].params.offer;
    return(
        <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <StripeApp offer={offer}/>
        </StripeProvider>
    )
}

export default Payment;
