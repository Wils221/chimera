import { getHeads, setHeads } from "./database.js"

const heads = getHeads()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "heads") {
        setHeads(parseInt(event.target.value))
    }
}
)

export const Heads = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = heads.map(head => {
        return `<li>
            <input type="radio" name="head" value="${head.id}" /> ${head.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}