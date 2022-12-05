import { getWheels, setWheel } from "./database.js";
const wheels = getWheels();

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "wheel") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption) 
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)




export const WheelDesign = () => {
    let html = "<ul>"

    const chosenIntertior = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.size}
        </li>`
    })

    html += chosenIntertior.join("")
    html += "</ul>"

    return html
}


