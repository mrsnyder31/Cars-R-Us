import { getTechnology, setTech } from "./database.js";
const tech = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)
            setTech(parseInt(changeEvent.target.value))
        }
    }
)




export const TechOptions = () => {
    let html = "<select id='tech'> <option value='0'>Choose Tech</option>"
    

    const chosenTech = tech.map(techs => {
        return `<option value="${techs.id}" /> ${techs.type}</option>`
    })

    html += chosenTech.join("")
    html += "</select>"

    return html
}
