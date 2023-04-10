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
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';
import Fig30 from '../components/Fig30';

const Saludable = ({navigation}) => {
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
      await AsyncStorage.setItem('@sSaludable', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSaludable');
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
          onPress={() => navigate('Artrosis')}>
          <Text>{'Me duelen las articulaciones ¿Será por artrosis?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>ENVEJECIMIENTO SALUDABLE</Headline>
        <Paragraph>
          Esther Ruiz Bofill / Lourdes de la C. Menéndez Dueñas
        </Paragraph>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a OMS indica distintas maneras prácticas de promover un
          envejecimiento saludable:{' '}
          <Italic>
            Aumentar las expectativas de vida sana promoviendo la salud y
            combatiendo las causas de las enfermedades, concentrándose en un
            cambio de estilo de vida en la tercera edad
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          La familia y el personal que atiende a personas que arriban a la
          mayoría de edad, reconocida como Adultos Mayores deben aplicar formas
          que induzcan a lograr el conocimiento de prácticas que contribuyan a
          asimilar por parte de este grupo poblacional, aspectos que unidos al
          conocimiento del proceso normal de envejecimiento, desarrollen y les
          permita asumir un Proyecto de Vida que los lleve a la utilización de
          todos los modos y estilos de comportamiento que contribuyen a lograr
          plenitud o satisfacción en cada una de las actuaciones de la vida
          diaria individual y colectiva.
        </Paragraph>
        <Paragraph>
          Las personas están viviendo más años en la actualidad, alcanzan los
          80, y en general, la salud de las personas mayores ha mejorado. En la
          mayoría de los países, se considera que el envejecimiento comienza a
          los 60 o 65 años de edad, y entonces una persona mayor o adulto mayor
          es la que tiene esa edad, considerando Viejos-viejos las personas
          mayores a partir de los 75 y llegan hasta 89 años de edad.
        </Paragraph>
        <Paragraph>
          Debemos recordar que el proceso de envejecimiento comienza con cambios
          biológicos y fisiológicos más evidentes al arribar a estas edades y es
          a partir de entonces que debemos acentuar estilos de vida saludable
          que retarden efectos y huellas provocadas por una vida poco ordenada
          que facilita la aparición de efectos adversos que contribuyen a
          acelerar un biológico comportamiento en nuestro estado de salud.
        </Paragraph>
        <Paragraph />
        <Subheading>DESARROLLO</Subheading>
        <Paragraph>
          En Cuba contamos con fortalezas que favorecen lograr un envejecimiento
          saludable y entre ellas están las siguientes:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Voluntad Política del Estado Cubano para mantener la
          salud y educación de la población.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Recursos Humanos Calificados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Nueva Constitución de la República de Cuba.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Descentralización de la ejecución de las acciones con
          participación de Organismos y Organizaciones incluido el Gobierno de
          cada localidad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Programas de Atención Integral en la Comunidad.
        </Paragraph>

        <Paragraph>
          Estas fortalezas influyen en nuestro Reconocimiento a la Obra Social
          que repercuten en el estilo de vida de toda la ciudadanía.
        </Paragraph>
        <Paragraph>
          En cada actividad educativa se potencializa la necesidad e importancia
          de las actividades diarias en la relación individual y colectiva.
          Aprender cómo pasar nuestra vejez mejor, con más salud y así poder
          ayudar y cuidar a nuestros seres queridos.
        </Paragraph>
        <Paragraph>
          En todos estos aspectos debe estar presente que la Ingeniería del
          Detalle aplicada conscientemente influye y tiene mucho que ver con el
          continuo aumento de la esperanza de vida al nacer que es sin duda uno
          de los grandes logros de nuestra sociedad, donde el número de personas
          con 60 años o más supera hoy el 20%.
        </Paragraph>
        <Paragraph>
          Insistir en la necesidad del conocimiento y aplicación del
          “CONTRAPUNTO DE LA VIDA”.
        </Paragraph>
        <Fig30 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>
          CONTINUAR PERSIGUIENDO LOS FINES QUE HAN DADO SENTIDO A SU VIDA
        </Subheading>
        <Paragraph>
          Cada persona desde siempre ha de tener claro qué espera de la vida y
          cómo enfocar como quiere llegar a conseguir lo que tanto ansía.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 1</Bold>. El caso de una enfermera a quien siempre le ha
          gustado su rol y cuando ejerce su desempeño este proceder la hace
          sentir plenitud...
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Ya se ha jubilado o está al hacerlo, entonces debe mantener que en su
          preparación está implícito y tiene la disposición de aplicar un
          proceder de enfermería cuando resulte necesario y siempre que lo haga
          va a sentir satisfacción por la ayuda prestada.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 2</Bold>. Una persona que siempre ha sido profesora y le
          gusta enseñar, puede pensar en repasar la materia que le resulta más
          afín a un pequeño grupo de estudiantes o de forma individual.
        </Paragraph>
        <Paragraph>
          Esto vale para cualquiera de las profesiones u oficios porque cada día
          vemos ancianos que fueron abogados, carpinteros, electricistas como se
          sienten realizados cuando con sus conocimientos pueden ayudar y dar
          solución a situaciones cotidianas que se presentan en su hogar y en
          los centros donde habitualmente asisten.
        </Paragraph>
        <Paragraph />
        <Subheading>
          EL TRABAJO POLÍTICO, SOCIAL, INTELECTUAL O CREADOR
        </Subheading>
        <Paragraph>
          Este aspecto se interrelaciona con el anterior, hacia alguna de estas
          esferas debemos proyectar nuestros conocimientos, de este modo la
          mente se mantendrá en constante movimiento, aportando ideas, modos de
          hacer y cuando menos lo pensemos, creador unas veces de forma directa
          y otras encendiendo en otros el deseo de hacer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 1</Bold>. Todos tenemos ideas y si contamos con los
          conocimientos necesarios podemos aportar nuevas formas de realizar
          algún proceso de trabajo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 2</Bold>. Es posible que tengamos ideas, pero estas no
          están en nuestro radio de acción, entonces podemos intercambiar con
          los involucrados directamente en el tema y aportar nuestro criterio.
        </Paragraph>
        <Paragraph />
        <Subheading>
          MANTENER EL DESVELO A FAVOR DE LOS INDIVIDUOS, LAS CAUSAS Y LAS
          ACTIVIDADES
        </Subheading>
        <Paragraph>
          Esta es una cualidad que distingue a la mayoría de los seres humanos,
          también muy relacionada con los anteriores conceptos explicados,
          mantener el sentido de sensibilidad, apoyo y humanidad ante las
          situaciones que lo requieran en el orden particular y colectivo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 1</Bold>. Cuando somos informados de una necesidad, no
          delegar en la información primaria y transmitir a las instancias
          correspondientes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejemplo 2</Bold>. Si la situación no se resuelve con nuestra
          intervención personal, utilizar entonces los mecanismos y
          procedimientos establecidos para conseguir ayuda y lograr satisfacer
          la necesidad o necesidades de los afectados.
        </Paragraph>
        <Paragraph />
        <Subheading>PROMOVER CAMBIOS ESTILOS DE VIDA</Subheading>
        <Paragraph>
          Orientarlos a Centros Socioculturales de diurnos, al Círculo y Casas
          de Abuelos, con participación activa, incluidas Filiales de las
          Cátedras Universitarias, Gero-clubs de computación, Viviendas
          protegidas, Centros Integrales de Atención Diurna entre otros.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Crear ambientes adecuados para los adultos mayores
          haciendo referencia a transporte, infraestructuras, contaminación,
          espacios públicos y servicios.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mejorar los servicios sanitarios y de asistencia social
          gracias a una mejor coordinación de los cuidados, eliminando las
          diferencias entre los asistentes sanitarios y aumentando la
          sostenibilidad de los fondos públicos.
        </Paragraph>
        <Paragraph />
        <Subheading>OTRAS SUGERENCIAS</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Incrementar la edad de la jubilación y la participación
          al mercado laboral hasta un 75%.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Los adultos mayores con discapacidad intelectiva deben
          enfrentar una serie de temas y desafíos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>1. </Bold>Envejecer al mismo ritmo de la población. Pueden tener
          una expectativa de vida ligeramente inferior con respecto a la
          población en general y esto relacionado con sus condiciones
          específicas (por ejemplo: personas con Síndrome de Down presentan una
          expectativa de vida más baja), pero se instruyen y logran ejercer
          algún tipo de desempeño, como los Jóvenes con Discapacidad
          Intelectual.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>2. </Bold>Presentan factores de riesgo más altos asociados a
          enfermedades y en especial a los estilos de vida, como el ejercicio
          físico, la dieta y el estatus socio–económico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>3. </Bold>Tienen una taza alta de disturbios psicológicos
          relacionados principalmente a un mayor porcentaje de incidencia de la
          enfermedad de Alzheimer entre las personas con Síndrome de Down.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>4. </Bold>Podrían tener menor posibilidad de ser empleados o
          asistidos en centros diurnos con respecto a sus semejantes más
          jóvenes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>5. </Bold>Podrían tener menos apoyos y redes de contacto
          informales, menos sólidas con respecto a sus semejantes más jóvenes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>6. </Bold>El personal espera que tengan un porcentaje de
          crecimiento, desarrollo y adquisición de habilidades y mayores niveles
          de dependencia con respecto a sus semejantes más jóvenes.
        </Paragraph>
        <Paragraph />
        <Subheading>
          LOGRAR VIVIR LARGO TIEMPO Y APRENDER A HACERNOS VIEJOS
        </Subheading>
        <Paragraph>
          Los que tienen clase y no se valoran por lo que fueron sino por lo que
          son. Para ello debemos eliminar los complejos, no desear ser o
          aparentar ser jóvenes cuando ya esta etapa de la vida pasó.
        </Paragraph>
        <Paragraph>
          Entonces lograremos ser adecuados en la forma de conducirnos, en el
          vestir y la forma de interactuar con los demás.
        </Paragraph>
        <Paragraph>
          Los que tienen la capacidad de realizar actividades que hacen los
          jóvenes: bailar, viajar, amar, comer, trabajar... ¡realizarlas!
        </Paragraph>
        <Paragraph>
          Estas son capacidades que no debemos perder brindando nuestro aporte
          en la medida de las posibilidades, participar en paseos, excursiones,
          encuentros. Amar, no solo a nuestra pareja sino a familiares y
          amistades, alimentarnos con dietas balanceadas para lograr un buen
          estado de salud.
        </Paragraph>
        <Paragraph>
          Continuar la vejez dentro de una perspectiva de desarrollo en las que
          se cumplen determinadas tareas de la vida como en otras etapas desde
          la infancia hasta el final de nuestros días.
        </Paragraph>
        <Paragraph />
        <Subheading>ALIMENTACIÓN Y EJERCICIOS</Subheading>
        <Paragraph>
          Protejámonos comiendo una dieta saludable cumpliendo recomendaciones
          universales:
        </Paragraph>
        <Paragraph>
          Coma poca grasa, preferiblemente aceite y no más de una vez por
          semana. Cocinar a la plancha, gastar pocos azúcares. Disminuya la
          cantidad de dulces y bebidas azucaradas. Coma mucha fibra dietética,
          muchos vegetales, evite el consumo excesivo de sal y tome bastante
          agua, (no espere tener sed para tomar agua). Consuma carnes con poco
          contenido de grasa. Los huevos y los frijoles también son fuentes
          sanas de proteínas. Teniendo en cuenta aspectos como los de ingerir
          una dieta saludable.
        </Paragraph>
        <Paragraph>
          Relacionado con ejercicios físicos se han hecho estudios que
          demuestran que también caminar al menos 20 minutos al día mejora la
          presión arterial y los niveles de azúcar en sangre, dejar de ver
          televisión por 20 minutos y caminar por su barrio o montar bicicleta
          cuatro o cinco días a la semana, realizar ejercicios de estiramiento
          muscular como Tai–Chi.
        </Paragraph>
        <Paragraph />
        <Subheading>CORRESPONSABILIDAD</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Establecer la conciliación con el Adulto Mayor y su
          Familia.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Involucrar y Conciliación con los factores de la
          comunidad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trabajar en la recuperación de habilidades y del
          talento.
        </Paragraph>
        <Subheading>Garantizar la atención al cuidador:</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Entrenamiento en el manejo en las diferentes etapas del
          envejecimiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Facilitarle herramientas para manejar las crisis del
          anciano.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Orientar la posibilidad de atención en Centros de
          Respiro y facilidades para aliviar la atención que le brindan al
          anciano.
        </Paragraph>
        <Subheading>En los institucionalizados</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Estimular el sentido de pertenencia de los abuelos
          hacia la institución.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Velar por la garantía la igualdad de oportunidades
          entre mujeres y hombres.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Velar por el fortalecimiento de la convivencia
          personal–familiar y colectiva en el centro diurno y los internos.
        </Paragraph>

        <Subheading>PROYECTO DE VIDA</Subheading>
        <Paragraph>
          En el ciclo de nuestras vidas resulta lógico que a partir que surge en
          la pareja la idea de tener un hijo todos dirigen su atención y
          cuidados a lograr un embarazo saludable para que al nacer, contemos
          con un bebé sano, así continúan los cuidados especialmente de los
          padres y durante esta etapa y todas las subsiguientes del desarrollo a
          la adolescencia, juventud, adultez, hasta llegar a la vejez donde
          normalmente se debe invertir la atención, donde este, ahora, Adulto
          Mayor debe contar con el cuidado que brindó a ese hijo en
          reciprocidad.
        </Paragraph>
        <Paragraph>
          A partir de este momento debemos concientizar que{' '}
          <Italic>
            “el bienestar del anciano depende del bienestar de sus cuidadores”
          </Italic>
          .
        </Paragraph>
        <Paragraph>
          Los cuidadores para aliviar la carga de trabajo requieren facilidades
          que benefician al anciano y relajarán las actividades a desarrollar.
        </Paragraph>
        <Paragraph>
          <Bold>Para el anciano</Bold>:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Proporcionar ambiente físico y emocional que permita el
          desarrollo de una vida lo más autónoma posible y mantener las
          relaciones sociales.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Suprimir donde sea posible, barreras arquitectónicas
          tanto exteriores como interiores que facilite la movilidad y
          accesibilidad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Garantizar la seguridad, convivencia y funcionabilidad
          en su habitación y espacios del hogar manteniendo una adecuada
          iluminación.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Estimular su integración social e inducir el uso
          preventivo del bastón y otras ayudas técnicas que prevengan caídas.
        </Paragraph>
        <Subheading>El cuidador</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Transmitir al anciano todos los aspectos que pueden
          hacer la vida más agradable y de algún modo insertarlo en su Proyecto
          de Vida en el que necesariamente tienen que existir espacios de
          RESPIRO para ambos, evitando la “carga del cuidador”.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Identificar instituciones que acogen de forma temporal
          al anciano.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Planificar vacaciones con período de descanso y el
          apoyo de familiares y amigos.
        </Paragraph>
        <Subheading>Compartido con el anciano</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Planificar paseos en los que incluye al anciano en
          silla de ruedas a lugares cercanos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Visitar museos y disfrutar de espectáculos callejeros.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si cuenta con posibilidades económicas excursiones y
          otros lugares de recreación si no se trata de encamados.
        </Paragraph>
        <Subheading>Instituciones</Subheading>
        <Paragraph>
          Considerar el apoyo diurno en Casa de Abuelos, Centro Sociocultural y
          Centro Integral Diurno.
        </Paragraph>
        <Paragraph>
          El proyecto de vida es un plan trazado, un esquema vital que encaja en
          el orden de prioridades, valores y expectativas de una persona que
          como dueña de su destino decide cómo quiere vivir.
        </Paragraph>
        <Paragraph>
          Debe tener presente al pensar en los mismos aspectos como los
          siguientes:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Dígase cosas enaltecedoras y positivas. Elógiese cuando
          usted se elogia, eleva su espíritu. Ejemplo: soy buena persona, me
          gusta ayudar a los demás, soy inteligente ...
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Aborde la vida con valor y optimismo. Todos tenemos
          momentos en que no todo resulta como deseamos y es entonces que
          debemos plantearnos alternativas que nos permitan lograr otros
          resultados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trátese con paciencia, con cariño y con amabilidad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No podemos ser hiperautocríticos ante proyecciones
          personales conocidas, tener paciencia para llegar a la convicción.
          Reflexionar con auto respeto.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Colme de afecto a su psiquismo y a su espíritu.
          Relájese.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Ante situaciones estresantes, auto- proponerse descanso
          necesario física y mentalmente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Apóyese en los demás.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Evite la autosuficiencia y reconozca las virtudes de
          sus compañeros y colegas en el colectivo, vecindario o institución
          donde desarrolla sus actividades.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No se castigue por sus rasgos negativos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Con los rasgos negativos solo reconózcalos y trate de
          moderarlos conociendo el efecto nocivo que puede despertar entre
          quienes le rodean.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Coma para vivir, no viva para comer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Conocemos que el exceso de ingestión de medicamentos
          lleva a la obesidad y nos hace más susceptibles a enfermedades
          crónicas. Comer solo lo necesario es una buena fórmula para la salud.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Aprenda a perdonar desde el corazón.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Guardar rencores no solo nos aleja de personas valiosas
          y queridas, sino que conspira contra nuestra salud. Teniendo esto
          presente nos resultará más factible superar esta situación.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Practique el amor incondicional.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El amor es un bello sentimiento que constituye una
          práctica internacional y debe ser recíproco cuando lo brindamos con
          sinceridad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tener en cuenta los aspectos generales de su conducta
          (religiosa, intelectual, social o familiar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Pensar en cómo está tu vida, qué quiere cambiar y a
          dónde quiere llegar a partir de ahora.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Este proyecto de preferencia debe estar por escrito, de
          ser posible consultado con su familiar o amistad más querida y en
          forma razonable dejar planteado sus deseos hasta la etapa final de la
          vida.
        </Paragraph>
        <Paragraph>Existen otras RECOMENDACIONES PARA LA ACCIÓN.</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>a) </Bold>Deberá informarse a la población en general acerca de
          su trato con las personas de edad que necesitan cuidados. Deberá
          educarse a las propias personas de edad en el cuidado de sí mismas.
          Especialmente a los niños (para que crezcan con el sentimiento de
          afectividad hacia los ancianos).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>b) </Bold>Deberá impartirse a quienes trabajan con personas de
          edad, en el hogar o en instituciones, capacitación básica para sus
          tareas, destacando en particular la importancia de la participación de
          las personas de edad y de sus familias y la colaboración entre quienes
          trabajan en las esferas de la salud y del bienestar en los diversos
          niveles.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>c) </Bold>Deberá capacitarse a los médicos y a los estudiantes
          de profesiones que tienen a su cargo el cuidado de seres humanos (por
          ejemplo, medicina, enfermería, asistencia social, etc.) en los
          principios y las aptitudes pertinentes en las áreas de gerontología,
          geriatría, psicogeriatría y cuidado de personas de edad.
        </Paragraph>
        <Paragraph>
          Está en nuestras manos aliviar o más bien nivelar y encontrar un
          equilibrio entre el aspecto económico y las crecientes necesidades que
          a partir de esta verdad estamos viviendo y van en ascenso y resulta de
          proyectos como “Hacia un modelo de Gestión Sostenible... donde Podemos
          lograr más si continuamos, “compartiendo caminos”.
        </Paragraph>
        <Paragraph>
          A lo largo de nuestras vidas hemos visto como grandes hombres longevos
          que han llegado a ser personalidades por su contribución al desarrollo
          de la humanidad y esto ha devenido en pensamientos como el de nuestro
          Héroe Nacional:
        </Paragraph>
        <Paragraph>
          <Italic>
            “Las Grandes Personalidades son como cimientos en que se afirman los
            pueblos”
          </Italic>
        </Paragraph>
        <Paragraph>José Martí</Paragraph>
        <Paragraph />
        <Subheading>AUTOESTUDIO</Subheading>
        <Paragraph>
          ¿Qué puede hacerse para ayudar a mejorar su situación y cambiar la
          ruta ante posibles obstáculos?
        </Paragraph>
        <Paragraph>
          ¿Tenía con anterioridad un Plan con deseos y aspiraciones?
        </Paragraph>
        <Paragraph>
          ¿Qué piensa de los servicios de salud y su influencia para mejorar su
          calidad de vida?
        </Paragraph>
        <Paragraph>
          ¿En su Municipio cuantos lugares de esparcimiento conoce y participa?
        </Paragraph>
        <Paragraph>
          ¿Qué aspectos de autocuidado puede identificar en esta publicación?
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'27-1'}
          question={'1. Dentro de las bases para una buena salud están:'}
          answers={['Una dieta saludable.', 'Fumar poco.']}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'27-2'}
          question={'2. Sobre los ejercicios físicos:'}
          answers={[
            'Caminar, aunque sea poco es bueno para la salud.',
            'Si no camino todos los días no me hace buen efecto en la salud.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'27-3'}
          question={'3. Si cuidamos a otra persona:'}
          answers={[
            'Compartir el cuidado con otra persona nos alivia.',
            'Tener un confidente que nos oiga es bueno para nosotros como cuidadores.',
          ]}
          correct={[0, 1]}
        />

        <MensajesClaves
          messages={[
            'La capacidad intrínseca es la combinación de todas las capacidades físicas y mentales que tenemos para utilizarlas en un determinado momento.',
            'La capacidad funcional es la relación entre nosotros y el entorno en el que vivimos.',
            'El envejecimiento saludable es el proceso de desarrollar y mantener la capacidad funcional que permite el bienestar en la vejez.',
            'Comenzar a tener hábitos saludables, aunque seamos mayores, es bueno para nuestra salud.',
          ]}
        />

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

export default Saludable;
