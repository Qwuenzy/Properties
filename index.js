import { propertyForSale } from "./getproperties/propertyForSale.js"
import { placeholder } from "./getproperties/placeholder.js";

const container = document.querySelector(".container")
const main = document.querySelector(".main")
 

const {propertyLocation, priceGBP, roomsM2, Comment,image} = propertyForSale

const getPropertyHtml = () => {
    let sQms
    for (let i = 0; i < propertyForSale.length; i++){
         sQms = propertyForSale[i].roomsM2.reduce((acc,num) => acc + num, 0)

        main.innerHTML += `<div class="card">
        <img src="${propertyForSale[i].image}" alt="home pic">
        <div class="card-right">
        <h2>${propertyForSale[i].propertyLocation}</h2>
        <h3>${propertyForSale[i].priceGBP}</h3>
        <p>${propertyForSale[i].Comment}</p>
        <h3>${sQms} sqms</h3>
        </div>
        </div>`
    }
    
}
getPropertyHtml()



