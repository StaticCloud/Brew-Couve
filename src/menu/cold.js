import cafeFrappe from "../assets/menu-images/cold/cafe-frappe.jpg";
import caramelFrappe from "../assets/menu-images/cold/caramel-frappe.jpg";
import chocoFrappe from "../assets/menu-images/cold/choco-frappe.jpg";
import hazelnutFrappe from "../assets/menu-images/cold/hazelnut-frappe.jpg";
import icedAmericano from "../assets/menu-images/cold/iced-americano.jpg";
import icedCappucino from "../assets/menu-images/cold/iced-cappucino.jpg";
import icedLatte from "../assets/menu-images/cold/iced-latte.png";

const cold = {
    primary: false,
    options: [
        {
            name: "CAFE FRAPPE",
            image: cafeFrappe
        },
        {
            name: "CARAMEL FRAPPE",
            image: caramelFrappe
        },
        {
            name: "CHOCO FRAPPE",
            image: chocoFrappe
        },
        {
            name: "HAZELNUT FRAPPE",
            image: hazelnutFrappe
        },
        {
            name: "ICED AMERICANO",
            image: icedAmericano,
        },
        {
            name: "ICED CAPPUCINO",
            image: icedCappucino,
        },
        {
            name: "ICED LATTE",
            image: icedLatte,
        }
    ]
}

export default cold;