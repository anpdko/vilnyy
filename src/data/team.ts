import GoshaImg from '../assets/images/team/Gosha_CEO.png'
import OksanaImg from '../assets/images/team/Oksana_director.png'
import LesyaImg from '../assets/images/team/Lesya_priority.png'

import DashaImg from '../assets/images/team/Dasha_brand.png'
import YuliaImg from '../assets/images/team/YULIA_SMM.png'
import JanuszImg from '../assets/images/team/Janusz_diz.png'

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

const teamData:ITeam[] = [
   { 
      name: "Георгій Дехтяренко", 
      discription: "Найбільше ціную середовище змінотворців, яких мотивує місія та системний підхід.",
      job: "засновник та керівник",
      foto: GoshaImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Оксана Каленченко", 
      discription: "Я працюю на Вільному, бо своїми зусиллями можу позитивно вплинути на життя проактивної молоді України.",
      job: "директорка з організаційного розвитку",
      foto: OksanaImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Леся Іванівна", 
      discription: "Для мене Вільний — це про нове, цікаве, несподіване, командне, та прогресивне середовище, яке розвиває та мотивує..",
      job: "бухгалтерка",
      foto: LesyaImg,
      inst: "" 
   },

   { 
      name: "Дар’я Щербакова", 
      discription: "Вільний — це мій найбільший особистісний та професійний ріст.",
      job: "бренд-менеджерка",
      foto: DashaImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Юлія Пилипенко", 
      discription: "Я дотична до того, чого ще ніколи не зустрічала. До місця підсилення, важливої місії й унікальних цінностей.",
      job: "смм-менеджерка",
      foto: YuliaImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Януш Сипухіна", 
      discription: "Відчуваю себе причетною до побудови спільнот активних і небайдужих в країні людей.",
      job: "графічна дизайнерка",
      foto: JanuszImg,
      inst: "https://www.instagram.com/" 
   },

   { 
      name: "Арина Гомон", 
      discription: "Бачу потенціал у Вільному та потужності для розвитку проєкту.",
      job: "комʼюніті-менеджерка",
      foto: ArynaImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Влад Дармограй", 
      discription: "Мені подобається працювати в класних ініціативах.",
      job: "HR-менеджер",
      foto: VladImg,
      inst: "https://www.instagram.com/" 
   },
   { 
      name: "Олександр Большаков", 
      discription: "Подобається екосистема, яку створюють VILNYY. «Людей змінюють люди» цим все сказано.",
      job: "менеджер фізичного комфорту",
      foto: SashaImg,
      inst: "https://www.instagram.com/" 
   },
]

export default teamData;