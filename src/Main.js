/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  IconButton,
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
import Hormonas from './screens/Hormonas';
import Sexualidad from './screens/Sexualidad';
import Medicinas from './screens/Medicinas';
import Verano from './screens/Verano';
import InsuficienciaRenal from './screens/InsuficienciaRenal';
import Colesterol from './screens/Colesterol';
import Bronquitis from './screens/Bronquitis';
import Parkinson from './screens/Parkinson';
import Artrosis from './screens/Artrosis';
import Saludable from './screens/Saludable';
import Legal from './screens/Legal';

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

const screenOptions = props => {
  const {navigation} = props;

  return {
    headerLeft: ({}) => (
      <IconButton
        icon="notebook"
        size={20}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const Main = () => {
  const {theme} = usePreferencesState();
  const userTheme = theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={userTheme}>
      <NavigationContainer theme={userTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          screenOptions={screenOptions}
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="Inicio"
            component={RootScreen}
            options={{title: 'CUIDÁNDONOS PARA CUIDAR MEJOR'}}
          />
          <Drawer.Screen
            name="Legal"
            component={Legal}
            options={{
              title: 'LEGAL',
            }}
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
          <Drawer.Screen
            name="Hormonas"
            component={Hormonas}
            options={{
              title:
                'EL ENVEJECIMIENTO Y LOS TRATAMIENTOS CON HORMONAS. ¿CUÁNDO Y CÓMO?',
            }}
          />
          <Drawer.Screen
            name="Sexualidad"
            component={Sexualidad}
            options={{
              title: 'LA SEXUALIDAD EN LA “EDAD PLATEADA”',
            }}
          />
          <Drawer.Screen
            name="Medicinas"
            component={Medicinas}
            options={{
              title: '¡OJO CON LAS MEDICINAS!',
            }}
          />
          <Drawer.Screen
            name="Verano"
            component={Verano}
            options={{
              title: 'EN VERANO... ¡CUIDADO CON EL CALOR!',
            }}
          />
          <Drawer.Screen
            name="InsuficienciaRenal"
            component={InsuficienciaRenal}
            options={{
              title: 'VIVIENDO CON INSUFICIENCIA RENAL',
            }}
          />
          <Drawer.Screen
            name="Colesterol"
            component={Colesterol}
            options={{
              title: 'TENGO EL COLESTEROL ALTO... ¿Y AHORA QUÉ HAGO?',
            }}
          />
          <Drawer.Screen
            name="Bronquitis"
            component={Bronquitis}
            options={{
              title: 'VIVIENDO CON BRONQUITIS CRÓNICA O ENFISEMA',
            }}
          />
          <Drawer.Screen
            name="Parkinson"
            component={Parkinson}
            options={{
              title: 'VIVIENDO CON PARKINSON',
            }}
          />
          <Drawer.Screen
            name="Artrosis"
            component={Artrosis}
            options={{
              title: 'ME DUELEN LAS ARTICULACIONES ¿SERÁ POR ARTROSIS?',
            }}
          />
          <Drawer.Screen
            name="Saludable"
            component={Saludable}
            options={{
              title: 'ENVEJECIMIENTO SALUDABLE',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
