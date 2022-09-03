import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from "../components/company/Home";
import CreateRound from "../components/rounds/createRound";
import Profile from "../components/investors/profile";
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'browse') {
                      iconName = focused
                          ? 'list'
                          : 'list';
                  }
                  if (route.name === 'profile') {
                      iconName = focused ? 'person' : 'person-outline';
                  }
                  if(route.name ==='round'){
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                  }


                  return <Ionicons name={iconName} size={22} color={color} />;
              },
              tabBarActiveTintColor: '#A90A0A',
              tabBarInactiveTintColor: 'gray',
              tabBarLabelStyle:{
                  fontSize: 14,
                  margin: 0,
                  padding: 0,
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  paddingBottom: 5,
              },

          })}

      >
          <Tab.Screen name="browse" component={Home} />
          <Tab.Screen name="round" component={CreateRound} />
          <Tab.Screen name="profile" component={Profile} />

      </Tab.Navigator>
  );
}
export default BottomTabs;
