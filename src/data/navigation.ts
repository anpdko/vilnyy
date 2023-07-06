
interface INavigation {
   title: string;
   link: string;
}

const navigation:INavigation[] = [
   { title: "About us", link: "about" },
   { title: "Colivers", link: "colivers"},
   { title: "Community", link: "community"},
   { title: "Team", link: "team"},
   { title: "Contacts", link: "contacts"}

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