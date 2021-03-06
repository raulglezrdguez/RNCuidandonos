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
import Fig6a from '../components/Fig6a';
import Fig6b from '../components/Fig6b';

const Alimentarnos = ({navigation}) => {
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
      await AsyncStorage.setItem('@sAlimentarnos', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAlimentarnos');
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
          onPress={() => navigate('DurmiendoMal')}>
          <Text>{'Estoy durmiendo mal...'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>??QU?? ES ALIMENTARNOS SANAMENTE?</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a alimentaci??n es el proceso por el cual consumimos los
          alimentos despu??s de su elaboraci??n. Cuando hablamos de nutrici??n lo
          hacemos sobre el balance que debe haber entre el aporte de nutrientes
          al cuerpo y sus necesidades. Ambas est??n influidas por diversos
          factores sociales:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Soledad y aislamiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Marginaci??n y pobreza.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tabaquismo y alcoholismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Preferencias por alimentos poco sanos.
        </Paragraph>
        <Paragraph>
          Una nutrici??n adecuada comienza en la boca. Si tragamos mal masticados
          los alimentos, puede ocurrir lo que se conoce como mala digesti??n:
          molestias abdominales, v??mitos o diarreas, adem??s de correr el riesgo
          que absorbamos mal los nutrientes que contienen los alimentos.
        </Paragraph>
        <Paragraph>
          Por ello es muy importante tener una buena salud oral, para lo que
          debemos acudir peri??dicamente al dentista; la falta de dientes es
          causa importante de mala nutrici??n.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? SON LOS NUTRIENTES?</Subheading>
        <Paragraph>
          Si tenemos una alimentaci??n con los nutrientes que necesitamos,
          disminuye la probabilidad de que nos enfermemos. El equilibrio se
          logra comiendo lo suficiente de los mejores alimentos, limitando o
          evitando los peores para nuestra salud y tratar de mantener un peso
          adecuado. Los principales nutrientes son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Carbohidratos</Bold>. Deben constituir el mayor porcentaje de la
          energ??a que necesitamos, que se mide en calor??as. Para producir la
          energ??a necesaria para vivir, las c??lulas utilizan la glucosa, que es
          un tipo de carbohidrato. La glucosa que no utilizamos, se transforma
          en otra sustancia que se almacena en el h??gado para cuando sea
          necesaria esa energ??a sobrante. Y si sigue sobrando, ser?? transformada
          en grasa y almacenada, con el consiguiente aumento de peso..
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          No todos los carbohidratos son iguales. Est??n los llamados simples y
          los complejos. El az??car con que endulzamos el caf??, es el mejor
          ejemplo de carbohidrato simple. Los complejos son por ejemplo el pan,
          las galletas y las papas. Mientras m??s simple es el carbohidrato que
          consumimos, su exceso es m??s da??ino.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Existe otro tipo de carbohidrato complejo que se conoce como fibra.
          Son muy saludables, su ingesti??n diaria nos protege de enfermedades
          del coraz??n y de c??ncer de colon. La mayor??a de los vegetales y las
          frutas la contienen, de ah?? la importancia de comer abundantemente
          este tipo de alimento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Prote??nas</Bold>. Ayudan a construir y reparar los tejidos del
          cuerpo, especialmente los m??sculos. Las que m??s conocemos son la de
          origen animal, como las carnes rojas, aves, pescado y los huevos entre
          otros. Pero tambi??n hay vegetales que son fuentes de prote??nas, las
          llamadas prote??nas vegetales, como la soya y todos los frijoles.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Las prote??nas provenientes de las carnes son buenas para el
          mantenimiento y creaci??n de m??sculos, pero generalmente se acompa??an
          de grasa, por lo que comerlas en exceso pudiera ser perjudicial. Las
          m??s sanas desde ese punto de vista son las de aves y los pescados, es
          decir, las llamadas carnes blancas. Al igual que los carbohidratos,
          las prote??nas en exceso se transforman en grasa para ser usadas cuando
          sea necesario. El exceso de prote??nas puede hacernos tambi??n subir de
          peso.
        </Paragraph>
        <Fig6a stroke={colors.text} width={min} height={min} />
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Grasas</Bold>. Son necesarias para mantener el equilibrio de la
          nutrici??n, pero en mucha menor cantidad. Son las que brindan mayor
          cantidad de energ??a. Tambi??n su exceso es almacenado, y su acumulaci??n
          favorece enfermedades del coraz??n.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Existen dos tipos fundamentales: las <Bold>saturadas</Bold> y las{' '}
          <Bold>insaturadas</Bold>. Las primeras son las m??s da??inas. Abundan en
          las carnes rojas, la leche entera y los quesos. Son ejemplos la
          mantequilla y la grasa animal o manteca. Las insaturadas son menos
          da??inas, aunque sus excesos tambi??n son perjudiciales. Los aceite de
          girasol, soya o de oliva son la principal fuente de grasas
          insaturadas. No se ha demostrado que el aceite de oliva sea
          beneficioso para la salud, pero s?? parece ser el menos da??ino.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          ??Han o??do hablar de los ???omega 3???, los ???omega 6???? Pues son ??cidos
          grasos presentes en los pescados de carne azul, como se les dice, y se
          ha demostrado que la ingesti??n de este tipo de pescado de manera
          frecuente protege contra enfermedades del coraz??n. Entonces se pens??
          que, ingerir esos ??cidos grasos en forma de c??psulas, nos proteger??a.
          Despu??s de varios a??os promoviendo esto, los estudios han demostrado
          que comer el pescado es como protegen.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          ??ltimamente se han puesto de moda las llamadas grasas trans. Provienen
          de los aceites vegetales, en los que ocurren ciertos cambios. Son tan
          perjudiciales para el coraz??n como las grasas de origen animal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Vitaminas y minerales</Bold>. Son compuestos necesarios en el
          cuerpo humano. Intervienen en reacciones qu??micas que permiten que las
          hormonas funcionen, movernos y que las c??lulas se reproduzcan, entre
          otras. En general, la principal fuente de vitaminas y minerales son
          los vegetales y las frutas.
        </Paragraph>
        <Paragraph />
        <Subheading>EL AGUA Y LA SAL</Subheading>
        <Paragraph>
          Cuando envejecemos puede disminuir la sensaci??n de sed. Salvo que su
          m??dico se lo indique, tome varios vasos de agua al d??a, aunque no
          tengamos sed, principalmente en verano. Una buena medida de que est??
          tomando la cantidad de agua necesaria es que su orina sea amarilla
          clara. El agua puede ingerirse de diferentes formas, especialmente en
          las sopas, en jugos, en frutas. Tarde en la noche no debe ser el
          momento en que m??s agua tomemos, pues los deseos de orinar nos
          despertar??n frecuentemente y eso podr??a ser causa de insomnio.
        </Paragraph>
        <Paragraph>
          La sal tambi??n es imprescindible para el cuerpo, pero su exceso puede
          acarrearnos problemas de salud, y el principal es la presi??n arterial
          alta.
        </Paragraph>
        <Paragraph>
          Casi todos los alimentos frescos contienen alguna cantidad de sal, y
          los alimentos conservados contienen m??s. Hasta tres cuartas partes de
          una cucharadita de sal es lo que necesitamos diariamente como promedio
          cuando pasamos de los 60 a??os, contando la que ya contienen los
          alimentos de por s??. Evite poner un salero en la mesa o agregarle sal
          a la pizza cuando la compramos en la calle.
        </Paragraph>
        <Paragraph />
        <Subheading>GRASA Y AZ??CAR</Subheading>
        <Paragraph>
          En los ??ltimos 40 a??os, han salido muchos estudios que recomiendan
          comer pocas grasas, y que estas sean preferiblemente aceites
          vegetales, y poco se ha hablado del az??car o los carbohidratos en
          general. ??Y qu?? ha pasado? Pues que hemos ido adquiriendo conciencia
          de que comer mucha grasa puede ser malo, pero no hemos tenido el mismo
          cuidado con los carbohidratos, es decir, el az??car, el pan, los
          dulces... Y como vimos en p??rrafos anteriores, al final todo se
          convierte en grasa.
        </Paragraph>
        <Paragraph>
          El resultado de esto, junto a otros factores, ha sido el aumento de la
          obesidad y la diabetes en las personas. Es decir, si malas puede ser
          el exceso de grasas, igual efecto produce el exceso de carbohidratos.
          La idea es que debemos tener cuidado tanto con unas como con los
          otros.
        </Paragraph>
        <Paragraph />
        <Subheading>ENTONCES... ??QU?? ES UNA COMIDA SALUDABLE?</Subheading>
        <Paragraph>
          Las necesidades de calor??as disminuyen con el paso de los a??os,
          sencillamente porque disminuye nuestra actividad diaria. Comparados a
          cuando ten??amos 25 a??os, a los 65 se necesita el 20 por ciento menos.
        </Paragraph>
        <Paragraph>
          En t??rminos generales, una comida saludable es la que contenga
          carbohidratos, prote??nas y grasas en una proporci??n lo m??s semejante
          posible a la que aparece en el siguiente esquema.
        </Paragraph>
        <Fig6b stroke={colors.text} width={min} height={min} />
        <Paragraph>
          EL balance planteado en el esquema es para personas que no tengan
          alg??n tipo de alimentaci??n especial indicada por su m??dico.
        </Paragraph>
        <Paragraph>
          En resumen, si importante es para nosotros comer saludable, tambi??n lo
          es para nuestros hijos y nietos as?? como para las personas que
          cuidamos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??C??MO DEBE SER UNA BUENA MESA PARA UNA PERSONA MAYOR?
        </Subheading>
        <Paragraph>
          En los peri??dicos, las revistas, la televisi??n, en Internet leemos y
          vemos muchas dietas, qu?? se debe y qu?? no se debe comer, qu?? es
          da??ino, qu?? es saludable. Realmente no existe una dieta ideal.
        </Paragraph>
        <Paragraph>
          Pero si conocemos lo que es saludable y lo que no, de forma general
          podemos establecer determinados patrones de buena alimentaci??n que
          conjugue nuestros gustos con lo saludable.
        </Paragraph>
        <Paragraph>
          La idea es comer menos grasas (principalmente saturadas y grasas
          trans), aumentar la ingesta de vegetales y frutas, poca sal y pocos
          az??cares simples, y siempre combinando todo esto con la actividad
          f??sica.
        </Paragraph>
        <Paragraph>
          ??C??mo podemos hacer esto? Si somos personas mayores, ya tenemos
          establecidos patrones de conducta y si cambiar h??bitos a cualquier
          edad es dif??cil, cuando se es mayor es m??s dif??cil aun, pero no
          imposible, salvo que estemos enfermos.
        </Paragraph>
        <Paragraph>
          Por lo tanto, es posible comenzar a cambiar nuestros patrones de
          alimentaci??n poco a poco en funci??n de una alimentaci??n saludable.
        </Paragraph>
        <Paragraph />
        <Subheading>COMIENDO BIEN Y DE MANERA SANA</Subheading>
        <Paragraph>
          De la infinidad de dietas que andan dando vueltas por ah??, una de las
          que ha demostrado mejores efectos en la salud cardiovascular es la
          conocida como dieta mediterr??nea.
        </Paragraph>
        <Paragraph>
          Esta consiste en ingerir bastante vegetales, frijoles, frutas y
          cereales, comer hasta donde podamos pescado, poca ingesta de grasas
          saturadas (manteca o mantequilla) y preferiblemente aceite, as?? como
          no abusar de la carne roja.
        </Paragraph>
        <Paragraph>
          Esta dieta debemos adaptarla a nuestro tr??pico y nuestras costumbres.
          No queremos decir que es la mejor o no, sino que ha demostrado ser
          buena. Las personas que la han seguido, al cabo de 3 o 4 a??os, han
          tenido menos problemas del coraz??n que con otros tipos de dieta.
        </Paragraph>
        <Paragraph>
          Tratemos hasta donde podamos adaptar esa dieta a nuestro pa??s.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? HAGO CON EL SOBREPESO?</Subheading>
        <Paragraph>
          El sobrepeso en uno de los principales factores que aumentan las
          enfermedades cardiovasculares. Las personas que han sido delgadas la
          mayor parte de su vida, se mantienen generalmente en buen peso cuando
          llegan a la tercera edad. Los que fueron delgados, pero en sus 40
          comenzaron a aumentar un poco, llegan m??s ???pasaditos??? de peso a los 60
          a??os.
        </Paragraph>
        <Paragraph>
          Muchas veces nos quejamos de que comemos poco, y no logramos bajar de
          peso. Lo que pasa es que hemos ido aumentando a raz??n de 1 o 2 libras
          por a??o en los ??ltimos 15 a??os, lo que parece que es poco, pero eso
          hace que ahora pesemos 30 libras de m??s. Y cuando nos damos cuenta,
          comenzamos a comer poco, pero al haber reducido la actividad f??sica,
          por poco que comamos, no logramos bajar, sino que nos mantenemos en el
          mismo peso. Y de ah?? las expresiones ???pero yo casi no como???. Es que
          comemos para mantenernos, y si estamos gordos, nos mantenemos as??.
        </Paragraph>
        <Paragraph>
          Todo se reduce al <Bold>balance de energ??a</Bold>: si ingiero m??s
          calor??as que las que gasto, entonces subo de peso. Las calor??as son
          una forma de contabilizar cu??nta energ??a tiene un alimento. Estos
          datos aparecen en las etiquetas de lo que compramos para comer. Si
          adquirimos el h??bito de revisar las etiquetas, podremos escoger
          mejores alimentos para no subir de peso.
        </Paragraph>
        <Paragraph>
          En resumen, si ingiero la misma cantidad de calor??as que gasto,
          entonces me mantengo en el peso. Y finalmente, si ingiero menos
          calor??as de las que gasto, entonces bajo de peso.
        </Paragraph>
        <Paragraph>
          Es decir, si queremos bajar de peso, debo comer menos de los que
          gasto, y esto se obtiene de tres formas: ingiriendo menos calor??as,
          gastando m??s o una combinaci??n de ambas. Se gasta m??s trav??s del
          ejercicio.
        </Paragraph>
        <Paragraph>
          No es recomendable bajar de peso solamente restringiendo la
          alimentaci??n. El ejercicio f??sico tiene otros beneficios adem??s de
          lograr un balance energ??tico negativo. Sus efectos en el coraz??n,
          cerebro y estado de ??nimo son mucho m??s beneficiosos que los que se
          obtendr??an solo con reducci??n de la ingesta de calor??as.
        </Paragraph>
        <Paragraph>
          Entonces, ??qu?? cantidad debo comer? Todo va a depender de cu??n activos
          f??sicamente seamos. No basta con contar las calor??as, tambi??n debemos
          tener en cuenta los nutrientes de los alimentos. Recordemos que las
          vitaminas y los minerales son tambi??n necesarios. Y la fibra ayuda
          mucho a prevenir enfermedades cardiovasculares, los tumores de colon y
          el estre??imiento, entre otras enfermedades.
        </Paragraph>
        <Paragraph>
          Podemos merendar, eso nos ayudar?? a saciar la sensaci??n de hambre en
          el almuerzo o en la cena. Una porci??n de frutas, yogurt o par de
          galletas son buenas opciones.
        </Paragraph>
        <Paragraph />
        <Subheading>D??NDONOS UN GUSTO</Subheading>
        <Paragraph>
          Todo esto no quiere decir que renunciemos para siempre a nuestros
          gustos. En ocasiones especiales como fiestas, invitaciones a comer o
          un fin de semana, en que podemos ???pasarnos un poquito???, se hace
          necesario seguir varias estrategias que nos permitir??n mantener una
          alimentaci??n sana y a la vez satisfacer nuestros deseos. He aqu??
          algunos ejemplos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Varios d??as antes del ???d??a???, reduzca la ingesta de
          calor??as.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El d??a de la comida, coma antes una merienda saludable
          que le d?? cierta sensaci??n de plenitud, sin sentirse lleno. Eso
          permitir?? que, aunque pruebe de todos los platos, coma menos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Un primer plato o entrante de verduras o frutas nos
          ayudar?? a tener sensaci??n de saciedad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Recuerde siempre que si hace un poco m??s de ejercicios
          f??sicos, podr?? darse mayores gustos, pues se compensa el balance de
          energ??a.
        </Paragraph>
        <Paragraph />
        <Subheading>ALIMENTOS Y ENFERMEDADES</Subheading>
        <Paragraph>
          Una alimentaci??n saludable previene enfermedades. Como hemos visto,
          comer poca grasa, pocos az??cares refinados y mucha fibra, combinado
          con ejercicios f??sicos, protege de enfermedades card??acas, la
          diabetes, el c??ncer de colon y la hipertensi??n arterial, entre otras
          enfermedades.
        </Paragraph>
        <Paragraph>
          Todos debemos comer bajo de sal, pero especialmente los que padecen de
          presi??n alta. Todos debemos comer bajo de grasa, pero especialmente
          los que padecemos o estamos en riesgo de tener enfermedades del
          coraz??n. El jugo de lim??n, algo de vinagre, y algunas especias pueden
          mejorar el sabor de la ensalada con menor consumo de sal.
        </Paragraph>
        <Paragraph>
          A veces guardamos en el refrigerador alimentos por mucho tiempo.
          Seamos muy cuidadosos ante la duda, ech??moslos en la basura.
        </Paragraph>
        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'6-1'}
          question={'1. Es verdad que:'}
          answers={[
            'La falta de dientes puede ser causa de mala nutrici??n.',
            'La comida de la noche se asimila mejor que en el almuerzo.',
            'El Omega 3 en c??psulas o tabletas es tan bueno como comer pescado.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'6-2'}
          question={'2. Sobre algunos nutrientes:'}
          answers={[
            'Si camino todos los d??as, puedo comer frito diariamente.',
            'El exceso de az??car es tan malo como las grasas.',
            'La carne es el alimento que m??s vitaminas aporta.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'6-3'}
          question={'3. La mejor forma de bajar de peso es:'}
          answers={[
            'Comer menos.',
            'Practicar ejercicios f??sicos.',
            'Combinar la dieta y el ejercicio.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'No tener dientes puede llevarnos a estar mal alimentados.',
            'El balance entre carbohidratos, prote??nas y grasas es b??sico para una buena nutrici??n.',
            'Beber bastante agua es bueno para nuestra salud.',
            'El exceso de az??car puede ser tan da??ino como el exceso de grasa.',
            'Las personas mayores por lo general necesitan menos comida que cuando eran j??venes.',
            'La mejor dieta es la que combina comer menos grasas, bastante vegetales y frutas, poca sal y pocos az??cares simples.',
            'El sobrepeso se produce porque ingerimos m??s calor??as que las que gastamos.',
            'Algunos consejos para una buena alimentaci??n pueden ser: evitar las grandes porciones de alimentos, comer abundantes porciones de frutas y vegetales, tomar agua en lugar de refrescos y disfrutar la comida.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Triste')}>
          <Text>{'Estoy triste, pero... ??Estoy deprimido?'}</Text>
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

export default Alimentarnos;
