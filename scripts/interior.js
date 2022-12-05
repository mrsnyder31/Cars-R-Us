import { getInterior, setInterior } from "./database.js";
const interiorOptions = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption) 
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)


export const InteriorDesign = () => {
    let html = "<ul>"

    const chosenIntertior = interiorOptions.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.type}
        </li>`
    })

    html += chosenIntertior.join("")
    html += "</ul>"

    return html
}


