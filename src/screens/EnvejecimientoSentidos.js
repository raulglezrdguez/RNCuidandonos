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
import Italic from '../components/Italic';
import Fig3 from '../components/Fig3';
import Fig4 from '../components/Fig4';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';

const EnvejecimientoSentidos = ({navigation}) => {
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
      await AsyncStorage.setItem('@sSentidos', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSentidos');
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
          onPress={() => navigate('ComoEnvejece')}>
          <Text>{'¿Cómo envejece el mundo?...Y nosotros'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          EL ENVEJECIMIENTO DE LOS SENTIDOS
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l cuerpo se modifica con los años, a la mayoría nos
          salen canas, nos vamos encorvando poco a poco, la vista y el oído no
          son los mismos que cuando éramos jóvenes, puede que las comidas nos
          sepan diferentes, el sol nos quema un poco más la piel... muchos de
          estos cambios ocurren por el{' '}
          <Bold>envejecimiento de los sentidos</Bold>. Para recordar, los
          sentidos son{' '}
          <Bold>la visión, la audición, el olfato, el tacto y el gusto</Bold>.
        </Paragraph>
        <Paragraph>
          En este capítulo haremos referencia principalmente a tres de ellos,
          que son los que más nos preocupan casi siempre: la visión y la
          audición, que nos permiten relacionarnos en nuestras vidas, y
          dejaremos un espacio para los cambios de la piel con el tiempo, a
          través de la cual tenemos el sentido del tacto, aunque también veremos
          algo del olfato y el gusto.
        </Paragraph>
        <Paragraph>
          Los cambios producidos por el envejecimiento en nuestros sentidos
          pueden hacer que cambiemos en algo nuestra forma de vivir. Estos
          cambios pueden traernos dificultades para disfrutar de momentos de
          esparcimiento. Por estos motivos, puede ser que sintamos cierta
          soledad, ya que a veces porque nos retraemos nosotros mismos o puede
          ser también por incomprensiones de las personas con las que vivimos o
          nos relacionamos.
        </Paragraph>
        <Fig3 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Los sentidos son los que nos permiten recibir información del medio
          que nos rodea, y esto nos posibilita poder tener las relaciones que
          normalmente tiene uno en su vida. Para que los sentidos funcionen, es
          necesario que sean estimulados por la luz y los colores (la visión),
          las voces, ruidos o música (la audición), por el contacto con otra
          persona, objeto o cambio de temperatura (el tacto), por el olor y
          sabor de una rica comida (el olfato y el gusto). Cuando envejecemos,
          necesitamos diferentes estímulos para que “sintamos” a través de
          nuestros sentidos. Esto quiere decir que si las voces son más bajas o
          las luces menos intensas, podemos tener dificultades para oír o ver.
        </Paragraph>
        <Paragraph>
          Debemos distinguir lo que ocurre con el envejecimiento normal y lo que
          es debido a enfermedades. Con el paso de los años ocurren cambios que
          son <Bold>normales</Bold>, pero por otro lado, aumenta la posibilidad
          de padecer algunas enfermedades. Es importante destacar que{' '}
          <Bold>ninguna enfermedad es causada por la edad</Bold>.
        </Paragraph>
        <Paragraph>
          Hay una anécdota que ejemplifica esto de manera graciosa; cuentan que
          una señora mayor fue a su médico por padecer dolor en una rodilla.
          Después de unas cuantas preguntas y radiografías, el doctor le dijo:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ No se preocupe, señora, lo que tiene es por la edad
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          Entonces, la anciana, con suspicacia, le pregunta.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ Y si la otra rodilla tiene la misma edad... ¿Por qué no me duele?
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          Casi siempre, cuando vemos menos u oímos menos, se debe a una
          enfermedad. Por ellos es importante que visite a su médico cuando le
          ocurra algo de esto. No permita que alguien le eche la culpa a los
          años.
        </Paragraph>
        <Paragraph />
        <Subheading>EL SENTIDO DE LA VISIÓN</Subheading>
        <Paragraph>
          Los ojos cambian con el paso de los años. Ellos reaccionan más
          lentamente al cambiar de lugares oscuros a lugares iluminados, como
          cuando salimos del cine, y también pasa lo mismo al revés, como cuando
          entramos a los cines. La llamada agudeza visual, que es la capacidad
          de distinguir bien los objetos pequeños o lejanos, disminuye con los
          años.
        </Paragraph>
        <Paragraph>
          Las luces que antes tolerábamos bien, ahora se vuelven más molestas y
          nos deslumbran. En resumen, la capacidad de adaptación del ojo humano
          a los cambios de luz disminuye con el paso del tiempo. Este
          deslumbramiento puede hacer que las personas mayores que manejan autos
          traten de evitar la noche para manejar.
        </Paragraph>
        <Paragraph>
          Sin mover los ojos, nos damos cuenta de muchas de las cosas que pasan
          a nuestro alrededor. El área que abarcan a ver nuestros ojos sin
          moverlos se conoce como campo visual, y este disminuye con los años.
        </Paragraph>
        <Paragraph>
          Por otro lado, normalmente los ojos producen lágrimas, que mantienen
          lubricados los ojos. Las personas mayores pueden tener disminuida la
          producción de lágrimas, lo puede provocar cierta resequedad en los
          mismos, situación que puede favorecer la aparición de inflamaciones e
          infecciones en ellos.
        </Paragraph>
        <Paragraph>
          Todo lo que hemos visto hasta ahora ocurre normalmente con el
          envejecimiento. Pero con el tiempo, hay algunas enfermedades que son
          más frecuentes, y aunque se pueden ver a otras edades, son más
          frecuentes con el avance de la edad.
        </Paragraph>
        <Paragraph>
          Las tres enfermedades de los ojos que se padecen con más frecuencia
          son las cataratas, el glaucoma y la llamada degeneración macular
          debida a la edad.
        </Paragraph>
        <Subheading>Cataratas</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          El ojo tiene en su interior una especie de lente, que nos ayuda a
          enfocar las cosas que miramos. Este lente se llama cristalino, y con
          los años se pueden volver opacos, y no dejan pasar bien la luz. El
          principal síntoma que producen las cataratas es que vemos “nublado”.
        </Paragraph>
        <Subheading>Glaucoma</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Dentro del ojo hay líquido, y el glaucoma ocurre cuando aumenta la
          presión del líquido dentro del ojo. Lo que se siente cuando tenemos
          glaucoma es dolor ocular, que en algunos casos puede llegar a lo que
          se conoce popularmente como “punzada de clavo”, y además puede haber
          dificultad para la visión.
        </Paragraph>
        <Subheading>Degeneración macular</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          También puede ocurrir con el paso de los años. En el fondo del ojo
          está la retina, que es a donde van a parar los rayos de luz que nos
          permiten ver. En la retina la zona más importante para tener buena
          visión se llama mácula, y mide solo unos milímetros. Cuando la mácula
          se degenera (pierde su función) con la edad, la visión central (que es
          lo que vemos en el centro de nuestro campo visual) disminuye y
          comenzamos a ver borroso. El principal síntoma es la ceguera central,
          es decir, los objetos que se encuentran en el centro de la vista se
          ven más borrosos.
        </Paragraph>
        <Paragraph>
          Estas enfermedades son tratables hoy en día, algunas se curan, como
          las cataratas, y otras mejoran o se estabilizan en el tiempo. El uso
          de espejuelos o de lágrimas artificiales ayuda mucho cuando de ver mal
          o de ojos resecos se trata. Pero si comienza a ver menos, siempre
          consulte a su médico y explíquele lo que le sucede.
        </Paragraph>
        <Paragraph />
        <Subheading>LA AUDICIÓN</Subheading>
        <Paragraph>
          Los oídos sirven no solo para oír, sino también para mantener el
          equilibrio. Ambas funciones son muy importantes en las personas, pues
          de su mantenimiento depende mucho que podamos caminar, estar de pie o
          levantarnos de la cama sin caernos.
        </Paragraph>
        <Paragraph>
          Con el paso de los años, tendemos a oír menos y a tener problemas con
          el equilibrio, sobre todo cuando cambiamos de posición o nos
          desplazamos de un lugar a otro.
        </Paragraph>
        <Paragraph>
          Es normal cierta disminución de nuestra capacidad de oír o de
          identificar determinados sonidos, pero no es normal ser sordo.
          Normalmente afecta a los dos oídos, aunque a veces uno más que otro.
          Podemos sentir que estamos oyendo menos, pero a veces sucede que nos
          hablan y no podemos entender lo que nos dicen, como si no pudiéramos
          “descifrar” lo que nos están diciendo.
        </Paragraph>
        <Paragraph>
          Desde el punto de vista del equilibrio, hay una parte del oído que
          además de ayudarnos a oír, nos ayuda a mantener el equilibrio. Puede
          haber, acompañando al envejecimiento, una disminución de la velocidad
          de reacción del organismo a los cambios de posición del cuerpo y esto
          ocurre principalmente cuando estamos acostados o sentados y nos
          paramos, o cuando alguien nos llama desde atrás y giramos la cabeza.
          Esto puede favorecer las caídas.
        </Paragraph>
        <Paragraph>
          Además del envejecimiento normal, en ocasiones nos pasa que sentimos
          un ruido “como si tuviera un grillo dentro del oído”, es un ruido
          persistente conocido como tinnitus. Puede ser motivado por algunos
          medicamentos que lastiman el oído o por acumulación de cerumen. Este
          último también puede ser causa de disminución de la audición y de
          mareos.
        </Paragraph>
        <Paragraph>
          Cuando notemos que estamos oyendo menos, debemos acudir al médico.
          Muchas veces una prótesis auditiva o un lavado de oídos realizado por
          personal sanitario ayuda a oír mejor. Nunca debemos introducirnos nada
          en los oídos, pues podemos lastimarnos.
        </Paragraph>
        <Paragraph>
          Cuando nos levantamos de la cama o asiento, si lo hacemos más
          lentamente podemos reducir la posibilidad de que nos den mareos. Si
          nos llaman desde atrás, debemos virar el cuerpo y no la cabeza, eso
          hace que se nos produzcan menos mareos y disminuye el riesgo de
          caídas.
        </Paragraph>
        <Paragraph />
        <Subheading>LA PIEL Y EL TACTO</Subheading>
        <Paragraph>
          A través del tacto reconocemos las características de los objetos, la
          temperatura, sentimos dolor, percibimos cuando nos acarician y otras
          sensaciones más. Con el envejecimiento, estas percepciones pueden
          modificarse. A veces no somos capaces de detectar cuando hay frío que
          nos pueda lastimar o calor que nos pueda deshidratar.
        </Paragraph>
        <Paragraph>
          Con los años, es más frecuente que haya personas con una disminución
          de la capacidad de sentir dolor en la piel. Es por ello que debe
          revisar su piel, principalmente sus pies, para buscar posibles
          lastimaduras que no hayamos sentido. Esto es especialmente importante
          en los diabéticos. No deje de acudir al médico o al podólogo si
          encuentra alguna.
        </Paragraph>
        <Paragraph>
          De los cambios que ocurren con el paso de los años, los que ocurren en
          la piel son los que más saltan a la vista: el pelo encanece, el tejido
          de sostén de la piel cambia con el tiempo y aparecen las arrugas, la
          piel se vuelve más laxa y fina, y se producen con mayor frecuencia
          desgarros de ella, que unido a la disminución del dolor, provoca que a
          veces ni nos damos cuenta cuando se nos produce un moretón por algo
          que rozamos.
        </Paragraph>
        <Paragraph>
          Estos “morados”, que le llamamos con frecuencia “fragilidad vascular”,
          se demoran más tiempo de repararse en la personas mayores que en las
          personas de menos edad.
        </Paragraph>
        <Paragraph>
          Como mencionamos, las arrugas, son uno de los signos más típicos de
          que estamos envejeciendo. En que aparezcan más temprano o más tarde,
          lo que más influye es <Bold>la exposición al sol</Bold> que hayamos
          tenido durante nuestra vida.
        </Paragraph>
        <Paragraph>
          El sol también es la principal causa de que aparezcan las llamadas
          “manchas de la edad”, fundamentalmente en las partes del cuerpo más
          expuestas al sol, como el dorso de las manos, la cara y la parte alta
          del pecho. También pueden aparecer pequeñas zonas de superficie
          áspera, llamada queratosis cutánea, todo producto del sol.
        </Paragraph>
        <Paragraph>
          Mientras más blanca es la piel de las personas, es más frecuente que
          aparezcan estos cambios.
        </Paragraph>
        <Paragraph>
          Hay otro grupo de factores que hacen que la piel envejezca más rápido,
          entre los que se pueden mencionar: mala nutrición, fumar, alergia y
          algunos medicamentos, entre otros.
        </Paragraph>
        <Paragraph>
          Por otra parte, El sol se ha relacionado con algunos cánceres de la
          piel, de ahí la principal importancia que tiene que nos protejamos del
          mismo.
        </Paragraph>
        <Fig4 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Ya que casi todos los cambios que el envejecimiento produce en la piel
          se relacionan con el sol, la protección del mismo es la mejor solución
          preventiva. El uso de cremas protectoras solares, de ropa que proteja
          y de sombreros o gorras, son una buena medida. Si tiene la piel
          reseca, puede usar cremas y lociones que la mantengan bien hidratada.
          Si nota alguna lesión nueva o que crece rápido, no deje de consultar a
          su médico.
        </Paragraph>
        <Paragraph />
        <Subheading>EL GUSTO Y EL OLFATO</Subheading>
        <Paragraph>
          No por menos importante, veremos por último los cambios que los años
          producen en el gusto y en el olfato. Los dos sentidos están muy
          relacionados entre sí, ya que la mayoría de los sabores están
          relacionados con determinados olores. Por ejemplo: si tenemos catarro
          con la nariz tupida, nos cuesta trabajo percibir el sabor de los
          alimentos.
        </Paragraph>
        <Paragraph>
          Con el envejecimiento se produce menos saliva, lo que provoca que la
          boca se puede resecar y disminuir el sentido del gusto. El hábito de
          fumar es el principal factor que produce disminución de la capacidad
          de tomarle el gusto a los alimentos y de oler. A veces algunas
          medicinas o un cambio en la sazón habitual de las comidas también lo
          producen. Si nota que puede saborear menos las comidas o identificar
          olores, acuda a su médico.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'3-1'}
          question={'1. De las siguientes afirmaciones:'}
          answers={[
            'Los ojos reaccionan más lentamente al cambiar de lugares oscuros a lugares iluminados en las personas mayores.',
            'Las personas mayores pueden ver mejor de noche que de día.',
            'La visión cambia muy poco con la edad.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'3-2'}
          question={'2. Sobre la audición:'}
          answers={[
            'Los tapones de cerumen no producen mareos.',
            'Los tapones de cerumen me los puedo quitar en casa con un palillo y algodón.',
            'Los tapones de cerumen pueden causar sordera.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'3-3'}
          question={'3. El sol en la piel puede acelerar o provocar:'}
          answers={[
            'Arrugas.',
            'Algunos tipos de cáncer.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Si nuestra visión empeora, no es por la edad, es por alguna enfermedad.',
            'Si comenzamos a oír peor, no es por la edad, es por alguna enfermedad.',
            'Cuando hay mucho sol, debemos protegernos los ojos con espejuelos oscuros. Pero CUIDADO cuando entremos en algún lugar más oscuro, podemos caernos.',
            'Oír y ver bien nos permite mayor contacto social.',
            'El sol fuerte es enemigo de la piel, debemos protegernos de él.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('MeCaigo')}>
          <Text>{'Cuidado que si me caigo...'}</Text>
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

export default EnvejecimientoSentidos;
