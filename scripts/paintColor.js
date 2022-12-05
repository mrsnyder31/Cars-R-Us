import { getColor, setColor } from "./database.js";
const colors = getColor()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)
            setColor(parseInt(changeEvent.target.value))
        }
    }
)


export const ColorOptions = () => {
    let html = "<select id='color'> <option value='0'>Choose Color</option>"
    

    const chosenColor = colors.map(color => {
        return `<option value="${color.id}" /> ${color.color}</option>`
    })

    html += chosenColor.join("")
    html += "</select>"

    return html
}




