/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import Fig24 from '../components/Fig24';

const Medicinas = ({navigation}) => {
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
      await AsyncStorage.setItem('@sMedicinas', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sMedicinas');
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
          onPress={() => navigate('Sexualidad')}>
          <Text>{'La sexualidad en la "Edad plateada"'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>¡OJO CON LAS MEDICINAS!</Headline>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>uando las personas van envejeciendo, a pesar de sentirse
          bien y sanas, habitualmente comenzamos a tomar más medicamentos. Hay
          personas que toman muchos, otras casi no toman. Los hay que les gusta
          tomar muchos medicamentos y quienes no les gusta.
        </Paragraph>
        <Paragraph>
          De una u otra forma, los medicamentos que se tomen, por muy seguros
          que sean, pueden producir efectos secundarios indeseables y
          potencialmente peligrosos.
        </Paragraph>
        <Paragraph>
          También ocurre que con frecuencia, las medicinas pueden actuar entre
          sí, potenciando o disminuyendo el efecto de ellas. Es muy razonable
          pensar que al tomar más medicinas, hay más probabilidad que haya un
          efecto secundario de estas, o de que interactúen entre ellas. Todo
          esto es malo para la persona que toma los medicamentos, y
          potencialmente puede ser muy malo.
        </Paragraph>
        <Paragraph>
          A esto se une el hecho de que cuando las personas son muy mayores,
          pueden tener dificultades de memoria para recordar cuándo tomar las
          medicinas, dificultades para ver e identificar el medicamento a tomar
          y dificultades para abrir el envase. Cuando se une todo esto, se llega
          a la conclusión que las personas mayores están más expuestas a sufrir
          daños por tomar medicinas.
        </Paragraph>
        <Paragraph>
          Usted debe conocer todo lo que puede pasar cuando tome sus
          medicamentos, para poder disminuir el riesgo de que le dañen y tener
          más seguridad de que lo van a hacer sentir bien.
        </Paragraph>
        <Paragraph />
        <Subheading>
          CAMBIOS CON LA EDAD QUE AFECTAN A LOS MEDICAMENTOS
        </Subheading>
        <Paragraph>
          Con el paso de los años, ocurren cambios en las personas que influyen
          en cómo actúan las medicinas en el cuerpo. Estos cambios son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuye la función del riñón para excretar los
          medicamentos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuye la secreción de ácidos por el estómago.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuye la masa muscular y aumenta la cantidad de
          grasa en el cuerpo, por lo que los medicamentos que son solubles en
          grasa aumentan su tiempo en el cuerpo y disminuyen lo que son solubles
          en agua.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuye el mecanismo para que mantengamos la presión
          arterial normal cuando pasamos de estar acostados o sentados a
          posición de pie, por lo que los medicamentos pueden producir más
          disminución de la presión con riesgo de caídas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuye la producción de una proteína que se llama
          albúmina los medicamentos normalmente se unen a ella, por lo que
          aumenta la cantidad de medicamento libre en la sangre y esto no es
          bueno.
        </Paragraph>
        <Paragraph>
          Conociéndolos usted podrá entender mejor por qué algún medicamento
          puede dañarle.
        </Paragraph>
        <Paragraph />
        <Subheading>POLIFARMACIA Y PERSONAS MAYORES</Subheading>
        <Paragraph>
          Se conoce que el uso de varios medicamentos puede inducir enfermedades
          en las personas mayores y aumentar los ingresos hospitalarios. El
          acceso a medicamentos sin recetas y la automedicación pueden ocasionar
          enfermedades potencialmente graves.
        </Paragraph>
        <Paragraph>
          La automedicación se ve a menudo entre las personas mayores, así como
          la compra de medicinas siguiendo el consejo de amigos o el uso de
          medicamentos que sobraron del tratamiento anterior y que fueron
          guardados.
        </Paragraph>
        <Paragraph>
          Muchas veces consideramos que no es necesario informar al médico que
          tomamos medicamentos que adquirimos sin receta. Pero al igual que los
          recetados por el médico, estos pueden interactuar unos con otros o dar
          reacciones adversas y causar problemas. Las reacciones adversas de una
          medicina son cualquier efecto perjudicial provocado por la medicina
          que se toma. Cualquier medicamento puede producir una reacción
          adversa.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿Y CÓMO HAGO CUANDO TENGO QUE TOMAR VARIOS MEDICAMENTOS?
        </Subheading>
        <Paragraph>
          Tanto usted como su médico deben decidir entre los riesgos y los
          beneficios de tomar un medicamento. Esto a veces puede ser difícil, y
          va a depender del riesgo que usted quiera tomar y esto se relaciona
          con cuán molesta o grave es su enfermedad. Hay varios tipos de
          riesgos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Que la medicina provoque efectos adversos en el
          organismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La interacción entre un medicamento y otra medicina,
          alimento o bebida.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Que el medicamento no haga lo que debe hacer en el
          cuerpo.
        </Paragraph>
        <Paragraph>
          Algunos consejos para que pueda decidir entre los riesgos y beneficios
          de un medicamento:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Dígale a su médico todas las reacciones adversas que
          haya tenido con medicamentos usados anteriormente por usted.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Siga siempre las indicaciones de su médico y lea
          cuidadosamente las instrucciones de los medicamentos. Cuando tenga
          duda, pregúntele a su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Consulte si existen interacciones entre los
          medicamentos que toma o entre estos y los alimentos y bebidas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Sepa qué reacciones adversas son las más frecuentes y
          esté al tanto si aparecen. Pero no sobrevalore tampoco cualquier
          síntoma que pueda tener y lo haya tenido antes de tomar las medicinas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Sepa cómo reconocer que está mejorando.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Verifique en la farmacia que se lleva los medicamentos
          que solicitó.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si tiene dificultad para recordar cuándo tomar las
          medicinas, o para ver e identificar el medicamento a tomar o para
          abrir el envase, dígaselo a su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Cada vez que visite un médico, infórmele de todas los
          medicamentos (con y sin recetas) o suplementos nutricionales que toma.
          Haga una lista con ellos.
        </Paragraph>
        <Fig24 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>¿CÓMO PUEDO ACORDARME DE TOMAR MI MEDICAMENTO?</Subheading>
        <Paragraph>
          Hay varias cosas que podemos hacer para que no se nos olvide tomar las
          medicinas. Cuando se comienza un nuevo plan, puede ser que se nos pase
          la hora de tomar los medicamentos y cuando se toman varias medicinas a
          diferentes horarios también puede pasar, más cuando la edad avanza. Si
          se retrasa media hora o una hora en tomar sus medicinas, casi nunca
          esto ocasiona un gran problema, aunque algunas medicinas como las que
          se utilizan para tratar la enfermedad de Parkinson sí deben tomarse en
          el horario indicado por el médico. Aquí algunos consejos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Pídale a su médico que le oriente sobre cuales
          medicinas puede tomar junto a otras y así disminuir las veces que toma
          medicinas al día.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Asocie la toma de medicinas con cosas que haga todos
          los días, por ejemplo: antes del desayuno, después del desayuno, antes
          de acostarse o la hora de un programa que usted ve en la televisión.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si puede, use un pastillero semanal, estos pueden traer
          además divisiones para diversas horas del día (mañana, tarde, noche).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Utilice recordatorios y póngalos en lugares visibles,
          como en la puerta de la nevera. Use letras grandes y llamativas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si le es cómodo, use la alarma de su celular para
          recordarle la toma de medicinas. Pídale ayuda a su hijo o nieto.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Es bueno que sus familiares sepan lo que usted toma y
          cuando lo debe tomar.
        </Paragraph>
        <Paragraph />
        <Subheading>GUARDANDO MIS MEDICINAS</Subheading>
        <Paragraph>
          Conocer la mejor forma de guardar sus medicinas le ayuda a tener menos
          reacciones adversas. Guardarlas de manera no apropiada puede alterar
          su efecto. El exceso de luz, calor o humedad puede provocar que sus
          medicinas no sean efectivas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Revise la fecha de vencimiento de sus medicinas.{' '}
          <Bold>No tome medicamentos vencidos</Bold>.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No almacene medicinas viejas. Deséchelas de forma
          segura.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El exceso de calor y humedad en la cocina y el baño
          pueden afectar sus propiedades, principalmente si son cápsulas o
          pastillas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mantenga las medicinas alejadas de los niños si los
          hubiera en su hogar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si usted nota que algún medicamento ha cambiado su
          color u olor, o las tabletas o cápsulas están pegajosas o más blandas
          de lo habitual, no lo consuma, aunque no haya llegado a su fecha de
          vencimiento.
        </Paragraph>
        <Paragraph>
          Por último, no intercambie medicinas ni dé consejos sobre medicamentos
          ni preste mucha atención a los consejos de vecinos o amigos bien
          intencionados. Las personas son distintas y reaccionan diferentes ante
          los mismos medicamentos, aun padeciendo las mismas enfermedades.{' '}
          <Bold>Oiga siempre a su médico</Bold>.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'20-1'}
          question={'1. En las personas mayores:'}
          answers={[
            'El organismo sufre cambios con los años que no influyen en las medicinas que tomamos.',
            'Es más frecuente que ocurran efectos indeseables de los medicamentos.',
            'Las dos son incorrectas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'20-2'}
          question={'2. Las medicinas:'}
          answers={[
            'Cuando se toma más de una pueden interactuar entre ellas.',
            'Se pueden tomar hasta un año después de que estén vencidas.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'20-3'}
          question={'3. Para acordarme mejor de tomar mis pastillas:'}
          answers={[
            'Puedo poner recordatorios en lugares visibles.',
            'Si mi familia conoce lo que tomo me puede ayudar a recordarlo.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Verifique en la farmacia que se lleva los medicamentos que solicitó.',
            'Asocie la toma de medicinas con cosas que haga todos los días para acordarse mejor de tomarlas.',
            'Si tiene celular, prográmelo para que le recuerde tomar las pastillas.',
            'Consulte con su médico los consejos de vecinos o amigos sobre medicamentos.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Verano')}>
          <Text>{'En verano...¡Cuidado con el calor!'}</Text>
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

export default Medicinas;
