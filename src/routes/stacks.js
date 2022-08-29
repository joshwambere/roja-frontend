import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../components/splash";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Verify from "../components/auth/verify";
import Onboarding from "../components/onboarding";
import CreateCompany  from "../components/company/createCompany";
import consoleState from '../shared/consoleState';
import CompanyDetails from "../components/company/companyDetails";
import SetSplash from "../components/set/setSplash";
import Home from "../components/company/Home";
import BottomTabs from "./bottomTabs";
import roundsHome from "../components/rounds/Home";
import CreateRound from "../components/rounds/createRound";
import CreatePitch from "../components/pitch/createPitch";
import homeFeed from "../components/feed/home";
import homeOffers from "../components/offers/home";
import InvestorTabs from "./investorTabs";



const Stack = createNativeStackNavigator();
function Stacks() {
  consoleState();
    return (
        <Stack.Navigator   screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name='feed' component={homeFeed} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="verify" component={Verify} />
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="company" component={CreateCompany} />
            <Stack.Screen name="companyDetails" component={CompanyDetails} />
            <Stack.Screen name="set" component={SetSplash} />
            <Stack.Screen name="companyHome" component={BottomTabs} />
            <Stack.Screen name="profile" component={Home} />
            <Stack.Screen name="rounds" component={roundsHome} />
            <Stack.Screen name="createRound" component={CreateRound} />
            <Stack.Screen name='createPitch' component={CreatePitch} />
            <Stack.Screen name='offers' component={homeOffers} />
            <Stack.Screen name='investorHome' component={InvestorTabs} />

        </Stack.Navigator>
    );
}

export default Stacks;

