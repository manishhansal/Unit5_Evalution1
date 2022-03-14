import React from "react";

const Wishlist = () => {
    return (
        <div id="wish">
            <h1>Wishlist</h1>
            <input placeholder="Add" id="inputVal"></input>
            <button id="btn" onClick={show}>Add</button>
            <div id="display"></div>
        </div>
        
    )
}

let list = [];
function show() {
    let val = document.getElementById("inputVal").value
    list.push(val);
    let display = document.getElementById("display")
    // console.log(val);
    if(list.length<=3){
        let h2 = document.createElement("h2");
        h2.textContent = val
        display.append(h2);
    }
    else{
        document.getElementById("btn").style.display = "none";
        document.getElementById("inputVal").style.display = "none";
        alert("You cannot add more than 3 items to wishlist.")
    }
    console.log(list)

}


export default Wishlist;

// onChange={event => setTitle(event.target.value)}