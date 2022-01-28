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
        <Headline style={styles.bold}>¿QUÉ ES ALIMENTARNOS SANAMENTE?</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a alimentación es el proceso por el cual consumimos los
          alimentos después de su elaboración. Cuando hablamos de nutrición lo
          hacemos sobre el balance que debe haber entre el aporte de nutrientes
          al cuerpo y sus necesidades. Ambas están influidas por diversos
          factores sociales:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Soledad y aislamiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Marginación y pobreza.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tabaquismo y alcoholismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Preferencias por alimentos poco sanos.
        </Paragraph>
        <Paragraph>
          Una nutrición adecuada comienza en la boca. Si tragamos mal masticados
          los alimentos, puede ocurrir lo que se conoce como mala digestión:
          molestias abdominales, vómitos o diarreas, además de correr el riesgo
          que absorbamos mal los nutrientes que contienen los alimentos.
        </Paragraph>
        <Paragraph>
          Por ello es muy importante tener una buena salud oral, para lo que
          debemos acudir periódicamente al dentista; la falta de dientes es
          causa importante de mala nutrición.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ SON LOS NUTRIENTES?</Subheading>
        <Paragraph>
          Si tenemos una alimentación con los nutrientes que necesitamos,
          disminuye la probabilidad de que nos enfermemos. El equilibrio se
          logra comiendo lo suficiente de los mejores alimentos, limitando o
          evitando los peores para nuestra salud y tratar de mantener un peso
          adecuado. Los principales nutrientes son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Carbohidratos</Bold>. Deben constituir el mayor porcentaje de la
          energía que necesitamos, que se mide en calorías. Para producir la
          energía necesaria para vivir, las células utilizan la glucosa, que es
          un tipo de carbohidrato. La glucosa que no utilizamos, se transforma
          en otra sustancia que se almacena en el hígado para cuando sea
          necesaria esa energía sobrante. Y si sigue sobrando, será transformada
          en grasa y almacenada, con el consiguiente aumento de peso..
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          No todos los carbohidratos son iguales. Están los llamados simples y
          los complejos. El azúcar con que endulzamos el café, es el mejor
          ejemplo de carbohidrato simple. Los complejos son por ejemplo el pan,
          las galletas y las papas. Mientras más simple es el carbohidrato que
          consumimos, su exceso es más dañino.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Existe otro tipo de carbohidrato complejo que se conoce como fibra.
          Son muy saludables, su ingestión diaria nos protege de enfermedades
          del corazón y de cáncer de colon. La mayoría de los vegetales y las
          frutas la contienen, de ahí la importancia de comer abundantemente
          este tipo de alimento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Proteínas</Bold>. Ayudan a construir y reparar los tejidos del
          cuerpo, especialmente los músculos. Las que más conocemos son la de
          origen animal, como las carnes rojas, aves, pescado y los huevos entre
          otros. Pero también hay vegetales que son fuentes de proteínas, las
          llamadas proteínas vegetales, como la soya y todos los frijoles.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Las proteínas provenientes de las carnes son buenas para el
          mantenimiento y creación de músculos, pero generalmente se acompañan
          de grasa, por lo que comerlas en exceso pudiera ser perjudicial. Las
          más sanas desde ese punto de vista son las de aves y los pescados, es
          decir, las llamadas carnes blancas. Al igual que los carbohidratos,
          las proteínas en exceso se transforman en grasa para ser usadas cuando
          sea necesario. El exceso de proteínas puede hacernos también subir de
          peso.
        </Paragraph>
        <Fig6a stroke={colors.text} width={min} height={min} />
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Grasas</Bold>. Son necesarias para mantener el equilibrio de la
          nutrición, pero en mucha menor cantidad. Son las que brindan mayor
          cantidad de energía. También su exceso es almacenado, y su acumulación
          favorece enfermedades del corazón.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Existen dos tipos fundamentales: las <Bold>saturadas</Bold> y las{' '}
          <Bold>insaturadas</Bold>. Las primeras son las más dañinas. Abundan en
          las carnes rojas, la leche entera y los quesos. Son ejemplos la
          mantequilla y la grasa animal o manteca. Las insaturadas son menos
          dañinas, aunque sus excesos también son perjudiciales. Los aceite de
          girasol, soya o de oliva son la principal fuente de grasas
          insaturadas. No se ha demostrado que el aceite de oliva sea
          beneficioso para la salud, pero sí parece ser el menos dañino.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          ¿Han oído hablar de los “omega 3”, los “omega 6”? Pues son ácidos
          grasos presentes en los pescados de carne azul, como se les dice, y se
          ha demostrado que la ingestión de este tipo de pescado de manera
          frecuente protege contra enfermedades del corazón. Entonces se pensó
          que, ingerir esos ácidos grasos en forma de cápsulas, nos protegería.
          Después de varios años promoviendo esto, los estudios han demostrado
          que comer el pescado es como protegen.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Últimamente se han puesto de moda las llamadas grasas trans. Provienen
          de los aceites vegetales, en los que ocurren ciertos cambios. Son tan
          perjudiciales para el corazón como las grasas de origen animal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Vitaminas y minerales</Bold>. Son compuestos necesarios en el
          cuerpo humano. Intervienen en reacciones químicas que permiten que las
          hormonas funcionen, movernos y que las células se reproduzcan, entre
          otras. En general, la principal fuente de vitaminas y minerales son
          los vegetales y las frutas.
        </Paragraph>
        <Paragraph />
        <Subheading>EL AGUA Y LA SAL</Subheading>
        <Paragraph>
          Cuando envejecemos puede disminuir la sensación de sed. Salvo que su
          médico se lo indique, tome varios vasos de agua al día, aunque no
          tengamos sed, principalmente en verano. Una buena medida de que está
          tomando la cantidad de agua necesaria es que su orina sea amarilla
          clara. El agua puede ingerirse de diferentes formas, especialmente en
          las sopas, en jugos, en frutas. Tarde en la noche no debe ser el
          momento en que más agua tomemos, pues los deseos de orinar nos
          despertarán frecuentemente y eso podría ser causa de insomnio.
        </Paragraph>
        <Paragraph>
          La sal también es imprescindible para el cuerpo, pero su exceso puede
          acarrearnos problemas de salud, y el principal es la presión arterial
          alta.
        </Paragraph>
        <Paragraph>
          Casi todos los alimentos frescos contienen alguna cantidad de sal, y
          los alimentos conservados contienen más. Hasta tres cuartas partes de
          una cucharadita de sal es lo que necesitamos diariamente como promedio
          cuando pasamos de los 60 años, contando la que ya contienen los
          alimentos de por sí. Evite poner un salero en la mesa o agregarle sal
          a la pizza cuando la compramos en la calle.
        </Paragraph>
        <Paragraph />
        <Subheading>GRASA Y AZÚCAR</Subheading>
        <Paragraph>
          En los últimos 40 años, han salido muchos estudios que recomiendan
          comer pocas grasas, y que estas sean preferiblemente aceites
          vegetales, y poco se ha hablado del azúcar o los carbohidratos en
          general. ¿Y qué ha pasado? Pues que hemos ido adquiriendo conciencia
          de que comer mucha grasa puede ser malo, pero no hemos tenido el mismo
          cuidado con los carbohidratos, es decir, el azúcar, el pan, los
          dulces... Y como vimos en párrafos anteriores, al final todo se
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
        <Subheading>ENTONCES... ¿QUÉ ES UNA COMIDA SALUDABLE?</Subheading>
        <Paragraph>
          Las necesidades de calorías disminuyen con el paso de los años,
          sencillamente porque disminuye nuestra actividad diaria. Comparados a
          cuando teníamos 25 años, a los 65 se necesita el 20 por ciento menos.
        </Paragraph>
        <Paragraph>
          En términos generales, una comida saludable es la que contenga
          carbohidratos, proteínas y grasas en una proporción lo más semejante
          posible a la que aparece en el siguiente esquema.
        </Paragraph>
        <Fig6b stroke={colors.text} width={min} height={min} />
        <Paragraph>
          EL balance planteado en el esquema es para personas que no tengan
          algún tipo de alimentación especial indicada por su médico.
        </Paragraph>
        <Paragraph>
          En resumen, si importante es para nosotros comer saludable, también lo
          es para nuestros hijos y nietos así como para las personas que
          cuidamos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO DEBE SER UNA BUENA MESA PARA UNA PERSONA MAYOR?
        </Subheading>
        <Paragraph>
          En los periódicos, las revistas, la televisión, en Internet leemos y
          vemos muchas dietas, qué se debe y qué no se debe comer, qué es
          dañino, qué es saludable. Realmente no existe una dieta ideal.
        </Paragraph>
        <Paragraph>
          Pero si conocemos lo que es saludable y lo que no, de forma general
          podemos establecer determinados patrones de buena alimentación que
          conjugue nuestros gustos con lo saludable.
        </Paragraph>
        <Paragraph>
          La idea es comer menos grasas (principalmente saturadas y grasas
          trans), aumentar la ingesta de vegetales y frutas, poca sal y pocos
          azúcares simples, y siempre combinando todo esto con la actividad
          física.
        </Paragraph>
        <Paragraph>
          ¿Cómo podemos hacer esto? Si somos personas mayores, ya tenemos
          establecidos patrones de conducta y si cambiar hábitos a cualquier
          edad es difícil, cuando se es mayor es más difícil aun, pero no
          imposible, salvo que estemos enfermos.
        </Paragraph>
        <Paragraph>
          Por lo tanto, es posible comenzar a cambiar nuestros patrones de
          alimentación poco a poco en función de una alimentación saludable.
        </Paragraph>
        <Paragraph />
        <Subheading>COMIENDO BIEN Y DE MANERA SANA</Subheading>
        <Paragraph>
          De la infinidad de dietas que andan dando vueltas por ahí, una de las
          que ha demostrado mejores efectos en la salud cardiovascular es la
          conocida como dieta mediterránea.
        </Paragraph>
        <Paragraph>
          Esta consiste en ingerir bastante vegetales, frijoles, frutas y
          cereales, comer hasta donde podamos pescado, poca ingesta de grasas
          saturadas (manteca o mantequilla) y preferiblemente aceite, así como
          no abusar de la carne roja.
        </Paragraph>
        <Paragraph>
          Esta dieta debemos adaptarla a nuestro trópico y nuestras costumbres.
          No queremos decir que es la mejor o no, sino que ha demostrado ser
          buena. Las personas que la han seguido, al cabo de 3 o 4 años, han
          tenido menos problemas del corazón que con otros tipos de dieta.
        </Paragraph>
        <Paragraph>
          Tratemos hasta donde podamos adaptar esa dieta a nuestro país.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ HAGO CON EL SOBREPESO?</Subheading>
        <Paragraph>
          El sobrepeso en uno de los principales factores que aumentan las
          enfermedades cardiovasculares. Las personas que han sido delgadas la
          mayor parte de su vida, se mantienen generalmente en buen peso cuando
          llegan a la tercera edad. Los que fueron delgados, pero en sus 40
          comenzaron a aumentar un poco, llegan más “pasaditos” de peso a los 60
          años.
        </Paragraph>
        <Paragraph>
          Muchas veces nos quejamos de que comemos poco, y no logramos bajar de
          peso. Lo que pasa es que hemos ido aumentando a razón de 1 o 2 libras
          por año en los últimos 15 años, lo que parece que es poco, pero eso
          hace que ahora pesemos 30 libras de más. Y cuando nos damos cuenta,
          comenzamos a comer poco, pero al haber reducido la actividad física,
          por poco que comamos, no logramos bajar, sino que nos mantenemos en el
          mismo peso. Y de ahí las expresiones “pero yo casi no como”. Es que
          comemos para mantenernos, y si estamos gordos, nos mantenemos así.
        </Paragraph>
        <Paragraph>
          Todo se reduce al <Bold>balance de energía</Bold>: si ingiero más
          calorías que las que gasto, entonces subo de peso. Las calorías son
          una forma de contabilizar cuánta energía tiene un alimento. Estos
          datos aparecen en las etiquetas de lo que compramos para comer. Si
          adquirimos el hábito de revisar las etiquetas, podremos escoger
          mejores alimentos para no subir de peso.
        </Paragraph>
        <Paragraph>
          En resumen, si ingiero la misma cantidad de calorías que gasto,
          entonces me mantengo en el peso. Y finalmente, si ingiero menos
          calorías de las que gasto, entonces bajo de peso.
        </Paragraph>
        <Paragraph>
          Es decir, si queremos bajar de peso, debo comer menos de los que
          gasto, y esto se obtiene de tres formas: ingiriendo menos calorías,
          gastando más o una combinación de ambas. Se gasta más través del
          ejercicio.
        </Paragraph>
        <Paragraph>
          No es recomendable bajar de peso solamente restringiendo la
          alimentación. El ejercicio físico tiene otros beneficios además de
          lograr un balance energético negativo. Sus efectos en el corazón,
          cerebro y estado de ánimo son mucho más beneficiosos que los que se
          obtendrían solo con reducción de la ingesta de calorías.
        </Paragraph>
        <Paragraph>
          Entonces, ¿qué cantidad debo comer? Todo va a depender de cuán activos
          físicamente seamos. No basta con contar las calorías, también debemos
          tener en cuenta los nutrientes de los alimentos. Recordemos que las
          vitaminas y los minerales son también necesarios. Y la fibra ayuda
          mucho a prevenir enfermedades cardiovasculares, los tumores de colon y
          el estreñimiento, entre otras enfermedades.
        </Paragraph>
        <Paragraph>
          Podemos merendar, eso nos ayudará a saciar la sensación de hambre en
          el almuerzo o en la cena. Una porción de frutas, yogurt o par de
          galletas son buenas opciones.
        </Paragraph>
        <Paragraph />
        <Subheading>DÁNDONOS UN GUSTO</Subheading>
        <Paragraph>
          Todo esto no quiere decir que renunciemos para siempre a nuestros
          gustos. En ocasiones especiales como fiestas, invitaciones a comer o
          un fin de semana, en que podemos “pasarnos un poquito”, se hace
          necesario seguir varias estrategias que nos permitirán mantener una
          alimentación sana y a la vez satisfacer nuestros deseos. He aquí
          algunos ejemplos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Varios días antes del “día”, reduzca la ingesta de
          calorías.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El día de la comida, coma antes una merienda saludable
          que le dé cierta sensación de plenitud, sin sentirse lleno. Eso
          permitirá que, aunque pruebe de todos los platos, coma menos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Un primer plato o entrante de verduras o frutas nos
          ayudará a tener sensación de saciedad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Recuerde siempre que si hace un poco más de ejercicios
          físicos, podrá darse mayores gustos, pues se compensa el balance de
          energía.
        </Paragraph>
        <Paragraph />
        <Subheading>ALIMENTOS Y ENFERMEDADES</Subheading>
        <Paragraph>
          Una alimentación saludable previene enfermedades. Como hemos visto,
          comer poca grasa, pocos azúcares refinados y mucha fibra, combinado
          con ejercicios físicos, protege de enfermedades cardíacas, la
          diabetes, el cáncer de colon y la hipertensión arterial, entre otras
          enfermedades.
        </Paragraph>
        <Paragraph>
          Todos debemos comer bajo de sal, pero especialmente los que padecen de
          presión alta. Todos debemos comer bajo de grasa, pero especialmente
          los que padecemos o estamos en riesgo de tener enfermedades del
          corazón. El jugo de limón, algo de vinagre, y algunas especias pueden
          mejorar el sabor de la ensalada con menor consumo de sal.
        </Paragraph>
        <Paragraph>
          A veces guardamos en el refrigerador alimentos por mucho tiempo.
          Seamos muy cuidadosos ante la duda, echémoslos en la basura.
        </Paragraph>
        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'6-1'}
          question={'1. Es verdad que:'}
          answers={[
            'La falta de dientes puede ser causa de mala nutrición.',
            'La comida de la noche se asimila mejor que en el almuerzo.',
            'El Omega 3 en cápsulas o tabletas es tan bueno como comer pescado.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'6-2'}
          question={'2. Sobre algunos nutrientes:'}
          answers={[
            'Si camino todos los días, puedo comer frito diariamente.',
            'El exceso de azúcar es tan malo como las grasas.',
            'La carne es el alimento que más vitaminas aporta.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'6-3'}
          question={'3. La mejor forma de bajar de peso es:'}
          answers={[
            'Comer menos.',
            'Practicar ejercicios físicos.',
            'Combinar la dieta y el ejercicio.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'No tener dientes puede llevarnos a estar mal alimentados.',
            'El balance entre carbohidratos, proteínas y grasas es básico para una buena nutrición.',
            'Beber bastante agua es bueno para nuestra salud.',
            'El exceso de azúcar puede ser tan dañino como el exceso de grasa.',
            'Las personas mayores por lo general necesitan menos comida que cuando eran jóvenes.',
            'La mejor dieta es la que combina comer menos grasas, bastante vegetales y frutas, poca sal y pocos azúcares simples.',
            'El sobrepeso se produce porque ingerimos más calorías que las que gastamos.',
            'Algunos consejos para una buena alimentación pueden ser: evitar las grandes porciones de alimentos, comer abundantes porciones de frutas y vegetales, tomar agua en lugar de refrescos y disfrutar la comida.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Triste')}>
          <Text>{'Estoy triste, pero... ¿Estoy deprimido?'}</Text>
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
