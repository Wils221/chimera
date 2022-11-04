import { getArms, setArms } from "./database.js";

const arms = getArms()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "arms") {
            setArms(parseInt(event.target.value))
        }
    }
)

export const Arms = () => {
    let html ="<ul>"

    const listItems = arms.map(arm => {
        return `<li>
            <input type="radio" name="arms" value="${arm.id}" /> ${arm.name}
            </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}