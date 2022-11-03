import { getLegs } from "./database.js"

const legs = getLegs()

export const Legs = () => {
    let html = "<ul>"
    // Use .map() for converting objects to <li> elements
    const listItems = legs.map(size => {
        return `<li>
            <input type="radio" name="size" value="${leg.id}" /> ${clearInterval.carets}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}