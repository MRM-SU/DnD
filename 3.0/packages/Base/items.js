import { Item } from '../../main.js';

export const ITEMS = [
  new Item(
    "Espada básica",
      "ARMA",
      "PASIVA",
      1,
      "Una espada algo desgastada pero que puede llegar a hacer mucho daño",
      "+D10DMG en ataques normales mientras esté equipado"
  ),
  new Item(
    "Cuchilla",
    "ARMA",
    "PASIVA",
    1,
    "Una especie de metal afilado con un mango de madera que parece inútil",
    "En cada turno de ataque normal, se tirará un D4, si este saca 4, el oponente será paralizado"
  ),
  new Item(
    "Daga",
    "ARMA",
    "ACTIVABLE",
    2,
    "Un cilindro de metal muy afilado con una punta muy puntiaguda y un mango con un final en círculo, ideal para manejar ligeramente",
    "Al usarla, se elegirá a un enemigo, este recibirá 2D20DMG y el turno terminará. En otros turnos, cualquier jugador puede gastar su turno para recuperar la daga y hacer 3D20DMG, de forma alternativa, el propio enemigo puede quitarse la daga (en caso de IA, al tener turno de uso de objeto). Este se quedará el objeto y recibirá solo D20DMG."
  ),
  new Item(
    "Alabarda",
    "ARMA",
    "PASIVA",
    2,
    "Un hacha grande con una punta de lanza, está algo desgastada, pero parece muy peligrosa y afilada",
    "+15DMG en ataques normales mientras esté equipado, si se elabora un ataque crítico, el daño total recibe un bonus x1.5"
  ),
  new Item(
    "Libro de los espíritus",
    "MAGIA",
    "ACTIVABLE",
    5,
    "Un libro extraño con unas páginas antiguas desgastadas enborronadas de tinta, algunas tienen figuras perturbadoras",
    "Al seleccionarlo, se activarán 2 opciones: Si arrancas las páginas: Provocarás D10DMG por cada espíritu encerrado. Si abres una página vacía, si hay un alma errante, su espíritu se quedará encerrado ahí (se pueden equipar hasta 30 almas)",
    1
  ),
  new Item(
    "Kimono",
    "ARMADURA",
    "PASIVA",
    4,
    "Es un kimono blanco con un estampado azul-rosáceo en la parte trasera, tiene un cinturón negro del mismo material",
    "Al hacer un ataque físico crítico, tendrás un turno extra con un 75%"
  ),
  new Item(
    "Hachimaki",
    "ARMADURA",
    "PASIVA",
    5,
    "Una cinta blanca con letras extrañas negras y un punto rojo en el centro",
    "Al hacer un ataque físico, tirarás 3 D6, y harás tantos turnos de ataque físico como el mínimo de los dados",
    1
  ),
  new Item(
    "Abanico de tifón",
    "ARMA",
    "ACTIVABLE",
    3,
    "Es un abanico de bambú con una tela extraña, parece estar medio roto, puede que se rompa",
    "Deshabilita el turno de un enemigo con una probabilidad del 40% (6 o más en un D10), terminas el turno. Pase lo que pase pierdes 1 uso del abanico; este empieza con 10 usos, al llegar a 0, el abanico se rompe",
  ),
  new Item(
    "Dados del diablo",
    "MAGIA",
    "PASIVA",
    5,
    "Son 3 D6 (aunque parecen transformarse al dado que quieras, y se pueden multiplicar entre ellos), al agitarlos o tirarlos, se ponen en llamas. El número más alto tiene un pentagrama.",
    "Para todas las tiradas normales: se convierten en tiradas con ventaja, pero si en cualquier tirada del juego que incluya más de 2 dados sacas el máximo en todos los dados, pierdes el turno y recibes 666DMG",
    1
  ),
  new Item(
    "Santo grial",
    "CONSUMIBLE",
    "CONSUMIBLE",
    5,
    "Es una copa de madera con detalles de oro puro, tiene agua en su interior, parece brillar con un aura dorada",
    "Una vez bebas, el objeto se te equipara (sin tener la posibilidad de quitártelo), todos los en el inventario y equipados serán eliminados eternamente, tus habilidades quedarán deshabilitadas para siempre; +3D100DMG, -80%HP, si quien ha bebido muere, el objeto se destruye",
    1
  ),
  new Item(
    "Anillo dorado",
    "ARMADURA",
    "ACTIVABLE",
    3,
    "Es un anillo de plata con muchos detalles de oro y un trozo de oro bruto con forma de diamante, en el interior del anillo se lee borado: \"Pago en cuotas\"",
    "El anillo se puede activar/desactivar. Este cargará hasta 750DMG, al cargar daño, en tu turno puedes recibir la cantidad que quieras (no pierdes el turno), si excedes el daño recibido mientras está activado, se romperá, quedarás aturdido por un turno y recibirás todo el daño acumulado, igualmente recibirás el daño si aún te queda algo acumulado al final de la pelea. NOTA: los escudos y otras protecciones solo afectan cuando el daño se acumula en el anillo, después recibirás el daño completo."
  ),
  new Item(
    "Colmillos vampíricos",
    "ARMADURA",
    "PASIVA",
    2,
    "Son unos colmillos que se colocan en los dientes, absorven la vitalidad del enemigo y la convierten en vida",
    "En los ataques físicos, recibes un 10% del daño total inflingido"
  ),
  new Item(
    "Sombrero de hechicero",
    "ARMADURA",
    "PASIVA",
    "3",
    "Un sombrero azul-oscuro/morado con estrellas y un aura extraña",
    "Recibes +1 extra de maná por turno", 
  ),
  new Item(
    "Orbe paralela",
    "MAGIA",
    "PASIVA",
    "2",
    "Un orbe con un poder oculto extraño, parece tener mucha energía en su interior",
    "Si haces instakill a un enemigo, recibes la mitad de su vida completa",
      
  ),
  new Item(
    "Espada de la realeza",
    "ARMA",
    "PASIVA",
    "3",
    "Una espada dorada con perlas y piedras preciosas, se dice que perteneció a un rey con un gran corazón que conmovió a sus ciudadanos hasta el final de los tiempos",
    "Al elaborar un ataque crítico, un aldeano aparece como espíritu, y elabora 3D20DMG",
      
  ),
  new Item(
    "Sangijuela",
    "CONSUMIBLE",
    "CONSUMIBLE",
    "2",
    "Un pequeño parásito que se alimenta de sangre",
    "Al usarlo, se le pegará a un enemigo, por cada turno de ataque normal, ese enemigo perderá 10HP y tú recibirás esos 10HP (se puede usar con aliados también)",
  ),
  new Item(
    "Baraja de tarot",
    "MAGIA",
    "CONSUMIBLE",
    3,
    "Una carta brillante, tiene detalles dorados, un sol dorado y una luna morada, puedes revelar una carta, pero eso está en tu responsabilidad...",
    "Sacarás una carta, el resto se desvanecerá en un polvo y esparcido en el viento. Tendrás un efecto aleatorio, puedes cancelar el efecto eliminando un objeto de tier 4 o 5. Tras el uso, la carta se quemará mágicamente.\n\n0 - The Fool: Teletranspórtate a un lugar aleatorio\nI - The Magician: Tus ataques no podrán fallar este turno\nII - The High Priestess: x2 a tus habilidades este turno\nIII - The Empress: Ejecuta una de tus habilidades sin necesidad de gastar maná\nIV - The Emperor: Inflinge tu daño máximo\nV - The Hierophant: Aleatoriamente, uno de tus objetos se encanta y hace x2 de efecto hasta moverse del lugar o terminar la pelea\nVI - The Lovers: Enamora a cualquier enemigo no-jefe con otro enemigo no-jefe o aliado y cuando cualquiera de los dos muera, el otro lo hará también\nVII - The Chariot: Duplica todos los efectos del turno\nVIII - Justice: Todos los enemigos no-jefes tendrán la misma vida que el enemigo con menor vida\nIX - The Hermit: No recibiras daño el próximo turno\nX - Wheel of Fortune: Los efectos del turno se multiplicarán por un D10 - 5\nXI - Strength: Haz el doble de daño este turno\nXII - The Hanged Man: Sacrifica un aliado y haz el doble de tu máximo daño\nXIII - Death: Si aparece un 4 en un D4, un enemigo no-jefe aleatorio muere\nXIV - Temperance: Adivina la próxima acción del enemigo que quieras. Todos tus aliados la esquivarán\nXV - The Devil: Tira un D100, tú recibirás un 50% y un enemigo no-jefe aleatorio recibirá el 100%\nXVI - The Tower: Recibe D100 * D4 con desventaja de daño, si quemas esta carta, tira un D10, si sale un 1, el efecto es permanente\nXVII - The Stars: Todos los enemigos fallarán su acción en la siguiente ronda\nXVIII - The Moon: Recibe de vida cuanto daño inflingas incluso si supera el límite\nXIX - The Sun: Recupera toda tu vida\nXX - Judgement: Obtén una vida extra para la batalla\nXXI - The World: Haz instakill al enemigo no-jefe que quieras",
  ),
  new Item(
    "Arco de madera",
    "ARMA",
    "ACTIVABLE",
    2,
    "Un arco, parece que tiene una reserva de flechas muy alta, pero está algo gastado, podría romperse.",
    "Harás un ataque físico, (las mejoras de ataque físico  no funcionarán) y perderás tuno tras el uso. El daño que causarás es D20 + D10. Cada uso, tirarás un D20, si sacas un 1, el arco se romperá.",
  ),
  new Item(
    "Ballesta",
    "ARMA",
    "ACTIVABLE",
    3,
    "Una ballesta muy bien cuidada, parece eestar de hierro macizo, y parece que tiene una reserva de flechas suficiente para semanas.",
    "Puedes gastar tu turno para recargar la ballesta, en el turno siguiente, dispararás la flecha (evitando las mejoras de ataques físicos), causando 3D20, y podrás continuar el turno.",
  ),
  new Item(
    "Cadenas del averno",
    "MAGIA",
    "CONSUMIBLE",
    3,
    "Unas cadenas mágicas con cráneos de dragones bebé que parecen ladrar cuando no las miras, tienen detalles rojizos y un aura extraña.",
    "Al usarlas, se liberarán, e irán las 3 a un enemigo aleatorio, causarán cada una 2D20DMG por turno.",
  ),
  new Item(
    "Espada colosal",
    "ARMA",
    "ACTIVABLE",
    5,
    "Una espada enorme que debe de ser agarrada con ambas manos por su peso, parece mágica, pero no está claro.",
    "Al tu maná al máximo (que debe ser como mínimo 3), puedes gastarlo todo para causar D20DMG por cada turno de MANA perdido al enemigo que quieras (las mejoras se aplican).",
  ),
  new Item(
    "Espejo de la dualidad",
    "MAGIA",
    "ACTIVABLE",
    4,
    "Un espejo que parece maldito. Se dice que es único, pero hay quienes dicen que antes había muchos más, pero que se rompieron.",
    "Al usarlo, puedes reflejar un espejo. Al mirar al espejo, con un 50% el objeto se duplicará. con el otro 50%, el objeto desaparecerá y en este caso, con un 25% se agrietará y se romperá.",
    5
  ),
  new Item(
    "Corona bendita",
    "MAGIA",
    "PASIVA",
    5,
    "Una corona azulada-dorada semitransparente que brilla muchísimo. Se dice que perteneció al rey de la fortuna.",
    "Todos los objetos no-equipados de tier 0 serán rerolleados automáticamente, los de tier 1, tendrán un 50% de probabilidad de rerollearse y los de tier 2 tendrán un 25%.",
    1
  ),
  new Item(
    "Célula misteriosa",
    "ARMADURA",
    "PASIVA",
    3,
    "Una escama extraña, se supone que es de una tortuga, pero podría pertenecer a una lagartija.",
    "Cada turno, recupera un 10% de la vida faltante.",
    5
  ),
  new Item(
    "Escudo de cristal",
    "MAGIA",
    "PASIVA",
    2,
    "Una gema que se mantiene en el pecho agarrado, parece brillante.",
    "Cuando vayan a matarte, si no estás a 1HP, sobrevivirás a 1HP.",
    3
  ),
  new Item(
    "Lista de la muerte",
    "MAGIA",
    "PASIVA",
    4,
    "Una lista de un papiro áspero y oscuro, tiene una pluma con tinta a su lado, pero no parece pintar.",
    "Se te dará un orden para matar a los enemigos. Si ese orden de muerte se cumple, serás recompensado con un objeto aleatorio por cada entidad derrotada.",
    1
  ),
  new Item(
    "Íncubo",
    "COMPAÑERO",
    "CONSUMIBLE",
    3,
    "Un pequeño demonio que arruinará el día de cualquiera.",
    "Puedes robar cualquier objeto con un 80% de probabilidad.",
  ),
  new Item(
    "Gran enciclopedia",
    "MAGIA",
    "ACTIVABLE",
    5,
    "Un libro flotante extraño con un candado, solo su dueño puede abrirlo.",
    "Puedes preguntarle lo que quieras: desde consejos de otros monstruos hasta el uso de ciertos objetos. Te responderá lo mejor que pueda (no está garantizado que todo funcione siempre). Al preguntar, gastarás tu turno.",
    1
  ),
  new Item(
    "Poción de la inclusión",
    "MAGIA",
    "CONSUMIBLE",
    3,
    "Un frasco de cristal extraño con un rocío brillante que se puede aplicar a los aliados.",
    "Mantiene la vida de los aliados equilibrada proporcionalmente (%). Al usarlo pierdes el turno.",
  ),
  new Item(
    "Guadaña",
    "MAGIA",
    "ACTIVABLE",
    2,
    "Escrito en la hoja pone: \"Θερίστε τις περιπλανώμενες ψυχές του μονοπατιού\", es una guadaña negra brillante.",
    "Destruye todas las almas errantes, recibiendo 2D20HP por cada una. Al usarla, gastas el turno.",
  )
]