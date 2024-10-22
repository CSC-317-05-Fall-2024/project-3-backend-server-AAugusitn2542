// Fill this in
let restaurantData = [
        {
            "id": 0,
            "name": "Hodad Downtown",
            "phone": "(619) 234-6323",
            "address": "945 Broadway, San Diego, CA, 92101",
            "photo":  "/images/Hodad.jpg",
        },
    
        {
            "id": 1,
            "name": "The Smoking Goat",
            "phone": "(619) 234-6650",
            "address": "945 Broadway,San Diego, CA, 92101",
            "photo":  "/images/Smokinggoat.jpg",
        },
         
        {
            "id": 2,
            "name": "Ambrogio",
            "phone": "(619) 234-6340",
            "address": "945 Broadway, San Diego, CA, 92101",
            "photo":  "/images/Ambrogio.jpg",
        },
        {
            "id": 3,
            "name": "CowboyStar",
            "phone": "(619) 450-5880",
            "address": "640 Tenth Ave,San Diego, CA, 92101",
            "photo":  "/images/CowboyStar.jpg",
        },
    
        {
            "id": 4,
            "name": "The Crack Shack",
            "phone": "(415) 555-5555",
            "address": "2226 Kettner Blvd, San Diego, CA, 92101",
            "photo":  "/images/theCrackShack.jpg",
        },
    
        {
            "id": 5,
            "name": "Juniper And Ivy",
            "phone": "(415) 555-5555",
            "address": "2228 Kettner Blvd, San Diego, CA 92101",
            "photo":  "/images/JuniperandIvy.png",
        },
    
    
    
    
    
];
//export default { restaurantData };

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id)
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    newRestaurant.id = getNextId();
    restaurantData.push(newRestaurant);
    return newRestaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    
    // Find the restuarant to delete
    const  restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id);
    
    // If the restaurant exists, remove it from the data
    if (!restaurantData) {
        throw new Error(`Restaurant with id ${id} not found!`);
    }
    
    // Filter the restaurantData array to remove the restaurant with the given ID
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    
    // Log the remaining restaurants
    console.log("remaining restaurants:");
    for (let restaurant of restaurantData) {
        console.log(restaurant.id);
         // Return the deleted resturant
    return restaurantToDelete;
    }
   
   
};



export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };