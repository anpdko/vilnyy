import foto1Img from '../assets/images/events/foto_1.png'
import foto2Img from '../assets/images/events/foto_2.png'
import foto3Img from '../assets/images/events/foto_3.png'

import fotocard_1Img from '../assets/images/events/fotoCard_1_1.png'
import fotocard_2Img from '../assets/images/events/fotoCard_2_1.png'
import fotocard_3Img from '../assets/images/events/fotoCard_2_1.png'
import fotocard_1_2Img from '../assets/images/events/fotoCard_1_2.png'
import fotocard_2_2Img from '../assets/images/events/fotoCard_2_2.png'
import fotocard_3_2Img from '../assets/images/events/fotoCard_3_2.png'


export interface IEvents {
   title: string;
   titleFull: string;
   body: string;
   foto: string;
   fotoCard1: string;
   fotoCard2: string;
}

export interface IDataEvents {
   id: number | string;
   en: IEvents;
   uk: IEvents;
}

const eventsData: IDataEvents[] = [
   {
      id: 1,
      en: {
         title: "Trip to the mountains",
         titleFull: "Annual trip to the mountains",
         body: "We believe that the best way for people to get to know each other is during an adventure! That is why we have a tradition of an annual trip to the Carpathian Mountains.  For many, it is their first experience of hiking in the mountains, but it turns out to be an unforgettable experience.  In 2022, we led 40 people to conquer the summit of Kukul.",
         foto: foto1Img,
         fotoCard1: fotocard_1Img,
         fotoCard2: fotocard_1_2Img,
      },
      uk: {
         title: "Щорічний похід в гори",
         titleFull: "Щорічний похід в гори",
         body: "Ми віримо у те, що людина людину найкраще пізнає в мандрівці! Тому маємо традицію щорічного походу в Карпати. Часто для багатьох це стає першим досвідом походів у гори, але конвертується в незабутні емоції. У 2022 році ми повели 40 людей підкорювати вершину Кукул.",
         foto: foto1Img,
         fotoCard1: fotocard_1Img,
         fotoCard2: fotocard_1_2Img,
      }
   },
   {
      id: 2,
      en: {
         title: "SVOYE",
         titleFull: "SVOYE",
         body: "During the communication with the representatives of the public organization 'Cosmos tabir' and the creative association 'Merezhivo', we realized that we have similar creative communities that can strengthen each other.  This is how the idea  to hold an event called 'SVOYE' at the Dovzhenko Center in Kyiv was born. The program was divided into three blocks: an educational part, a break-dance platform and an electronic production stage.  The organization of the event was handled by the co-livers of VILNYY on Kyrylivska Street.  They gave lectures, freestyled and selected a unique techno line-up.",
         foto: foto2Img,
         fotoCard1: fotocard_2Img,
         fotoCard2: fotocard_2_2Img,
      },
      uk: {
         title: "«СВОЄ»",
         titleFull: "«СВОЄ»",
         body: "Під час спілкування з представниками ГО «Космос табір» та творчого обʼєднання «Мереживо» ми зрозуміли, що маємо схожі креативні спільноти, які можуть підсилювати одне одного. Так народилася ідея провести подію під назвою «СВОЄ» у Довженко-центрі в Києві. Програма була поділена на три блоки: освітня частина, площадка брейк-дансу та сцена електронного продюсингу. Організацією та наповненням події займалися колівери Вільного на Кирилівській. Давали лекції,  фрістайлили та підібрали унікальний техно лайн-ап.",
         foto: foto2Img,
         fotoCard1: fotocard_2Img,
         fotoCard2: fotocard_2_2Img,
      }

   },
   {
      id: 3,
      en: {      title: "Ivana Kupala",
      titleFull: "Ivana Kupala (midsummer)",
      body: "We preserve and honor Ukrainian traditions, which is why every year the community of VILNYY organizes a sacrament for Ivana Kupala celebration on Trukhaniv Island in Kyiv.  The program includes jumping over the fire, traditional fortune-telling, singing, dancing and dropping flower crowns along the Dnipro River.  Co-livers independently prepare the content of the event and conduct it.  We always support this process and participate in popularizing the event.  Watch the video and come to the next celebration.",
      foto: foto3Img,
      fotoCard1: fotocard_3Img,
      fotoCard2: fotocard_3_2Img,},
      uk: {      title: "Івана Купала",
      titleFull: "Івана Купала",
      body: "Ми бережемо та шануємо українські традиції, тому кожного року спільнота Вільного влаштовує таїнство на Івана Купала на Трухановому острові в Києві. У програму обов'язково входять: стрибки через ватру, традиційні ворожіння, співи, танці та пускання вінків по Дніпру. Колівери самостійно готують наповнення заходу та проводять його. Ми завжди підтримуємо цей процес і долучаємося до популяризації події. Дивись відео та приходь на наступну подію.",
      foto: foto3Img,
      fotoCard1: fotocard_3Img,
      fotoCard2: fotocard_3_2Img,}
   },
]

export default eventsData