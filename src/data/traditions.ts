import foto1Img from '../assets/images/traditions/foto1.png'
import foto2Img from '../assets/images/traditions/foto2.png'
import foto3Img from '../assets/images/traditions/foto3.png'
import foto4Img from '../assets/images/traditions/foto4.png'
import foto5Img from '../assets/images/traditions/foto5.png'
import foto6Img from '../assets/images/traditions/foto6.png'

import fotocard1Img from '../assets/images/traditions/fotoCard1.png'
import fotocard2Img from '../assets/images/traditions/fotoCard2.png'
import fotocard3Img from '../assets/images/traditions/fotoCard3.png'
import fotocard4Img from '../assets/images/traditions/fotoCard4.png'
import fotocard5Img from '../assets/images/traditions/fotoCard5.png'
import fotocard6Img from '../assets/images/traditions/fotoCard6.png'


export interface ITradition {
   title: string;
   titleFull: string;
   body: string;
   foto: string;
   fotoCard: string;
}

export interface IDataTradition {
   id: number | string;
   en: ITradition;
   uk: ITradition;
}

const traditionsData: IDataTradition[] = [
   {
      id: 101,
      en: {
         title: "Shared dinner",
         titleFull: "Shared dinner",
         body: " It is a mandatory weekly tradition, when co-livers gather at the table, share a common meal and organize various activities.  Common dinners are often themed.  For example, evening parties on St. Andrew's, Maslyana or in the style of mafia.  We do not limit the creative flow of co-livers, and they are free to organize whatever they like.  Also, dinners are open to friends, guests and acquaintances - this is how we expand the circle of community interaction.",
         foto: foto1Img,
         fotoCard: fotocard1Img,
      },
      uk: {
         title: "Спільна вечеря",
         titleFull: "Спільна вечеря",
         body: "Обовʼязкова щотижнева традиція, коли колівери збираються за столом, ділять спільну трапезу й організовують різноманітні активності. Часто спільні вечері бувають тематичними. Наприклад, вечорниці на Андрія, Масляна чи в стилі мафії. Ми не обмежуємо креативний потік коліверів і вони вільні організовувати все, що до душі. Також вечері бувають відкритими для друзів, гостей та знайомих — так ми розширюємо коло взаємодії спільноти.",
         foto: foto1Img,
         fotoCard: fotocard1Img,
      }
   },
   {
      id: 102,
      en: {
         title: "Sotnyk",
         titleFull: "Sotnyk or building a community leadership institute",
         body: "Every co-living must have the post of a sotnyk, the leader of the community.  A sotnyk is a key person in the processes of co-living community building, maintaining comfort and cleanliness, keeping agreements and living according to values.  They also act as a middleman between the VILNYY team and the community.  To improve the skills of sotnyks, we conduct trainings where we improve leadership skills, learn community building practices and share experiences.",
         foto: foto2Img,
         fotoCard: fotocard2Img,
      },
      uk: {
         title: "Сотники",
         titleFull: "Сотники — інститут лідерства в спільнотах",
         body: "На кожному колівінгу обовʼязково є посада сотника — лідера спільноти. Сотник — це ключова людина у процесах спільнототворення на колівінгу, підтримці комфорту та чистоти, дотриманні домовленостей та проживання за цінностями. Також він виконує роль звʼязкового між командою Вільного і спільнотою. Щоб покращувати навички сотників, ми проводимо навчання, де прокачуємо лідерські вміння, вивчаємо практики спільнототворення та обмінюємося досвідом.",
         foto: foto2Img,
         fotoCard: fotocard2Img,
      }
   },
   {
      id: 103,
      en: {
         title: "Community manager",
         titleFull: "Community manager",
         body: "In the VILNYY team, we have a 'community guru', the position of a community manager.  This person is responsible for maintaining the correct vector of community development and constantly visiting the co-livings, resolving conflicts, mentoring and accompanying sotnyks from start to finish.  We strive to research deeply and form the institution of communities in Ukraine, and community manager collects and analyzes data to confirm or refute our hypotheses, forms conclusions.",
         foto: foto3Img,
         fotoCard: fotocard3Img,
      },
      uk: {
         title: "Ком’юніті-менеджер",
         titleFull: "Ком’юніті-менеджер",
         body: "В команді Вільного ми маємо «гуру спільнот» —  це посада комʼюніті-менеджера. Ця людина відповідає за правильний вектор розвитку спільнот, постійно відвідує колівіги, вирішує конфлікти, менторить та супроводжує сотників від початку до кінця. Ми прагнемо глибоко досліджувати й формувати інститут спільнот в Україні, а саме комʼюніті-менеджер займається збором та аналізом даних для підтвердження чи спростування наших гіпотез, формує висновки.",
         foto: foto3Img,
         fotoCard: fotocard3Img,
      }
   },
   {
      id: 104,
      en: {
         title: "Selection of people",
         titleFull: "Selection of people for co-living",
         body: "This tool allows us to select truly motivated, mission focused and valuable people.  According to statistics, 4 out of 10 people pass the selection. The first stage is a questionnaire for the future co-liver, where the person tells about themself, their ideas and expectations about co-living, their motivation for moving in.  The second stage is an interview with the HR manager and with the community in which the candidate wants to join.  And the final stage is an in-person voting by the community to determine if the person is going to stay after one month of living together.",
         foto: foto4Img,
         fotoCard: fotocard4Img,
      },
      uk: {
         title: "Відбір людей",
         titleFull: "Відбір людей на колівінг",
         body: "Цей інструмент дозволяє нам підбирати дійсно вмотивованих, місійних та ціннісних людей. За статистикою відбір проходять 4 людини з 10. Перший етап — це анкета майбутнього колівера, де людина розповідає про себе, своє уявлення та очікування до колівінгу, мотивацію заїхати. Другий етап — співбесіда з HR-менеджером і спільнотою, в яку кандидат хоче заїхати. І фінальний етап — офлайн голосування спільнотою за людину після одного місяця проживання разом.",
         foto: foto4Img,
         fotoCard: fotocard4Img,
      }

   },
   {
      id: 105,
      en: {
         title: "Communal trips",
         titleFull: "Communal trips",
         body: "A mandatory element of community building is a collective trip, which must take place at least once every four months and last more than two days.  Communities independently choose the place where they would like to go and organize the whole process by themselves. The whole community finds itself outside of co-living together and also faces challenges — this is when the magic of discovery and strong connections form.",
         foto: foto5Img,
         fotoCard: fotocard5Img,
      },
      uk: {
         title: "Спільнотні мандрівки",
         titleFull: "Спільнотні мандрівки",
         body: "Обовʼязковим елементом спільнототворення є спільна мандрівка, яка має відбутися мінімум раз на чотири місяці й тривати більше ніж  два дні. Спільноти самостійно обирають для себе місце, куди б вони хотіли поїхати і організовують весь процес. Коли вся спільнота опиняється за межами колівінгу разом та ще й зіштовхується з викликами — стається магія пізнання та міцне обʼєднання.",
         foto: foto5Img,
         fotoCard: fotocard5Img,
      }

   },
   {
      id: 106,
      en: {
         title: "Sociocratic",
         titleFull: "Sociocratic structure of the organization",
         body: "Sociocracy is a method of governance based on the principles of democracy and equality of the team members but with the elements of consensus and empathy.  In practice, each association in the organization (from a single community to top management) is a circle with its own mission and powers.  They are interconnected: each circle has the opportunity to be heard and to influence other circles at any level.  This is how we maintain equality and the involvement of everyone in the organization in decision-making and responsibility.",
         foto: foto6Img,
         fotoCard: fotocard6Img,
      },
      uk: {
         title: "Соціократична",
         titleFull: "Соціократія структура організації",
         body: "Соціократія — це метод врядування, що базується на принципах демократії та рівності голосів членів команди, але додає до цього елементи консенсусу та емпатії. На практиці кожне обʼєднання в організації (від однієї окремої спільноти до топ-менеджементу) — це кола зі своєю місією та повноваженнями. Вони повʼязані між собою: кожне коло має можливість бути почутим і впливати на інші кола будь-якого рівня. Так ми забезпечуємо рівноправність та залучення всіх в організації до прийняття рішень та відповідальності.",
         foto: foto6Img,
         fotoCard: fotocard6Img,
      }
   },
]

export default traditionsData