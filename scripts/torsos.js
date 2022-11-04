import { getTorsos, setTorso} from "./database.js"

const torsos = getTorsos()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "torso") {
            setTorso(parseInt(event.target.value))
        }
    }
)

export const Torsos = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = torsos.map(torso => {
        return `<li>
            <input type="radio" name="torso" value="${torso.id}" /> ${torso.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

