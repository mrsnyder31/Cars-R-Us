import { InteriorDesign } from "./interior.js";
import { ColorOptions } from "./paintColor.js";
import { TechOptions } from "./technology.js";
import { WheelDesign } from "./wheels.js";
import { addCustomOrder, getOrders } from "./database.js";
import { Orders } from "./orders.js";


const mainContainer = document.querySelector("#container");

document.addEventListener(
    "click",
    (event) => {
       if (event.target.id === "orderButton") {
           console.log("onClick:", getOrders())
          addCustomOrder()
       }

    }
)

const RenderHtml = () => {
   
    return mainContainer.innerHTML = `
    <h1> Cars R Us</h1>
    
    <article class="choices">
        <section class="choices__interior options">
            <h2>Intertior</h2>
            ${InteriorDesign()}
    </section>
        <section class="choices__color options">
            <h2>Color</h2>
            ${ColorOptions()}
        </section>
        <section class="choices__color options">
            <h2>Tech</h2>
            ${TechOptions()}
        </section>
        <section class="choices__color options">
        <h2>Wheels</h2>
        ${WheelDesign()}
    </section>
    </article>
    <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Car Orders</h2>
            ${Orders()}
            
        </article>
    `
}

RenderHtml();

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    RenderHtml()
    console.log("postRender:", getOrders())
})
