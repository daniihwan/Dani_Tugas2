import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RingkasanScreen from './screens/RingkasanScreen';
import PertemuanScreen from './screens/PertemuanScreen';
import JadwalScreen from './screens/JadwalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Ringkasan"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerShadowVisible: false,
          headerTintColor: '#333',
        }}
      >
        <Stack.Screen
          name="Ringkasan"
          component={RingkasanScreen}
          options={{
            title: 'Ringkasan Matkul',
          }}
        />

        <Stack.Screen
          name="Pertemuan"
          component={PertemuanScreen}
          options={{
            title: 'Daftar Pertemuan',
          }}
        />

        <Stack.Screen
          name="Jadwal"
          component={JadwalScreen}
          options={{
            title: 'Jadwal Mingguan',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}