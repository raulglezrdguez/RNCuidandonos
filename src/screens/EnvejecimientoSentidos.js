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
          <Text>{'??C??mo envejece el mundo?...Y nosotros'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          EL ENVEJECIMIENTO DE LOS SENTIDOS
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l cuerpo se modifica con los a??os, a la mayor??a nos
          salen canas, nos vamos encorvando poco a poco, la vista y el o??do no
          son los mismos que cuando ??ramos j??venes, puede que las comidas nos
          sepan diferentes, el sol nos quema un poco m??s la piel... muchos de
          estos cambios ocurren por el{' '}
          <Bold>envejecimiento de los sentidos</Bold>. Para recordar, los
          sentidos son{' '}
          <Bold>la visi??n, la audici??n, el olfato, el tacto y el gusto</Bold>.
        </Paragraph>
        <Paragraph>
          En este cap??tulo haremos referencia principalmente a tres de ellos,
          que son los que m??s nos preocupan casi siempre: la visi??n y la
          audici??n, que nos permiten relacionarnos en nuestras vidas, y
          dejaremos un espacio para los cambios de la piel con el tiempo, a
          trav??s de la cual tenemos el sentido del tacto, aunque tambi??n veremos
          algo del olfato y el gusto.
        </Paragraph>
        <Paragraph>
          Los cambios producidos por el envejecimiento en nuestros sentidos
          pueden hacer que cambiemos en algo nuestra forma de vivir. Estos
          cambios pueden traernos dificultades para disfrutar de momentos de
          esparcimiento. Por estos motivos, puede ser que sintamos cierta
          soledad, ya que a veces porque nos retraemos nosotros mismos o puede
          ser tambi??n por incomprensiones de las personas con las que vivimos o
          nos relacionamos.
        </Paragraph>
        <Fig3 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Los sentidos son los que nos permiten recibir informaci??n del medio
          que nos rodea, y esto nos posibilita poder tener las relaciones que
          normalmente tiene uno en su vida. Para que los sentidos funcionen, es
          necesario que sean estimulados por la luz y los colores (la visi??n),
          las voces, ruidos o m??sica (la audici??n), por el contacto con otra
          persona, objeto o cambio de temperatura (el tacto), por el olor y
          sabor de una rica comida (el olfato y el gusto). Cuando envejecemos,
          necesitamos diferentes est??mulos para que ???sintamos??? a trav??s de
          nuestros sentidos. Esto quiere decir que si las voces son m??s bajas o
          las luces menos intensas, podemos tener dificultades para o??r o ver.
        </Paragraph>
        <Paragraph>
          Debemos distinguir lo que ocurre con el envejecimiento normal y lo que
          es debido a enfermedades. Con el paso de los a??os ocurren cambios que
          son <Bold>normales</Bold>, pero por otro lado, aumenta la posibilidad
          de padecer algunas enfermedades. Es importante destacar que{' '}
          <Bold>ninguna enfermedad es causada por la edad</Bold>.
        </Paragraph>
        <Paragraph>
          Hay una an??cdota que ejemplifica esto de manera graciosa; cuentan que
          una se??ora mayor fue a su m??dico por padecer dolor en una rodilla.
          Despu??s de unas cuantas preguntas y radiograf??as, el doctor le dijo:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ No se preocupe, se??ora, lo que tiene es por la edad
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          Entonces, la anciana, con suspicacia, le pregunta.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ Y si la otra rodilla tiene la misma edad... ??Por qu?? no me duele?
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          Casi siempre, cuando vemos menos u o??mos menos, se debe a una
          enfermedad. Por ellos es importante que visite a su m??dico cuando le
          ocurra algo de esto. No permita que alguien le eche la culpa a los
          a??os.
        </Paragraph>
        <Paragraph />
        <Subheading>EL SENTIDO DE LA VISI??N</Subheading>
        <Paragraph>
          Los ojos cambian con el paso de los a??os. Ellos reaccionan m??s
          lentamente al cambiar de lugares oscuros a lugares iluminados, como
          cuando salimos del cine, y tambi??n pasa lo mismo al rev??s, como cuando
          entramos a los cines. La llamada agudeza visual, que es la capacidad
          de distinguir bien los objetos peque??os o lejanos, disminuye con los
          a??os.
        </Paragraph>
        <Paragraph>
          Las luces que antes toler??bamos bien, ahora se vuelven m??s molestas y
          nos deslumbran. En resumen, la capacidad de adaptaci??n del ojo humano
          a los cambios de luz disminuye con el paso del tiempo. Este
          deslumbramiento puede hacer que las personas mayores que manejan autos
          traten de evitar la noche para manejar.
        </Paragraph>
        <Paragraph>
          Sin mover los ojos, nos damos cuenta de muchas de las cosas que pasan
          a nuestro alrededor. El ??rea que abarcan a ver nuestros ojos sin
          moverlos se conoce como campo visual, y este disminuye con los a??os.
        </Paragraph>
        <Paragraph>
          Por otro lado, normalmente los ojos producen l??grimas, que mantienen
          lubricados los ojos. Las personas mayores pueden tener disminuida la
          producci??n de l??grimas, lo puede provocar cierta resequedad en los
          mismos, situaci??n que puede favorecer la aparici??n de inflamaciones e
          infecciones en ellos.
        </Paragraph>
        <Paragraph>
          Todo lo que hemos visto hasta ahora ocurre normalmente con el
          envejecimiento. Pero con el tiempo, hay algunas enfermedades que son
          m??s frecuentes, y aunque se pueden ver a otras edades, son m??s
          frecuentes con el avance de la edad.
        </Paragraph>
        <Paragraph>
          Las tres enfermedades de los ojos que se padecen con m??s frecuencia
          son las cataratas, el glaucoma y la llamada degeneraci??n macular
          debida a la edad.
        </Paragraph>
        <Subheading>Cataratas</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          El ojo tiene en su interior una especie de lente, que nos ayuda a
          enfocar las cosas que miramos. Este lente se llama cristalino, y con
          los a??os se pueden volver opacos, y no dejan pasar bien la luz. El
          principal s??ntoma que producen las cataratas es que vemos ???nublado???.
        </Paragraph>
        <Subheading>Glaucoma</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Dentro del ojo hay l??quido, y el glaucoma ocurre cuando aumenta la
          presi??n del l??quido dentro del ojo. Lo que se siente cuando tenemos
          glaucoma es dolor ocular, que en algunos casos puede llegar a lo que
          se conoce popularmente como ???punzada de clavo???, y adem??s puede haber
          dificultad para la visi??n.
        </Paragraph>
        <Subheading>Degeneraci??n macular</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Tambi??n puede ocurrir con el paso de los a??os. En el fondo del ojo
          est?? la retina, que es a donde van a parar los rayos de luz que nos
          permiten ver. En la retina la zona m??s importante para tener buena
          visi??n se llama m??cula, y mide solo unos mil??metros. Cuando la m??cula
          se degenera (pierde su funci??n) con la edad, la visi??n central (que es
          lo que vemos en el centro de nuestro campo visual) disminuye y
          comenzamos a ver borroso. El principal s??ntoma es la ceguera central,
          es decir, los objetos que se encuentran en el centro de la vista se
          ven m??s borrosos.
        </Paragraph>
        <Paragraph>
          Estas enfermedades son tratables hoy en d??a, algunas se curan, como
          las cataratas, y otras mejoran o se estabilizan en el tiempo. El uso
          de espejuelos o de l??grimas artificiales ayuda mucho cuando de ver mal
          o de ojos resecos se trata. Pero si comienza a ver menos, siempre
          consulte a su m??dico y expl??quele lo que le sucede.
        </Paragraph>
        <Paragraph />
        <Subheading>LA AUDICI??N</Subheading>
        <Paragraph>
          Los o??dos sirven no solo para o??r, sino tambi??n para mantener el
          equilibrio. Ambas funciones son muy importantes en las personas, pues
          de su mantenimiento depende mucho que podamos caminar, estar de pie o
          levantarnos de la cama sin caernos.
        </Paragraph>
        <Paragraph>
          Con el paso de los a??os, tendemos a o??r menos y a tener problemas con
          el equilibrio, sobre todo cuando cambiamos de posici??n o nos
          desplazamos de un lugar a otro.
        </Paragraph>
        <Paragraph>
          Es normal cierta disminuci??n de nuestra capacidad de o??r o de
          identificar determinados sonidos, pero no es normal ser sordo.
          Normalmente afecta a los dos o??dos, aunque a veces uno m??s que otro.
          Podemos sentir que estamos oyendo menos, pero a veces sucede que nos
          hablan y no podemos entender lo que nos dicen, como si no pudi??ramos
          ???descifrar??? lo que nos est??n diciendo.
        </Paragraph>
        <Paragraph>
          Desde el punto de vista del equilibrio, hay una parte del o??do que
          adem??s de ayudarnos a o??r, nos ayuda a mantener el equilibrio. Puede
          haber, acompa??ando al envejecimiento, una disminuci??n de la velocidad
          de reacci??n del organismo a los cambios de posici??n del cuerpo y esto
          ocurre principalmente cuando estamos acostados o sentados y nos
          paramos, o cuando alguien nos llama desde atr??s y giramos la cabeza.
          Esto puede favorecer las ca??das.
        </Paragraph>
        <Paragraph>
          Adem??s del envejecimiento normal, en ocasiones nos pasa que sentimos
          un ruido ???como si tuviera un grillo dentro del o??do???, es un ruido
          persistente conocido como tinnitus. Puede ser motivado por algunos
          medicamentos que lastiman el o??do o por acumulaci??n de cerumen. Este
          ??ltimo tambi??n puede ser causa de disminuci??n de la audici??n y de
          mareos.
        </Paragraph>
        <Paragraph>
          Cuando notemos que estamos oyendo menos, debemos acudir al m??dico.
          Muchas veces una pr??tesis auditiva o un lavado de o??dos realizado por
          personal sanitario ayuda a o??r mejor. Nunca debemos introducirnos nada
          en los o??dos, pues podemos lastimarnos.
        </Paragraph>
        <Paragraph>
          Cuando nos levantamos de la cama o asiento, si lo hacemos m??s
          lentamente podemos reducir la posibilidad de que nos den mareos. Si
          nos llaman desde atr??s, debemos virar el cuerpo y no la cabeza, eso
          hace que se nos produzcan menos mareos y disminuye el riesgo de
          ca??das.
        </Paragraph>
        <Paragraph />
        <Subheading>LA PIEL Y EL TACTO</Subheading>
        <Paragraph>
          A trav??s del tacto reconocemos las caracter??sticas de los objetos, la
          temperatura, sentimos dolor, percibimos cuando nos acarician y otras
          sensaciones m??s. Con el envejecimiento, estas percepciones pueden
          modificarse. A veces no somos capaces de detectar cuando hay fr??o que
          nos pueda lastimar o calor que nos pueda deshidratar.
        </Paragraph>
        <Paragraph>
          Con los a??os, es m??s frecuente que haya personas con una disminuci??n
          de la capacidad de sentir dolor en la piel. Es por ello que debe
          revisar su piel, principalmente sus pies, para buscar posibles
          lastimaduras que no hayamos sentido. Esto es especialmente importante
          en los diab??ticos. No deje de acudir al m??dico o al pod??logo si
          encuentra alguna.
        </Paragraph>
        <Paragraph>
          De los cambios que ocurren con el paso de los a??os, los que ocurren en
          la piel son los que m??s saltan a la vista: el pelo encanece, el tejido
          de sost??n de la piel cambia con el tiempo y aparecen las arrugas, la
          piel se vuelve m??s laxa y fina, y se producen con mayor frecuencia
          desgarros de ella, que unido a la disminuci??n del dolor, provoca que a
          veces ni nos damos cuenta cuando se nos produce un moret??n por algo
          que rozamos.
        </Paragraph>
        <Paragraph>
          Estos ???morados???, que le llamamos con frecuencia ???fragilidad vascular???,
          se demoran m??s tiempo de repararse en la personas mayores que en las
          personas de menos edad.
        </Paragraph>
        <Paragraph>
          Como mencionamos, las arrugas, son uno de los signos m??s t??picos de
          que estamos envejeciendo. En que aparezcan m??s temprano o m??s tarde,
          lo que m??s influye es <Bold>la exposici??n al sol</Bold> que hayamos
          tenido durante nuestra vida.
        </Paragraph>
        <Paragraph>
          El sol tambi??n es la principal causa de que aparezcan las llamadas
          ???manchas de la edad???, fundamentalmente en las partes del cuerpo m??s
          expuestas al sol, como el dorso de las manos, la cara y la parte alta
          del pecho. Tambi??n pueden aparecer peque??as zonas de superficie
          ??spera, llamada queratosis cut??nea, todo producto del sol.
        </Paragraph>
        <Paragraph>
          Mientras m??s blanca es la piel de las personas, es m??s frecuente que
          aparezcan estos cambios.
        </Paragraph>
        <Paragraph>
          Hay otro grupo de factores que hacen que la piel envejezca m??s r??pido,
          entre los que se pueden mencionar: mala nutrici??n, fumar, alergia y
          algunos medicamentos, entre otros.
        </Paragraph>
        <Paragraph>
          Por otra parte, El sol se ha relacionado con algunos c??nceres de la
          piel, de ah?? la principal importancia que tiene que nos protejamos del
          mismo.
        </Paragraph>
        <Fig4 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Ya que casi todos los cambios que el envejecimiento produce en la piel
          se relacionan con el sol, la protecci??n del mismo es la mejor soluci??n
          preventiva. El uso de cremas protectoras solares, de ropa que proteja
          y de sombreros o gorras, son una buena medida. Si tiene la piel
          reseca, puede usar cremas y lociones que la mantengan bien hidratada.
          Si nota alguna lesi??n nueva o que crece r??pido, no deje de consultar a
          su m??dico.
        </Paragraph>
        <Paragraph />
        <Subheading>EL GUSTO Y EL OLFATO</Subheading>
        <Paragraph>
          No por menos importante, veremos por ??ltimo los cambios que los a??os
          producen en el gusto y en el olfato. Los dos sentidos est??n muy
          relacionados entre s??, ya que la mayor??a de los sabores est??n
          relacionados con determinados olores. Por ejemplo: si tenemos catarro
          con la nariz tupida, nos cuesta trabajo percibir el sabor de los
          alimentos.
        </Paragraph>
        <Paragraph>
          Con el envejecimiento se produce menos saliva, lo que provoca que la
          boca se puede resecar y disminuir el sentido del gusto. El h??bito de
          fumar es el principal factor que produce disminuci??n de la capacidad
          de tomarle el gusto a los alimentos y de oler. A veces algunas
          medicinas o un cambio en la saz??n habitual de las comidas tambi??n lo
          producen. Si nota que puede saborear menos las comidas o identificar
          olores, acuda a su m??dico.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'3-1'}
          question={'1. De las siguientes afirmaciones:'}
          answers={[
            'Los ojos reaccionan m??s lentamente al cambiar de lugares oscuros a lugares iluminados en las personas mayores.',
            'Las personas mayores pueden ver mejor de noche que de d??a.',
            'La visi??n cambia muy poco con la edad.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'3-2'}
          question={'2. Sobre la audici??n:'}
          answers={[
            'Los tapones de cerumen no producen mareos.',
            'Los tapones de cerumen me los puedo quitar en casa con un palillo y algod??n.',
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
            'Algunos tipos de c??ncer.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Si nuestra visi??n empeora, no es por la edad, es por alguna enfermedad.',
            'Si comenzamos a o??r peor, no es por la edad, es por alguna enfermedad.',
            'Cuando hay mucho sol, debemos protegernos los ojos con espejuelos oscuros. Pero CUIDADO cuando entremos en alg??n lugar m??s oscuro, podemos caernos.',
            'O??r y ver bien nos permite mayor contacto social.',
            'El sol fuerte es enemigo de la piel, debemos protegernos de ??l.',
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
