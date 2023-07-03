import GoshaImg from '../assets/images/team/Gosha_CEO.png'
import OksanaImg from '../assets/images/team/Oksana_director.png'
import LesyaImg from '../assets/images/team/Lesya_priority.png'

import DashaImg from '../assets/images/team/Dasha_brand.png'
import YuliaImg from '../assets/images/team/YULIA_SMM.png'
import JanuszImg from '../assets/images/team/Janusz_diz.png'
import VictoriaAnnaImg from "../assets/images/team/Victoria_Anna.jpg"

import ArynaImg from '../assets/images/team/Aryna_manager.png'
import VladImg from '../assets/images/team/HR_Vlad.png'
import SashaImg from '../assets/images/team/Sasha_fixer.png'



export interface ITeam {
   name: string;
   discription: string;
   job: string;
   foto: string;
   inst: string;
}

export interface IDataTeam {
   id: string | number;
   en: ITeam,
   uk: ITeam
}

const teamData: IDataTeam[] = [
   {
      id: 1,
      en: {
         name: "Georgy Dekhtyarenko",
         discription: "What I value most is the environment of change-makers who are motivated by a certain mission and a systemic approach.",
         job: "founder and manager",
         foto: GoshaImg,
         inst: "https://instagram.com/ukr_soloway?igshid=YmMyMTA2M2Y="
      },
      uk: {
         name: "Георгій Дехтяренко",
         discription: "Найбільше ціную середовище змінотворців, яких мотивує місія та системний підхід.",
         job: "засновник та керівник",
         foto: GoshaImg,
         inst: "https://instagram.com/ukr_soloway?igshid=YmMyMTA2M2Y="
      }
   },
   {
      id: 2,
      en: {
         name: "Oksana Kalenchenko",
         discription: "I work at VILNYY, because with the effort I make I can positively influence the lives of pro-active youth of Ukraine.",
         job: "director of organizational development",
         foto: OksanaImg,
         inst: "https://instagram.com/oksanka_ruda__?igshid=YmMyMTA2M2Y="
      },
      uk: {
         name: "Оксана Каленченко",
         discription: "Я працюю на Вільному, бо своїми зусиллями можу позитивно вплинути на життя проактивної молоді України.",
         job: "директорка з організаційного розвитку",
         foto: OksanaImg,
         inst: "https://instagram.com/oksanka_ruda__?igshid=YmMyMTA2M2Y="
      }
   },
   {
      id: 3,
      en: {
         name: "Lesya Ivanivna",
         discription: "For me, VILNYY is about something new, interesting, unexpected, team-oriented and about progressive environment that inspires and motivates you.",
         job: "accountant",
         foto: LesyaImg,
         inst: ""
      },
      uk: {
         name: "Леся Іванівна",
         discription: "Для мене Вільний — це про нове, цікаве, несподіване, командне, та прогресивне середовище, яке розвиває та мотивує..",
         job: "бухгалтерка",
         foto: LesyaImg,
         inst: ""
      }
   },

   {
      id: 4,
      en: {
         name: "Daria Shcherbakova",
         discription: "VILNYY is a place where I have the best opportunities  to grow personally and professionally.",
         job: "brand manager",
         foto: DashaImg,
         inst: "https://instagram.com/darya_huha?igshid=YmMyMTA2M2Y="
      },
      uk: {
         name: "Дар’я Щербакова",
         discription: "Вільний — це мій найбільший особистісний та професійний ріст.",
         job: "бренд-менеджерка",
         foto: DashaImg,
         inst: "https://instagram.com/darya_huha?igshid=YmMyMTA2M2Y="
      }
   },
   {
      id: 10,
      en: {
         name: "Victoria-Anna Burmenska",
         discription: "VILNYY provides space for professional development, an example of a quality community and team where you can be authentic",
         job: "customer service manager",
         foto: VictoriaAnnaImg,
         inst: "https://instagram.com/bikaanna?igshid=YmMyMTA2M2Y="
      },
      uk: {
         name: "Вікторія-Анна Бурменська",
         discription: "VILNYY дає простір для професійного розвитку, приклад якісної спільноти та команди, де можна бути справжнім",
         job: "менеджерка клієнтського сервісу",
         foto: VictoriaAnnaImg,
         inst: "https://instagram.com/bikaanna?igshid=YmMyMTA2M2Y="
      }

   },
   {
      id: 5,
      en: {
         name: "Yulia Pylypenko",
         discription: "Я дотична до того, чого ще ніколи не зустрічала. До місця підсилення, важливої місії й унікальних цінностей.",
         job: "SMM manager",
         foto: YuliaImg,
         inst: "https://www.instagram.com/"
      },
      uk: {
         name: "Юлія Пилипенко",
         discription: "Я дотична до того, чого ще ніколи не зустрічала. До місця підсилення, важливої місії й унікальних цінностей.",
         job: "смм-менеджерка",
         foto: YuliaImg,
         inst: "https://www.instagram.com/"
      }

   },
   {
      id: 6,
      en: {
         name: "Janush Sypukhina",
         discription: "I feel involved in the process of building communities of the active and caring people in the country.",
         job: "graphic designer",
         foto: JanuszImg,
         inst: "https://www.instagram.com/"
      },
      uk: {
         name: "Януш Сипухіна",
         discription: "Відчуваю себе причетною до побудови спільнот активних і небайдужих в країні людей.",
         job: "графічна дизайнерка",
         foto: JanuszImg,
         inst: "https://www.instagram.com/"
      }
   },

   {
      id: 7,
      en: {
         name: "Aryna Gomon",
         discription: "I see potential in VILNYY and power to develop this project further.",
         job: "community manager",
         foto: ArynaImg,
         inst: "https://www.instagram.com/"
      },
      uk: {
         name: "Арина Гомон",
         discription: "Бачу потенціал у Вільному та потужності для розвитку проєкту.",
         job: "комʼюніті-менеджерка",
         foto: ArynaImg,
         inst: "https://www.instagram.com/"
      }

   },
   {
      id: 8,
      en: {
         name: "Vlad Damogray",
         discription: "I like working on cool initiative projects.",
         job: "HR manager",
         foto: VladImg,
         inst: "https://www.instagram.com/"
      },
      uk: {
         name: "Влад Дармограй",
         discription: "Мені подобається працювати в класних ініціативах.",
         job: "HR-менеджер",
         foto: VladImg,
         inst: "https://www.instagram.com/"
      }
   },
   {
      id: 9,
      en: {
         name: "Oleksandr Bolshakov",
         discription: "I like the ecosystem created by VILNYY. «People change people» that says it all",
         job: "manager of physical comfort",
         foto: SashaImg,
         inst: "https://www.instagram.com/"
      },
      uk: {
         name: "Олександр Большаков",
         discription: "Подобається екосистема, яку створюють VILNYY. «Людей змінюють люди» цим все сказано.",
         job: "менеджер фізичного комфорту",
         foto: SashaImg,
         inst: "https://www.instagram.com/"
      }
   },
]

export default teamData;