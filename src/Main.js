/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import DrawerContent from './components/DrawerContent';

import {usePreferencesState} from './context/preferences';

const Drawer = createDrawerNavigator();

import RootScreen from './screens/RootScreen';
import Prologo from './screens/Prologo';
import TerceraEdad from './screens/TerceraEdad';
import ComoEnvejece from './screens/ComoEnvejece';
import EnvejecimientoSentidos from './screens/EnvejecimientoSentidos';
import MeCaigo from './screens/MeCaigo';
import DurmiendoMal from './screens/DurmiendoMal';
import Alimentarnos from './screens/Alimentarnos';
import Triste from './screens/Triste';
import IrAlBano from './screens/IrAlBano';
import LosPies from './screens/LosPies';
import Corazon from './screens/Corazon';
import Diabetes from './screens/Diabetes';
import PresionAlta from './screens/PresionAlta';
import Cancer from './screens/Cancer';
import Isquemia from './screens/Isquemia';
import Osteoporosis from './screens/Osteoporosis';
import Prostata from './screens/Prostata';
import Ejercicios from './screens/Ejercicios';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const Main = () => {
  const {theme} = usePreferencesState();
  const userTheme = theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={userTheme}>
      <NavigationContainer theme={userTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="Inicio"
            component={RootScreen}
            options={{title: 'CUIDÁNDONOS PARA CUIDAR MEJOR'}}
          />
          <Drawer.Screen
            name="Prologo"
            component={Prologo}
            options={{title: 'PRÓLOGO'}}
          />
          <Drawer.Screen
            name="TerceraEdad"
            component={TerceraEdad}
            options={{title: 'LA TERCERA EDAD...SUS RETOS'}}
          />
          <Drawer.Screen
            name="ComoEnvejece"
            component={ComoEnvejece}
            options={{title: '¿CÓMO ENVEJECE EL MUNDO?...Y NOSOTROS'}}
          />
          <Drawer.Screen
            name="EnvejecimientoSentidos"
            component={EnvejecimientoSentidos}
            options={{title: 'EL ENVEJECIMIENTO DE LOS SENTIDOS'}}
          />
          <Drawer.Screen
            name="MeCaigo"
            component={MeCaigo}
            options={{title: 'CUIDADO QUE SI ME CAIGO...'}}
          />
          <Drawer.Screen
            name="DurmiendoMal"
            component={DurmiendoMal}
            options={{title: 'ESTOY DURMIENDO MAL...'}}
          />
          <Drawer.Screen
            name="Alimentarnos"
            component={Alimentarnos}
            options={{title: '¿QUÉ ES ALIMENTARNOS SANAMENTE?'}}
          />
          <Drawer.Screen
            name="Triste"
            component={Triste}
            options={{title: 'ESTOY TRISTE, PERO... ¿ESTOY DEPRIMIDO?'}}
          />
          <Drawer.Screen
            name="IrAlBano"
            component={IrAlBano}
            options={{title: 'ME CUESTA TRABAJO IR AL BAÑO'}}
          />
          <Drawer.Screen
            name="LosPies"
            component={LosPies}
            options={{title: 'TENGO DOLOR EN LOS PIES'}}
          />
          <Drawer.Screen
            name="Corazon"
            component={Corazon}
            options={{title: '¿ESTOY ENFERMO DEL CORAZÓN?'}}
          />
          <Drawer.Screen
            name="Diabetes"
            component={Diabetes}
            options={{title: '¿QUÉ ES LA DIABETES Y CÓMO MANEJARLA?'}}
          />
          <Drawer.Screen
            name="PresionAlta"
            component={PresionAlta}
            options={{title: '¿QUÉ DEBO SABER DE LA PRESIÓN ALTA?'}}
          />
          <Drawer.Screen
            name="Cancer"
            component={Cancer}
            options={{title: '¿QUÉ DEBEMOS SABER SOBRE EL CÁNCER?'}}
          />
          <Drawer.Screen
            name="Isquemia"
            component={Isquemia}
            options={{title: 'LA “ISQUEMIA” CEREBRAL'}}
          />
          <Drawer.Screen
            name="Osteoporosis"
            component={Osteoporosis}
            options={{title: '¿CÓMO ANDAN MIS HUESOS? LA OSTEOPOROSIS'}}
          />
          <Drawer.Screen
            name="Prostata"
            component={Prostata}
            options={{
              title:
                'ME ESTOY LEVANTANDO A ORINAR POR LA NOCHE. ¿TENDRÉ PROBLEMAS EN LA PRÓSTATA?',
            }}
          />
          <Drawer.Screen
            name="Ejercicios"
            component={Ejercicios}
            options={{
              title: '¿YO PUEDO HACER EJERCICIOS FÍSICOS?',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
