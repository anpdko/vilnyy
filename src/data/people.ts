import foto1Img from '../assets/images/people/page6foto1.png'
import foto2Img from '../assets/images/people/page6foto2.png'
import foto3Img from '../assets/images/people/page6foto3.png'
import foto4Img from '../assets/images/people/page6foto4.png'
import foto5Img from '../assets/images/people/page6foto5.png'

import fotocard1Img from '../assets/images/people/fotocard1.png'
import fotocard2Img from '../assets/images/people/fotocard2.png'
import fotocard3Img from '../assets/images/people/fotocard3.png'
import fotocard4Img from '../assets/images/people/fotocard4.png'
import fotocard5Img from '../assets/images/people/fotocard5.png'
import uaImg from '../assets/images/icons/ua.png'


export interface IPerson {
   title: string;
   body: string;
   foto: string;
   fotoCard: string;
   inst: string;
}

export interface IDataPerson {
   id: number | string;
   en: IPerson
   uk: IPerson
}

const peopleData: IDataPerson[] = [
   {
      id: 1,
      en: {
         title: "<strong>Taras Kutny,</strong> a military man, died in Avdiivka on 12/17/2022",
         body: `<p>Taras became part of our community in 2019, when he returned from the ATO zone, where he fought for 3 years.  VILNYY became a comfortable environment for him to return to the civilian lifestyle.  He has always been drawn to valuable people and communities, which is why he chose to live with us..  In more than two years of his time in the network, he rose to become a “sotnyk” (leader of the community), changed two co-livings and met his future fiance Natalie (she died in 2022 from an illness).  On the first day of the full-scale invasion, Taras again took up weapons right in the morning to defend his state.  We are honored that Taras was and will forever be a part of our community.  He is a man of dignity and courage, an example of a courageous leader that you want to follow.
         </p>
         <h2>Glory to Ukraine!  Glory to the hero!
         <img src="${uaImg}" alt="ua"/></h2>`,
         foto: foto1Img,
         fotoCard: fotocard1Img,
         inst: ""
      },
      uk: {
         title: "<strong>Тарас Кутний,</strong> військовий, загинув в Авдіївці 17.12.2022",
         body: `<p>Тарас став частиною нашої спільноти у 2019 році, коли повернувся із зони АТО, де воював 3 роки. Вільний став для нього комфортним середовищем для повернення до цивільного способу життя. Його завжди тягнуло до ціннісних людей та спільнот, тому він обрав заїхати до нас. За більш ніж два роки свого проживання в мережі він встиг стати сотником, змінити два колівінги та зустріти свою майбутню наречену Наталі (померла у 2022 році від хвороби). В перший день повномасштабного вторгнення Тарас вже із самого ранку зі зброєю знову став на захист своєї держави. Для нас честь, що Тарас був і тепер назавжди буде частиною нашої спільноти. Він — приклад гідності й сміливості, приклад відважного лідера, якого хочеться наслідувати.</p>
         <h2>Слава Україні! Герою Слава! <img src="${uaImg}" alt="ua"/></h2>`,
         foto: foto1Img,
         fotoCard: fotocard1Img,
         inst: ""
      }
   },
   {
      id: 2,
      en: {
         title: "<strong>Alina,</strong> recruiter from Melitopol",
         body: `<p>I have been living on VILNYY on Voloska for almost a year and recently became a sotnyk.</p>
      <p>I was under occupation in Melitopol for a month, where I was mentally exhausted.  When there was a small opportunity to leave, I packed a small backpack of the most necessary things and set off without thinking twice. This period was quite difficult for me, because I did not know what was waiting for me.  But in my mind, I still dreamed of returning to Kyiv.  And so it happened, on May 12, I came to Kyiv for the co-living.  I felt at home, exactly where I should be.</p>
      <p>VILNYY gave me friends, support and love.</p>
      <p>This is a place where you feel safe, where in the evenings in the kitchen you discuss various topics, where people inspire you with their interests, where common memories are created.  When you are happy, everyone celebrates with you, and when you are sad, they hug you and prevent you from feeling lonely.  In VILNYY, I quickly and easily switched to the Ukrainian language, although I had been communicating in Russian throughout all of my life in Melitopol.  In fact, VILNYY  is an experience that few have had or will have, so I am very glad that I get to be here now.</p>`,
         foto: foto2Img,
         fotoCard: fotocard2Img,
         inst: "https://instagram.com/bezumovno?igshid=YmMyMTA2M2Y=",
      },
      uk: {
         title: "<strong>Аліна,</strong> рекрутерка з Мелітополя",
         body: `<p>Живу на Вільному на Волоській вже майже рік і нещодавно стала сотницею.</p>
      <p>Місяць я була в окупації в Мелітополі, де морально виснажилась. Коли з'явилась маленька можливість виїхати, я не думаючи зібрала невеликий рюкзак найнеобхідніших речей і рушила в дорогу. Мені досить складно дався цей період, бо я не знала що саме мене очікує. Але в думках я все ж мріяла повернутися саме в Київ. Так і сталося, 12 травня я приїхала в Київ на колівінг. Я відчула себе вдома, саме там, де я і маю бути.</p>
      <p>Вільний дав мені друзів, підтримку і любов. Це місце, де ти відчуваєш себе в безпеці, де вечорами на кухні ви обговорюєте різноманітні теми, де люди надихають тебе своїми інтересами, де створюються спільні спогади. Коли тобі щасливо — всі радіють разом з тобою, а коли сумно — обіймають тебе і не дають відчути самотність.  На Вільному я швидко і легко перейшла на українську мову, хоча все життя в Мелітополі спілкувалась російською. Насправді Вільний — це такий досвід, який мало у кого був чи буде, тому я дуже рада, що зараз я саме тут.</p>`,
         foto: foto2Img,
         fotoCard: fotocard2Img,
         inst: "https://instagram.com/bezumovno?igshid=YmMyMTA2M2Y=",
      }
   },
   {
      id: 3,
      en: {
         title: "<strong>Volodya,</strong> graphic designer, human rights activist",
         body: `<p>For more than two years, I have been living in VILNYY on Verkhnyi Val. After moving to Kyiv, I became engaged in LGBT+ activism and started working and developing my skills in the field of graphic and motion design.  Recently, I started working as a graphic designer at the public organization "Ukrainian Military LGBT+ for Equal Rights".  In this way, I can do what I love and be useful for the army and for the LGBT+ community.</p>
      <p>I remember my first months at the co-living two years ago, when I was looking for my first job in Kyiv and working in activism.  During my stay in VILNYY, I realized that much of what I have now would not be possible without a community where I’m  surrounded by very different people who will always support and be there for me.</p>
      <p>Sometimes it's even scary to imagine how I would live somewhere alone and not be able to go down to the kitchen to hang out together or just talk about important things.  And also, there would be no people around who really love me.</p>`,
         foto: foto3Img,
         fotoCard: fotocard3Img,
         inst: "https://instagram.com/vizzznyak?igshid=YmMyMTA2M2Y=",
      },
      uk: {
         title: "<strong>Володя,</strong> графічний дизайнер, активіст в сфері прав людини",
         body: `<p>Вже більше ніж два роки я живу на Вільному на Верхньому Валу, а після переїзду до Києва займаюсь ЛГБТ+ активізмом, працюю й розвиваюсь у сфері графічного і моушн дизайну. Нещодавно почав працювати графічним дизайнером в ГО «Українські військові ЛГБТ+ за рівні права». Таким чином можу робити улюблену справу і бути корисним для армії та ЛГБТ+ спільноти.</p>
      <p>Пам’ятаю свої перші місяці на колівінгу два роки тому, коли шукав свою першу роботу в Києві та займався активізмом. За час проживання на Вільному я зрозумів, що багато з того, що я маю зараз, не було б можливим без спільноти, де навколо дуже різні люди, які завжди підтримають і будуть поруч.</p>
      <p>Іноді навіть страшно уявляти те, як я десь жив би сам і не міг спуститись на кухню, щоб разом потусити чи просто поговорити про важливе. А ще, навколо не було б людей, які мене справді люблять.
      </p>`,
         foto: foto3Img,
         fotoCard: fotocard3Img,
         inst: "https://instagram.com/vizzznyak?igshid=YmMyMTA2M2Y=",
      }
   },
   {
      id: 4,
      en: {
         title: "<strong>Lev,</strong> co-founder of the crypto startup, quantum developer and IT developer",
         body: `<p>I have been living in a co-living space on Velyka Zhytomyrska for 2.5 years.</p>
      <p>As an introvert, who doesn't like to spend time outside the house and rarely does that, it is difficult to make acquaintances, to find where and how to spend time, to communicate with people elsewhere.  An environment like VILNYY helps a lot: it covers my social needs, helps me to network, stimulates me in finding interesting classes and activities.</p>
      <p>VILNYY gave me a variety of mental resources, useful experiences, topics for reflection and self-knowledge. Moreover, it gave me people who in one way or another influenced and taught me something from their life path and experience.  It actually served as a catalyst for what has happened to me over that timespan.</p>`,
         foto: foto4Img,
         fotoCard: fotocard4Img,
         inst: "https://instagram.com/dominus_leo?igshid=YmMyMTA2M2Y=",
      },
      uk: {
         title: "<strong>Лев,</strong> кофаундер крипто стартапу, квант девелопер та ІТ-розробник",
         body: `<p>Я живу на колівінгу на Великій Житомирській 2,5 роки.</p>
      <p>Як інтроверту, який не любить і рідко буває за межами дому, мені складно заводити знайомства, шукати де і як проводити час, спілкуватися з живими людьми десь ще. Таке середовище, як Вільний, дуже допомагає: закриває мої соціальні потреби, сприяє нетворку, пошуку цікавих занять, активностей.</p>
      <p>Вільний дав мені різноманітні ментальні ресурси, корисний досвід, теми для рефлексій та пізнання себе, людей, які так чи інакше впливали й чомусь навчали зі свого життєвого шляху та досвіду. Фактично послугував каталізатором, того що відбувалося зі мною.
      </p>`,
         foto: foto4Img,
         fotoCard: fotocard4Img,
         inst: "https://instagram.com/dominus_leo?igshid=YmMyMTA2M2Y=",
      }
   },
   {
      id: 5,
      en: {
         title: "<strong>Luda,</strong> brand strategist",
         body: `<p>I lived in the co-living space on Mezhyhirska Street for 1.5 years.</p>
      <p>In VILNYY, I truly fell in love with Ukraine and the Ukrainian language.  It was here that I first started to communicate in Ukrainian.  I began to think: "What is Ukraine?  And how to become a better citizen for our country?  It all starts with you, with your small drop in the ocean, with your cup of yogurt that you have recycled. "For the first time, I went to vechornytsi, Christmas Eve, with the community.</p>
      <p>After leaving, we still see each other every few months.  Now my VILNYY lives not only in Mezhihirskyi, but also in Lviv, Rivne, Odesa.  I even had a first child in the community.  I have a lot of respect and love for these people.  My community is probably my brothers and sisters.  How else to call the people with whom we wash the toilets together, and then go hang out?  There is no such level of intimacy and trust with friends.</p>
      <p>The main change that I went through is starting to understand myself in a wider context.  How the context you live in can change you, and how it works the other way around.  I began to perceive reality more.  On VILNYY, my puberty period ended, when I  was not interested in anything except partying.</p>
      <p>VILNYY is a community for those who seek meaning.  But you must be ready to start creating these meanings in the future, not only absorb them.  Change yourself, change the country.</p>`,
         foto: foto5Img,
         fotoCard: fotocard5Img,
         inst: "https://instagram.com/ludok_bay?igshid=YmMyMTA2M2Y=",
      },
      uk: {
         title: "<strong>Люда,</strong> бренд-стратегиня",
         body: `<p>Я жила на колівінгу на Межигірській 1,5 року.</p>
      <p>На Вільному я по-справжньому закохалась в Україну, українську мову. Саме тут я вперше почала спілкуватися українською. Я почала думати: “А що таке Україна? А як стати кращою громадянкою для нашої країни? Що все починається з тебе, з твоєї маленької краплі в океані, з твого стаканчика від йогурту, який ти відсортував”. Зі спільнотою я вперше побувала на вечорницях, Святвечорі.</p>
      <p>Після виїзду ми досі бачимось раз на декілька місяців. Зараз мій Вільний проживає не тільки на Межигірський, але й у Львові, Рівному, Одесі. В нас навіть перша дитина в спільноті народилась. Я дуже поважаю та люблю цих людей. Напевно, моя спільнота — брати та сестри. Як ще назвати людей з якими ми разом миємо туалети, а потім йдемо тусити? З друзями немає такого рівня інтимності та довіри.</p>
      <p>Головна моя зміна — це розуміння себе в ширшому контексті. Як контекст, в якому ти живеш, здатен змінити тебе, і як це працює навпаки. Я почала більше сприймати реальність. На Вільному закінчився мій пубертатний період, коли окрім тусовок тебе нічого не цікавило.</p>
      <p>Вільний — це спільнота для тих, хто шукає сенси. Але ти маєш бути готовим в майбутньому почати створювати ці сенси, не тільки вбирати в себе. Змінювати себе, змінювати країну.</p>`,
         foto: foto5Img,
         fotoCard: fotocard5Img,
         inst: "https://instagram.com/ludok_bay?igshid=YmMyMTA2M2Y=",
      }
   }
]

export default peopleData