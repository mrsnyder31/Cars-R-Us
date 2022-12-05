import { getInterior, getOrders, getColor, getTechnology, getWheels } from "./database.js";

const interior = getInterior();
const colors = getColor();
const technology = getTechnology();
const wheels = getWheels();

const buildOrders = (order) => {
    
    const paintPrice = colors.find(
        (color) => {
            return color.id === order.colorId
        }
        )
        const interiorPrice = interior.find(
            (interior) => {
                return interior.id === order.interiorId
            }
            )
            const techPrcie = technology.find(
                (tech) => {
                    return tech.id === order.techId
                }
                )
                const wheelPrice = wheels.find(
                    (wheel) => {
                        return wheel.id === order.wheelId
                    }
                    )
                    
                    const orderCost = paintPrice.price + interiorPrice.price + techPrcie.price + wheelPrice.price
                    const costToString = orderCost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })
                    
                    return `<li id="${order.id}">
                    Order #${order.id} was placed on ${order.timestamp} cost ${costToString}
                    </li>`
                }
                
                
export const Orders = () => {
    const orders = getOrders();
                    
    let html = "<ul>"

    const listOrders = orders.map(buildOrders)

    html += listOrders.join("")
    html += "</ul>"
    
    return html
}



// orders:
//     id: 1,
//     colorId: 1,
//     interiorId: 1,
//     techId: 1,
//     wheelId: 1,

