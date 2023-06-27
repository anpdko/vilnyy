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
   id: number;
   title: string;
   titleFull: string;
   body: string;
   foto: string;
   fotoCard1: string;
   fotoCard2: string;
}

const eventsData: IEvents[] = [
   {
      id: 1,
      title: "Щорічний похід в гори",
      titleFull: "Щорічний похід в гори",
      body: "Ми віримо у те, що людина людину найкраще пізнає в мандрівці! Тому маємо традицію щорічного походу в Карпати. Часто для багатьох це стає першим досвідом походів у гори, але конвертується в незабутні емоції. У 2022 році ми повели 40 людей підкорювати вершину Кукул.",
      foto: foto1Img,
      fotoCard1: fotocard_1Img,
      fotoCard2: fotocard_1_2Img,
   },
   {
      id: 2,
      title: "«СВОЄ»",
      titleFull: "«СВОЄ»",
      body: "Під час спілкування з представниками ГО «Космос табір» та творчого обʼєднання «Мереживо» ми зрозуміли, що маємо схожі креативні спільноти, які можуть підсилювати одне одного. Так народилася ідея провести подію під назвою «СВОЄ» у Довженко-центрі в Києві. Програма була поділена на три блоки: освітня частина, площадка брейк-дансу та сцена електронного продюсингу. Організацією та наповненням події займалися колівери Вільного на Кирилівській. Давали лекції,  фрістайлили та підібрали унікальний техно лайн-ап.",
      foto: foto2Img,
      fotoCard1: fotocard_2Img,
      fotoCard2: fotocard_2_2Img,
   },
   {
      id: 3,
      title: "Івана Купала",
      titleFull: "Івана Купала",
      body: "Ми бережемо та шануємо українські традиції, тому кожного року спільнота Вільного влаштовує таїнство на Івана Купала на Трухановому острові в Києві. У програму обов'язково входять: стрибки через ватру, традиційні ворожіння, співи, танці та пускання вінків по Дніпру. Колівери самостійно готують наповнення заходу та проводять його. Ми завжди підтримуємо цей процес і долучаємося до популяризації події. Дивись відео та приходь на наступну подію.",
      foto: foto3Img,
      fotoCard1: fotocard_3Img,
      fotoCard2: fotocard_3_2Img,
   },
]

export default eventsData