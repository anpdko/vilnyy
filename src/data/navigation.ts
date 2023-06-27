
interface INavigation {
   title: string;
   link: string;
}

const navigation:INavigation[] = [
   { title: "Про нас", link: "/about" },
   { title: "Колівери", link: "/colivers"},
   { title: "Спільнота", link: "/community"},
   { title: "Команда", link: "/team"},
   { title: "Контакти", link: "/contacts"}

   // { title: "Наша історія", link: "/history" },
   // { title: "Наша місія", link: "/mission" },
   // { title: "Наші цінності", link: "/values" },
   // { title: "Люди", link: "/people"},
   // { title: "Традиції", link: "/traditions"},
   // { title: "Команда", link: "/team"},
   // { title: "Події", link: "/events"},
   // { title: "Допомога", link: "/belarus"},
   // { title: "Ціль", link: "/target"},
]

export default navigation;