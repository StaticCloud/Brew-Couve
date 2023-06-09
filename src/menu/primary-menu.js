import hot from '../assets/menu-images/hot/americano.jpg'
import cold from '../assets/menu-images/cold/iced-americano.jpg'
import tea from '../assets/menu-images/tea/green-tea.jpg'
import iceTea from '../assets/menu-images/ice-tea/lemon-ice-tea.jpg'
import bakery from '../assets/menu-images/bakery/blueberry-muffin.jpg'

import bakeryMenu from "../menu/bakery.js"

const menu = {
    primary: true,
    options: [
        {
            name: "HOT",
            image: hot
        },
        {
            name: "COLD",
            image: cold
        },
        {
            name: "TEA",
            image: tea
        },
        {
            name: "ICE TEA",
            image: iceTea
        },
        {
            name: "BAKERY",
            image: bakery,
            menu: bakeryMenu
        },
    ]
}

export default menu;