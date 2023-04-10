/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Headline,
  Text,
  Subheading,
  TouchableRipple,
  useTheme,
  Paragraph,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';
import Fig25 from '../components/Fig25';

const Verano = ({navigation}) => {
  const {colors} = useTheme();
  const {height, width} = useWindowDimensions();

  const dispatch = usePreferencesDispatch();

  const scrollView = useRef(null);

  let min = width;
  if (height < min) {
    min = height;
  }
  min = (min / 4) * 3;

  const navigate = async c => {
    try {
      await AsyncStorage.setItem('@chapter', c);
      dispatch({type: 'SET_CHAPTER', payload: c});
    } catch (e) {
      console.log(e);
    }
  };

  const saveScrollPos = async event => {
    const s = event.nativeEvent.contentOffset.y.toString();
    try {
      await AsyncStorage.setItem('@sVerano', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sVerano');
        if (s !== null) {
          scrollView.current.scrollTo({x: 0, y: parseFloat(s), animated: true});
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchScroll();
  }, []);

  return (
    <ScrollView
      ref={scrollView}
      onMomentumScrollEnd={saveScrollPos}
      contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Headline />
        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Medicinas')}>
          <Text>{'¡Ojo con las medicinas!'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          EN VERANO... ¡CUIDADO CON EL CALOR!
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>ntre los mecanismos que permiten que el cuerpo tenga una
          temperatura adecuada está la sensación de sed así como la sudoración,
          la cual al evaporarse refresca la piel. Cuando se está expuesto al
          frío, las personas pueden comenzar a temblar y eso ayuda a mantener el
          cuerpo caliente.
        </Paragraph>
        <Paragraph>
          Los órganos del cuerpo trabajan entre ciertos límites de temperatura y
          cuando se sobrepasan esos límites, los órganos no trabajan bien. Eso
          puede pasar cuando se tiene fiebre, por cualquier causa. Pero cuando
          se está expuesto a ambientes demasiados cálidos, la sudoración no es
          suficiente, principalmente cuando hay mucha humedad que dificulta la
          evaporación del sudor, comienza a subir la temperatura del cuerpo y
          pueden aparecer enfermedades debido a ello.
        </Paragraph>
        <Paragraph>
          Hay varias formas en que el calor puede dañar a las personas y va a
          estar relacionado con la temperatura ambiente y el tiempo que estén
          expuestas al calor. Habitualmente, ocurren porque el calor actúa
          durante demasiado tiempo.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO PUEDE DAÑAR EL CALOR?</Subheading>
        <Paragraph>
          Frecuentemente las enfermedades producidas por el calor están
          asociadas a una exposición al sol prolongada, aunque no siempre es
          así. El calor puede producir diferentes tipos de enfermedades, como
          son los llamados calambres ocasionados por el calor, que son espasmos
          musculares que se producen por un ejercicio intenso. El ejercicio
          genera calor en nuestro organismo, por eso sudamos cuando lo
          realizamos. Si se genera mucho calor, pueden aparecer calambres.
        </Paragraph>
        <Paragraph>
          La piel se puede irritar por el calor y la sudoración, provocando lo
          que se conoce por salpullido, que consiste en una erupción rojiza, que
          puede provocar picazón y hasta un poco de ardor.
        </Paragraph>
        <Paragraph>
          Si la exposición al calor es por más tiempo, las personas comienzan a
          sufrir agotamiento, mucho cansancio, las piernas se vuelven pesadas,
          se suda mucho. El pulso se acelera y puede haber mareos.
        </Paragraph>
        <Paragraph>
          El grado máximo de afectación del calor por mucha exposición al mismo
          es el llamado golpe de calor, donde existe peligro de muerte para la
          persona por deshidratación y por el gran aumento de la temperatura
          corporal que se produce. Casi siempre se deja de sudar, pues la
          persona se comienza a deshidratar, el pulso es muy rápido, la presión
          sanguínea disminuye y la vista puede nublarse y no se presta mucha
          atención a lo que pasa alrededor.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUIÉN TIENE MÁS RIESGO DE SUFRIR PROBLEMAS CON EL CALOR?
        </Subheading>
        <Paragraph>
          Las personas mayores, con o sin enfermedades y aquellos con sobrepeso,
          son las que mayor riesgo tienen de sufrir problemas por el exceso de
          calor. Casi todas las personas que llegan a morir por una ola de calor
          son personas mayores o personas con enfermedades del corazón u otra
          que dé fiebre.
        </Paragraph>
        <Paragraph>
          Se está en riesgo de sufrir golpe de calor cuando no se está habituado
          a mucho calor, hay ingestión de bebidas alcohólicas, se está
          practicando ejercicios bajo el sol o con una temperatura ambiente alta
          o mucha humedad.
        </Paragraph>
        <Paragraph>
          También las personas que toman diuréticos, sedantes u otros
          medicamentos para la presión alta, que tengan cambios de la piel
          debido al envejecimiento, tienen mayor riesgo de tener efectos
          indeseables por el calor.
        </Paragraph>
        <Paragraph>
          Otro factor que aumenta el riesgo es no haber tomado la suficiente
          cantidad de agua, en las personas mayores disminuye el reflejo de la
          sed para tomar agua y se deshidratan con mayor facilidad.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ MEDIDAS TOMAR PARA PREVENIR PROBLEMAS CON EL CALOR?
        </Subheading>
        <Paragraph>
          Lo principal para no sufrir alguna enfermedad por el calor, es planear
          lo que vamos a hacer cuando el clima es caliente. Es muy importante
          estar al tanto de los partes del tiempo.
        </Paragraph>
        <Paragraph>
          Debemos llevar con nosotros suficiente líquido para tomar y recuerde
          tomarlo frecuentemente en sorbos pequeños, aunque no sea muy imperiosa
          la sensación de sed.
        </Paragraph>
        <Paragraph>
          Si va a estar al aire libre, es bueno conocer si habrá lugares de
          sombra. Use ropas ligeras y de color claro preferiblemente, tómese
          descansos a la sombra cuando pueda, sea cuidadoso con la actividad
          física bajo el sol o si hay mucha humedad en el ambiente. En caso de
          que en su casa no haya aire acondicionado o ventiladores, trate de
          cerrar las ventanas por donde penetra el sol. Mantenga abiertas las
          ventanas en la parte de la sombra y ponga cortinas en las que incide
          el sol. Si siente mucho calor en su casa, tome una ducha para
          refrescarse.
        </Paragraph>
        <Fig25 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Por último, conozca bien los síntomas de las enfermedades por calor;
          si las detecta a tiempo, debe tomar agua, trasladarse a un lugar más
          fresco o pedir ayuda puede hacer la diferencia.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CUÁLES SON LOS SÍNTOMAS DE QUE EL CALOR NOS ESTÁ LASTIMANDO?
        </Subheading>
        <Paragraph>
          Existen síntomas iniciales para las enfermedades producidas por calor,
          y otros que aparecen más tardíamente cuando el problema ha avanzado
          más.
        </Paragraph>
        <Paragraph>
          Entre los síntomas iniciales pueden haber calambres (atención: se
          puede padecer de calambres, principalmente en las piernas por otras
          razones. Se está hablando del calambre que no existía y comienza a
          aparecer en un ambiente caliente). Además las personas comienzan a
          sudar mucho, puede aparecer fatiga y aumenta la sed. Insistimos en
          recordar que la sensación de sed puede ser menor en las personas
          mayores.
        </Paragraph>
        <Paragraph>
          Si la persona sigue expuesta al calor, entonces puede aparecer
          debilidad, dolor de cabeza, la piel deja de sudar y se pone algo
          pegajosa, las orinas se ponen oscuras, puede aparecer fiebre, el pulso
          se acelera (es normal hasta 100 pulsaciones por minuto), y puede
          aparecer un comportamiento raro en las personas, llegando a la pérdida
          de conocimiento y convulsiones en algunos casos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿Y QUÉ PUEDO HACER?</Subheading>
        <Paragraph>
          Si tenemos un acompañante, es importante decírselo para que nos ayude.
          Si los síntomas son iniciales, busque una forma de refrescar el
          cuerpo. Si está caminando por las calles, entre a algún lugar con
          sombra y si tiene aire acondicionado mejor. Tome varios vasos pequeños
          de líquido, preferiblemente agua. Si está en su casa,{' '}
          <Bold>dígaselo</Bold> a quien viva con usted, o llame a algún
          familiar, amigo o vecino. Si no tiene ventilador o aire acondicionado
          abra las ventanas que tengan sombra, o trate de ir a la parte más
          fresca de la casa. Aunque no sienta sed, tome agua.
        </Paragraph>
        <Paragraph>
          Recuerde, esté al tanto del parte del clima y prepárese si pronostican
          mucho calor.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'21-1'}
          question={'1. El calor intenso:'}
          answers={[
            'Nos puede dañar solo si estamos al sol.',
            'Nos puede dañar en cualquier ambiente muy caluroso.',
            'Nos lastima solo si tenemos mucha ropa puesta.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'21-2'}
          question={'2. Los síntomas iniciales del golpe de calor son:'}
          answers={[
            'Sudoración intensa.',
            'Tener sed y decaimiento.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'21-3'}
          question={'3. Si estamos en un ambiente muy caluroso debemos:'}
          answers={[
            'Tomar bastantes líquidos.',
            'Buscar una sombra o un ambiente menos caluroso.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'El calor extremo aún en la sombra puede dañar nuestra salud.',
            'Las personas mayores están en alto riesgo de sufrir por el calor extremo.',
            'Si hay mucho calor y está sudando mucho, busque un lugar más fresco y tome varios vasos de agua.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('InsuficienciaRenal')}>
          <Text>{'Viviendo con insuficiencia renal'}</Text>
        </TouchableRipple>

        <Headline />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default Verano;
