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
          <Bold>L</Bold>os ni??os peque??os se caen casi todos los d??as y no les
          pasa nada, ???rebotan??? en el piso. Pero una ca??da en una persona de edad
          puede marcar un antes y un despu??s en su vida. Tres de cada 10
          personas mayores de 65 a??os que viven en sus casas se caen por lo
          menos una vez al a??o, y de los mayores de 80 a??os la mitad sufren al
          menos una ca??da en ese mismo per??odo de tiempo.
        </Paragraph>
        <Paragraph>
          Las personas mayores tienen m??s riesgo de fracturarse al caerse que
          personas de 30 o 40 a??os, pues la mayor??a tiene una enfermedad llamada
          osteoporosis, que no es m??s que descalcificaci??n de los huesos, y esto
          debilita los huesos haci??ndolos m??s fr??giles. La buena noticia es que
          hay maneras de disminuir las ca??das y la osteoporosis.
        </Paragraph>
        <Paragraph />
        <Subheading>NOS CAEMOS PORQUE...</Subheading>
        <Paragraph>
          Muchas veces las ca??das se producen por un traspi?? o un resbal??n, pero
          hay otros motivos para caernos. Los motivos pueden ser de la propia
          persona o el ambiente que nos rodea.
        </Paragraph>
        <Paragraph>
          Con el paso de los a??os cambia nuestra visi??n, audici??n y se produce
          un aumento de la marcha oscilante. Esta ??ltima puede ser ocasionada
          por mayor lentitud en nuestro tiempo de reacci??n, a trastornos de los
          reflejos de enderezamiento del cuerpo o a disminuci??n de nuestra
          capacidad de reconocer en qu?? posici??n se encuentra nuestro cuerpo
          (recordemos que normalmente, con los ojos cerrados, sabemos si estamos
          sentados o de pie).
        </Paragraph>
        <Paragraph>
          Todos estos cambios aumentan el riesgo de que nos caigamos. Pero
          adem??s, cuando enfermamos tenemos m??s posibilidades de sufrir una
          ca??da, o por la propia enfermedad que nos debilita o por tomar algunas
          medicinas que pueden provocarnos mareos, falta de estabilidad o
          lentitud en nuestras reacciones. Por otro lado, algunos estados
          emocionales como la depresi??n, la ansiedad, la alteraci??n del sue??o
          pueden ocasionar ca??das porque la persona mayor no presta la atenci??n
          necesaria porque est?? triste, alterada o con sue??o. As?? tambi??n
          podemos mencionar que las medicinas para tratar la presi??n alta o las
          que tomamos para dormir con cierta frecuencia predisponen a que nos
          caigamos.
        </Paragraph>
        <Paragraph>
          Pero tambi??n hay situaciones del medio que nos rodea que pueden
          favorecer una ca??da. Por ejemplo en nuestra casa: el piso mojado, un
          juguete de un nieto tirado en el piso, una iluminaci??n inadecuada o
          excesiva, la ausencia de pasamanos en las escaleras, una ba??adera
          resbaladiza, estantes muy altos en la cocina, sobrecamas largas o
          sillas mal colocadas entornos que pueden de diversas formas propiciar
          este tipo de suceso dom??stico.
        </Paragraph>
        <Paragraph>
          Fuera de la casa, las calles o aceras en mal estado, un alumbrado
          p??blico insuficiente o existencia de barreras de accesibilidad al
          transporte p??blico para las personas mayores, representan tambi??n
          algunos de los factores que favorecen una ca??da.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? NOS PUEDE PASAR SI NOS CAEMOS?</Subheading>
        <Paragraph>
          En ocasiones las ca??das producen poco da??o, pero en las personas
          mayores, casi siempre tienen alguna consecuencia. Las fracturas son la
          secuela m??s grave. Inmediatamente despu??s de la ca??da, adem??s de las
          fracturas pueden ocurrir heridas u otras lesiones que necesiten
          hospitalizaci??n, o tambi??n pueden provocar estar un tiempo prolongado
          en el suelo, que a su vez puede llevar a la deshidrataci??n y a{' '}
          <Bold>mayor miedo a volverse a caer</Bold>.
        </Paragraph>
        <Paragraph>
          Tambi??n hay otras consecuencias que aparecen pasadas unas semanas,
          aunque no haya habido fractura; como por ejemplo las de tipo
          psicol??gicas: dependencia para realizar las actividades de todos los
          d??as por miedo a caerse, lo cual hace que caminemos menos tratando de
          evitar una nueva ca??da y estemos mucho m??s tiempo sentados y/o
          acostados para protegernos.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? HACER PARA EVITAR CAERNOS?</Subheading>
        <Paragraph>
          Se recomienda en primera instancia, mejorar nuestras condiciones
          personales as?? como modificar nuestro entorno para as?? disminuir la
          posibilidad de que nos caigamos; a continuaci??n hablaremos de lo que
          podemos hacer para nosotros mismos.
        </Paragraph>
        <Paragraph>
          Debemos, por lo tanto, conservarnos lo m??s saludables posible, por lo
          que es importante consultar al m??dico para tratar de corregir hasta
          donde se puedan, los problemas de la visi??n y la audici??n que tenemos,
          esto nos ayudar?? a mejorar el equilibrio y capacidad de ver, que son
          muy importantes.
        </Paragraph>
        <Paragraph>
          La pr??ctica de ejercicios f??sicos ayuda de muchas formas, pero el
          fortalecimiento de los m??sculos que tienen que ver con la marcha
          (principalmente los de las piernas) mejorar?? notablemente nuestra
          capacidad de evitar una ca??da.
        </Paragraph>
        <Paragraph>
          Los ejercicios pueden ser variados, ir a trotar, asistir a un gimnasio
          o simplemente caminar con zapatos c??modos. Trate de caminar todos los
          d??as unas cuantas cuadras. El trabajo dom??stico cansa mucho, pero no
          es ejercicio para las piernas.
        </Paragraph>
        <Paragraph>
          De particular importancia es la pr??ctica del Tai???Chi, que mejora
          notablemente nuestro equilibrio, algo muy importante para no caernos.
          Todas las personas que puedan, deben practicarlo, si tiene dudas en
          que si puede hacerlo o no, preg??ntele siempre a su m??dico antes de
          comenzarlo.
        </Paragraph>
        <Paragraph>
          Cuando estemos acostados o sentados y nos vayamos a poner de pie,
          debemos hacerlo sin apuro. Si estamos acostados, primero nos sentamos
          y esperamos unos segundos, y despu??s nos paramos, pero permanecemos al
          lado de la cama unos segundos hasta que estemos seguros de poder
          caminar. Esto ??ltimo tambi??n lo hacemos cuando nos levantamos de una
          silla o sill??n. Si el asiento tiene brazos, nos pararemos con m??s
          facilidad. Si presentamos problemas para levantarnos, consulte a su
          m??dico o a un fisioterapeuta.
        </Paragraph>
        <Paragraph>
          Es importante tambi??n fortalecer nuestros huesos tomando suplementos
          de calcio y vitamina D, para lo cual y previa consulta con su m??dico
          le indique la dosis ??ptima.
        </Paragraph>
        <Paragraph>
          Incorporar los ejercicios a su quehacer diario resulta tambi??n muy
          importante para fortalecer nuestros huesos.
        </Paragraph>
        <Paragraph>
          Por otro lado, debemos cuidar de nuestros pies, si podemos visitemos a
          un pod??logo, al menos, una vez al mes, un corte adecuado de las u??as y
          tratamiento oportuno a los callos, favorece buena estabilidad al
          caminar y evita que nos caigamos.
        </Paragraph>
        <Paragraph>
          Debemos usar zapatos c??modos, que ajusten bien al pie y de tac??n bajo.
          Un bast??n o andador puede ayudar, si ya es necesario su uso.
        </Paragraph>
        <Paragraph>
          Tomemos la menor cantidad de medicamentos posibles, solamente los
          indicados por nuestro m??dico. Si aparecen efectos como v??rtigos o
          visi??n borrosa, no deje de consultarlo para que eval??e si se debe
          realizar alg??n cambio o suprimir alg??n medicamento.
        </Paragraph>
        <Paragraph>
          Ahora hablaremos de los arreglos o cuidados que debemos tener con el
          medio que nos rodea para evitar una ca??da. La mayor??a de las ca??das
          son en la casa por lo que debemos revisar bien la disposici??n de los
          muebles, la iluminaci??n, la posici??n de los estantes, las escaleras y
          pensar si debemos hacer algunos cambios.
        </Paragraph>
        <Paragraph>
          A continuaci??n esta tabla nos permitir?? revisar nuestro hogar para
          despu??s decidir si hacemos alg??n cambio, responda las preguntas y
          seg??n sus respuestas, piense si debe transformar algo para disminuir
          el riesgo de que nos caigamos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ESCALA DE EVALUACI??N DE RIESGO DE CA??DAS EN EL HOGAR
        </Subheading>
        <Paragraph />
        <Hr />
        <Text>TAREAS DOM??STICAS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={1}
          questions={[
            '??Limpia las salpicaduras tan pronto como se producen?',
            '??Mantiene limpio y sin obst??culos los suelos y las escaleras?',
            '??Guarda los libros, revistas y material de costura y juguetes de los ni??os tan pronto como acaban de jugar?',
            '??Guarda con frecuencia los objetos usados en estantes accesibles?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>SUELOS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={5}
          questions={[
            '??Procura que todas las alfombras peque??as sean antideslizante?',
            '??Est??n bien fijos los bordes de las alfombras?',
            '??Ha corregido los desniveles del suelo?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>BA??OS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={8}
          questions={[
            '??Usa alfombra o adhesivo antideslizante en la ba??era o en la ducha?',
            '??Tiene pasamanos su ba??o?',
            '??Mantiene el jab??n en una jabonera de f??cil acceso?',
            '??Son de f??cil acceso las toallas u otros objetos de uso en el ba??o?',
            '??Usa cortina en su ba??era para evitar mojar el piso del ba??o?',
            '??Tiene el interruptor del ba??o al lado de la puerta?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>PASILLOS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={14}
          questions={[
            '??Puede cruzar todas las habitaciones y pasar de una a otra sin dar vueltas alrededor de los muebles?',
            '??Est?? libre de obst??culos el camino desde el dormitorio hasta el ba??o?',
            '??Permanecen apartados del camino los cables del tel??fono y de otros aparatos?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>ILUMINACI??N</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={17}
          questions={[
            '??Tiene interruptores cerca de todas las puertas?',
            '??Tiene iluminaci??n suficiente para eliminar las ??reas oscuras?',
            '??Tiene una l??mpara o interruptor al alcance de la cama?',
            '??Tiene luces nocturnas en el cuarto de ba??o y en el pasillo que conduce del dormitorio al ba??o?',
            '??Est??n bien iluminadas las escaleras?',
            '??Tiene interruptor al principio y al final de las escaleras?',
          ]}
        />

        <Paragraph />
        <Hr />
        <Text>ESCALERAS</Text>
        <Hr />
        <QuestionLines
          firstQuestionID={23}
          questions={[
            '??Tiene pasamanos seguros a ambos lados y a todo lo largo?',
            '??Est??n bien separados los pasamanos de las paredes de modo que usted se pueda sujetar bien?',
            '??Tienen los pasamanos una forma bien definida de modo que usted sepa cu??ndo llega al final de la escalera?',
            '??Est??n las escaleras en buen estado?',
            '??Est??n todos los bordes de la escalera bien sujetos y en buen estado?',
            '??Ha sustituido usted los niveles por rampas y los ha iluminado bien?',
            '??Es de poca pendiente su escalera?',
            '??Es ancha como para no tropezar con alguien que suba o baje al mismo tiempo?',
          ]}
        />
        <Paragraph>
          Adaptado de: Clinical Rep. Aging, Vol. 1, No. 5, 1987.
        </Paragraph>

        <Paragraph />
        <Subheading>Y SI NOS CAEMOS... ??QU?? HACEMOS?</Subheading>

        <Paragraph>
          Bueno, a veces a pesar de tomar todas las precauciones posibles, nos
          caemos. Si esto ocurre, debemos tratar de no caer de lado, pues de
          esta forma es m??s posible que tengamos una fractura de cadera. Una vez
          en el piso, no debemos ponernos nerviosos, pues puede ser peor.
        </Paragraph>
        <Paragraph>
          Si estamos en condiciones, debemos virarnos hasta quedar boca abajo, y
          si pudimos hacerlo, y no tiene mucho dolor en alguna de las caderas,
          iremos gateando hasta un asiento fuerte o un mueble cercano y
          agarr??ndonos de ??l nos vamos subiendo poco a poco, como escalando,
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

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'4-1'}
          question={
            '1. Las ca??das en las personas mayores son m??s frecuentes porque:'
          }
          answers={[
            'El organismo sufre cambios con los a??os, por ejemplo en la visi??n y el equilibrio.',
            'Algunas situaciones en las casas o en la calle favorecen las ca??das.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'4-2'}
          question={'2. El miedo a volver a caerse:'}
          answers={[
            'Ocurre antes de cualquier ca??da.',
            'Puede llevar a que las personas dejen de caminar.',
            'Se previene tomando vitamina D.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'4-3'}
          question={'3. Para mejorar el equilibrio la mejor opci??n es:'}
          answers={[
            'Tomar remedios caseros para los mareos.',
            'Realizar Tai???Chi.',
            'Tratar de virarnos boca abajo cuando nos caemos.',
          ]}
          correct={[1]}
        />

        <MensajesClaves
          messages={[
            'Las ca??das en las personas mayores se pueden prevenir.',
            'Es importante tener identificadas las causas m??s frecuentes de las ca??das para evitarlas.',
            'Las causas m??s frecuentes de las ca??das son las de nuestra salud o las de nuestro entorno, entonces hay que cambiarlas cuando sea posible.',
            'Si ha tenido alguna ca??da sin secuela f??sica que le impida caminar, la soluci??n no es dejar de hacerlo.',
            'Si se da cuenta que por miedo ha dejado de hacer las cosas de antes, o de ir a los lugares que gustaba o ha perdido su confianza en s?? mismo; entonces puede tener un S??ndrome Postca??da.',
            'Consulte a su m??dico si ha tenido alguna ca??da',
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
