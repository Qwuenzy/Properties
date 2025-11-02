import { propertyForSale } from "./getproperties/propertyForSale.js"
import { placeholder } from "./getproperties/placeholder.js";

const container = document.querySelector(".container")

const getPropertyHtml = ( propertyForSale= [placeholder]) => {
    let sQms
    
    return propertyForSale.map((homes) => {
        const {propertyLocation, priceGBP, roomsM2, Comment,image} = homes

        sQms = roomsM2.reduce((acc,num) => acc + num, 0)
        
        return `<section class="card" >
        <img src="${image}" alt="home pic">
        <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${Comment}</p>
        <h3>${sQms} sqms</h3>
        </div>
        </section>`
    })
    .join("");
   
}
container.innerHTML = getPropertyHtml(propertyForSale)
