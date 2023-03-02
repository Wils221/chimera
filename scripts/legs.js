import { getLegs } from "./database.js"

const legs = getLegs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "legs") {
        setHeads(parseInt(event.target.value))
    }
}
)



export const Legs = () => {
    let html = "<ul>"
    // Use .map() for converting objects to <li> elements
    const listItems = legs.map(size => {
        return `<li>
            <input type="radio" name="size" value="${leg.id}" /> ${leg.name}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}