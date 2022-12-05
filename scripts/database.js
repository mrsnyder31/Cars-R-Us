const database = {

    paintColor: [
    {
        id: 1,
        color: "Silver",
        price: 5.00
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 10.00
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 15.00
    },
    {
        id: 4,
        color: "Spring Green",
        price: 20.00
    }
    ],

    interior: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 5.00
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 10.00
        },
        {
            id: 3,
            type: "White Leather",
            price: 15.00
        },
        {
            id: 4,
            type: "Black Leather",
            price: 20.00
        },
        
    ],

    technology: [
        {
            id: 1,
            type: "Basic Package",
            price: 5.00
        },
        {
            id: 2,
            type: "Navigation Package",
            price: 10.00
        },
        {
            id: 3,
            type: "Visibility Package",
            price: 15.00
        },
        {
            id: 4,
            type: "Ultra Package",
            price: 20.00
        }

    ],

    wheels: [
        {
            id: 1,
            size: "17-inch Pair Radial",
            price: 5.00
        },
        {
            id: 2,
            size: "17-inch Pair Radial Black",
            price: 10.00
        },
        {
            id: 3,
            size: "18-inch Pair Spoke Silver",
            price: 15.00
        },
        {
            id: 4,
            size: "18-inch Pair Spoke Black",
            price: 20.00
        },
        
    ],

    orders: [
    //     {
    //     id: 1,
    //     colorId: 1,
    //     interiorId: 1,
    //     techId: 1,
    //     wheelId: 1,
    //     timestamp: "timestamp"
    // }
],

    orderBuilder: {}

}



export const getColor = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    // const lastIndex = database.orders.length;
    
    newOrder.id = database.orders.length + 1;

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}