import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../components/splash";
import Login from "../components/login";
import Register from "../components/register";
import Verify from "../components/verify";
import Onboarding from "../components/onboarding";
import CreateCompany  from "../components/company/createCompany";

const Stack = createNativeStackNavigator();
function Stacks() {
    return (
        <Stack.Navigator   screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="verify" component={Verify} />
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="company" component={CreateCompany} />

        </Stack.Navigator>
    );
}

export default Stacks;

