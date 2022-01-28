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
import Hr from '../components/Hr';
import QuestionLines from '../components/QuestionLines';

const MeCaigo = ({navigation}) => {
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
      await AsyncStorage.setItem('@sMeCaigo', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sMeCaigo');
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
          onPress={() => navigate('EnvejecimientoSentidos')}>
          <Text>{'El envejecimiento de los sentidos'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>CUIDADO QUE SI ME CAIGO...</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>os niños pequeños se caen casi todos los días y no les
          pasa nada, “rebotan” en el piso. Pero una caída en una persona de edad
          puede marcar un antes y un después en su vida. Tres de cada 10
          personas mayores de 65 años que viven en sus casas se caen por lo
          menos una vez al año, y de los mayores de 80 años la mitad sufren al
          menos una caída en ese mismo período de tiempo.
        </Paragraph>
        <Paragraph>
          Las personas mayores tienen más riesgo de fracturarse al caerse que
          personas de 30 o 40 años, pues la mayoría tiene una enfermedad llamada
          osteoporosis, que no es más que descalcificación de los huesos, y esto
          debilita los huesos haciéndolos más frágiles. La buena noticia es que
          hay maneras de disminuir las caídas y la osteoporosis.
        </Paragraph>
        <Paragraph />
        <Subheading>NOS CAEMOS PORQUE...</Subheading>
        <Paragraph>
          Muchas veces las caídas se producen por un traspié o un resbalón, pero
          hay otros motivos para caernos. Los motivos pueden ser de la propia
          persona o el ambiente que nos rodea.
        </Paragraph>
        <Paragraph>
          Con el paso de los años cambia nuestra visión, audición y se produce
          un aumento de la marcha oscilante. Esta última puede ser ocasionada
          por mayor lentitud en nuestro tiempo de reacción, a trastornos de los
          reflejos de enderezamiento del cuerpo o a disminución de nuestra
          capacidad de reconocer en qué posición se encuentra nuestro cuerpo
          (recordemos que normalmente, con los ojos cerrados, sabemos si estamos
          sentados o de pie).
        </Paragraph>
        <Paragraph>
          Todos estos cambios aumentan el riesgo de que nos caigamos. Pero
          además, cuando enfermamos tenemos más posibilidades de sufrir una
          caída, o por la propia enfermedad que nos debilita o por tomar algunas
          medicinas que pueden provocarnos mareos, falta de estabilidad o
          lentitud en nuestras reacciones. Por otro lado, algunos estados
          emocionales como la depresión, la ansiedad, la alteración del sueño
          pueden ocasionar caídas porque la persona mayor no presta la atención
          necesaria porque está triste, alterada o con sueño. Así también
          podemos mencionar que las medicinas para tratar la presión alta o las
          que tomamos para dormir con cierta frecuencia predisponen a que nos
          caigamos.
        </Paragraph>
        <Paragraph>
          Pero también hay situaciones del medio que nos rodea que pueden
          favorecer una caída. Por ejemplo en nuestra casa: el piso mojado, un
          juguete de un nieto tirado en el piso, una iluminación inadecuada o
          excesiva, la ausencia de pasamanos en las escaleras, una bañadera
          resbaladiza, estantes muy altos en la cocina, sobrecamas largas o
          sillas mal colocadas entornos que pueden de diversas formas propiciar
          este tipo de suceso doméstico.
        </Paragraph>
        <Paragraph>
          Fuera de la casa, las calles o aceras en mal estado, un alumbrado
          público insuficiente o existencia de barreras de accesibilidad al
          transporte público para las personas mayores, representan también
          algunos de los factores que favorecen una caída.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ NOS PUEDE PASAR SI NOS CAEMOS?</Subheading>
        <Paragraph>
          En ocasiones las caídas producen poco daño, pero en las personas
          mayores, casi siempre tienen alguna consecuencia. Las fracturas son la
          secuela más grave. Inmediatamente después de la caída, además de las
          fracturas pueden ocurrir heridas u otras lesiones que necesiten
          hospitalización, o también pueden provocar estar un tiempo prolongado
          en el suelo, que a su vez puede llevar a la deshidratación y a{' '}
          <Bold>mayor miedo a volverse a caer</Bold>.
        </Paragraph>
        <Paragraph>
          También hay otras consecuencias que aparecen pasadas unas semanas,
          aunque no haya habido fractura; como por ejemplo las de tipo
          psicológicas: dependencia para realizar las actividades de todos los
          días por miedo a caerse, lo cual hace que caminemos menos tratando de
          evitar una nueva caída y estemos mucho más tiempo sentados y/o
          acostados para protegernos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ HACER PARA EVITAR CAERNOS?</Subheading>
        <Paragraph>
          Se recomienda en primera instancia, mejorar nuestras condiciones
          personales así como modificar nuestro entorno para así disminuir la
          posibilidad de que nos caigamos; a continuación hablaremos de lo que
          podemos hacer para nosotros mismos.
        </Paragraph>
        <Paragraph>
          Debemos, por lo tanto, conservarnos lo más saludables posible, por lo
          que es importante consultar al médico para tratar de corregir hasta
          donde se puedan, los problemas de la visión y la audición que tenemos,
          esto nos ayudará a mejorar el equilibrio y capacidad de ver, que son
          muy importantes.
        </Paragraph>
        <Paragraph>
          La práctica de ejercicios físicos ayuda de muchas formas, pero el
          fortalecimiento de los músculos que tienen que ver con la marcha
          (principalmente los de las piernas) mejorará notablemente nuestra
          capacidad de evitar una caída.
        </Paragraph>
        <Paragraph>
          Los ejercicios pueden ser variados, ir a trotar, asistir a un gimnasio
          o simplemente caminar con zapatos cómodos. Trate de caminar todos los
          días unas cuantas cuadras. El trabajo doméstico cansa mucho, pero no
          es ejercicio para las piernas.
        </Paragraph>
        <Paragraph>
          De particular importancia es la práctica del Tai–Chi, que mejora
          notablemente nuestro equilibrio, algo muy importante para no caernos.
          Todas las personas que puedan, deben practicarlo, si tiene dudas en
          que si puede hacerlo o no, pregúntele siempre a su médico antes de
          comenzarlo.
        </Paragraph>
        <Paragraph>
          Cuando estemos acostados o sentados y nos vayamos a poner de pie,
          debemos hacerlo sin apuro. Si estamos acostados, primero nos sentamos
          y esperamos unos segundos, y después nos paramos, pero permanecemos al
          lado de la cama unos segundos hasta que estemos seguros de poder
          caminar. Esto último también lo hacemos cuando nos levantamos de una
          silla o sillón. Si el asiento tiene brazos, nos pararemos con más
          facilidad. Si presentamos problemas para levantarnos, consulte a su
          médico o a un fisioterapeuta.
        </Paragraph>
        <Paragraph>
          Es importante también fortalecer nuestros huesos tomando suplementos
          de calcio y vitamina D, para lo cual y previa consulta con su médico
          le indique la dosis óptima.
        </Paragraph>
        <Paragraph>
          Incorporar los ejercicios a su quehacer diario resulta también muy
          importante para fortalecer nuestros huesos.
        </Paragraph>
        <Paragraph>
          Por otro lado, debemos cuidar de nuestros pies, si podemos visitemos a
          un podólogo, al menos, una vez al mes, un corte adecuado de las uñas y
          tratamiento oportuno a los callos, favorece buena estabilidad al
          caminar y evita que nos caigamos.
        </Paragraph>
        <Paragraph>
          Debemos usar zapatos cómodos, que ajusten bien al pie y de tacón bajo.
          Un bastón o andador puede ayudar, si ya es necesario su uso.
        </Paragraph>
        <Paragraph>
          Tomemos la menor cantidad de medicamentos posibles, solamente los
          indicados por nuestro médico. Si aparecen efectos como vértigos o
          visión borrosa, no deje de consultarlo para que evalúe si se debe
          realizar algún cambio o suprimir algún medicamento.
        </Paragraph>
        <Paragraph>
          Ahora hablaremos de los arreglos o cuidados que debemos tener con el
          medio que nos rodea para evitar una caída. La mayoría de las caídas
          son en la casa por lo que debemos revisar bien la disposición de los
          muebles, la iluminación, la posición de los estantes, las escaleras y
          pensar si debemos hacer algunos cambios.
        </Paragraph>
        <Paragraph>
          A continuación esta tabla nos permitirá revisar nuestro hogar para
          después decidir si hacemos algún cambio, responda las preguntas y
          según sus respuestas, piense si debe transformar algo para disminuir
          el riesgo de que nos caigamos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ESCALA DE EVALUACIÓN DE RIESGO DE CAÍDAS EN EL HOGAR
        </Subheading>
        <Paragraph />
        <Hr />
        <Text>TAREAS DOMÉSTICAS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={1}
          questions={[
            '¿Limpia las salpicaduras tan pronto como se producen?',
            '¿Mantiene limpio y sin obstáculos los suelos y las escaleras?',
            '¿Guarda los libros, revistas y material de costura y juguetes de los niños tan pronto como acaban de jugar?',
            '¿Guarda con frecuencia los objetos usados en estantes accesibles?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>SUELOS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={5}
          questions={[
            '¿Procura que todas las alfombras pequeñas sean antideslizante?',
            '¿Están bien fijos los bordes de las alfombras?',
            '¿Ha corregido los desniveles del suelo?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>BAÑOS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={8}
          questions={[
            '¿Usa alfombra o adhesivo antideslizante en la bañera o en la ducha?',
            '¿Tiene pasamanos su baño?',
            '¿Mantiene el jabón en una jabonera de fácil acceso?',
            '¿Son de fácil acceso las toallas u otros objetos de uso en el baño?',
            '¿Usa cortina en su bañera para evitar mojar el piso del baño?',
            '¿Tiene el interruptor del baño al lado de la puerta?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>PASILLOS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={14}
          questions={[
            '¿Puede cruzar todas las habitaciones y pasar de una a otra sin dar vueltas alrededor de los muebles?',
            '¿Está libre de obstáculos el camino desde el dormitorio hasta el baño?',
            '¿Permanecen apartados del camino los cables del teléfono y de otros aparatos?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>ILUMINACIÓN</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={17}
          questions={[
            '¿Tiene interruptores cerca de todas las puertas?',
            '¿Tiene iluminación suficiente para eliminar las áreas oscuras?',
            '¿Tiene una lámpara o interruptor al alcance de la cama?',
            '¿Tiene luces nocturnas en el cuarto de baño y en el pasillo que conduce del dormitorio al baño?',
            '¿Están bien iluminadas las escaleras?',
            '¿Tiene interruptor al principio y al final de las escaleras?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>ESCALERAS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={23}
          questions={[
            '¿Tiene pasamanos seguros a ambos lados y a todo lo largo?',
            '¿Están bien separados los pasamanos de las paredes de modo que usted se pueda sujetar bien?',
            '¿Tienen los pasamanos una forma bien definida de modo que usted sepa cuándo llega al final de la escalera?',
            '¿Están las escaleras en buen estado?',
            '¿Están todos los bordes de la escalera bien sujetos y en buen estado?',
            '¿Ha sustituido usted los niveles por rampas y los ha iluminado bien?',
            '¿Es de poca pendiente su escalera?',
            '¿Es ancha como para no tropezar con alguien que suba o baje al mismo tiempo?',
          ]}
        />
        <Paragraph>
          Adaptado de: Clinical Rep. Aging, Vol. 1, No. 5, 1987.
        </Paragraph>

        <Paragraph />
        <Subheading>Y SI NOS CAEMOS... ¿QUÉ HACEMOS?</Subheading>

        <Paragraph>
          Bueno, a veces a pesar de tomar todas las precauciones posibles, nos
          caemos. Si esto ocurre, debemos tratar de no caer de lado, pues de
          esta forma es más posible que tengamos una fractura de cadera. Una vez
          en el piso, no debemos ponernos nerviosos, pues puede ser peor.
        </Paragraph>
        <Paragraph>
          Si estamos en condiciones, debemos virarnos hasta quedar boca abajo, y
          si pudimos hacerlo, y no tiene mucho dolor en alguna de las caderas,
          iremos gateando hasta un asiento fuerte o un mueble cercano y
          agarrándonos de él nos vamos subiendo poco a poco, como escalando,
          hasta que logremos ponernos de pie.
        </Paragraph>
        <Paragraph>
          <Bold>
            Siguiendo estos consejos, disminuiremos la posibilidad de que nos
            caigamos
          </Bold>
          .
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'4-1'}
          question={
            '1. Las caídas en las personas mayores son más frecuentes porque:'
          }
          answers={[
            'El organismo sufre cambios con los años, por ejemplo en la visión y el equilibrio.',
            'Algunas situaciones en las casas o en la calle favorecen las caídas.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'4-2'}
          question={'2. El miedo a volver a caerse:'}
          answers={[
            'Ocurre antes de cualquier caída.',
            'Puede llevar a que las personas dejen de caminar.',
            'Se previene tomando vitamina D.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'4-3'}
          question={'3. Para mejorar el equilibrio la mejor opción es:'}
          answers={[
            'Tomar remedios caseros para los mareos.',
            'Realizar Tai–Chi.',
            'Tratar de virarnos boca abajo cuando nos caemos.',
          ]}
          correct={[1]}
        />

        <MensajesClaves
          messages={[
            'Las caídas en las personas mayores se pueden prevenir.',
            'Es importante tener identificadas las causas más frecuentes de las caídas para evitarlas.',
            'Las causas más frecuentes de las caídas son las de nuestra salud o las de nuestro entorno, entonces hay que cambiarlas cuando sea posible.',
            'Si ha tenido alguna caída sin secuela física que le impida caminar, la solución no es dejar de hacerlo.',
            'Si se da cuenta que por miedo ha dejado de hacer las cosas de antes, o de ir a los lugares que gustaba o ha perdido su confianza en sí mismo; entonces puede tener un Síndrome Postcaída.',
            'Consulte a su médico si ha tenido alguna caída',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('DurmiendoMal')}>
          <Text>{'Estoy durmiendo mal...'}</Text>
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

export default MeCaigo;
