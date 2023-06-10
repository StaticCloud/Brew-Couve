import hot from '../assets/menu-images/hot/americano.jpg'
import cold from '../assets/menu-images/cold/iced-americano.jpg'
import tea from '../assets/menu-images/tea/green-tea.jpg'
import iceTea from '../assets/menu-images/ice-tea/lemon-ice-tea.jpg'
import bakery from '../assets/menu-images/bakery/blueberry-muffin.jpg'

import bakeryMenu from "../menu/bakery.js";
import teaMenu from "../menu/tea.js";
import iceTeaMenu from "../menu/ice-tea.js";
import hotMenu from "../menu/hot.js";
import coldMenu from "../menu/cold.js";

const menu = {
    primary: true,
    options: [
        {
            name: "HOT",
            image: hot,
            menu: hotMenu
        },
        {
            name: "COLD",
            image: cold,
            menu: coldMenu
        },
        {
            name: "TEA",
            image: tea,
            menu: teaMenu
        },
        {
            name: "ICE TEA",
            image: iceTea,
            menu: iceTeaMenu
        },
        {
            name: "BAKERY",
            image: bakery,
            menu: bakeryMenu
        },
    ]
}

export default menu;