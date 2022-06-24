// DATA //
/** 
 * Make array 'items' which contains 5 kinds of 'Item', and each 'Item' is an array that has some products/objects
 * that has some properties like 'img', 'name', 'category', 'price', 'stock', '.qty', and 'description'.    */
var items = [
    milkItem = [
        {img: "img/milk/lindtlindormilk.jpg", name: "Lindt Lindor Milk Chocolate", category: "Milk Chocolate", price: 149000, stock: 30, qty: 0, description: "Lindt Lindor Milk sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},    
        {img: "img/milk/thebelgian.jpg", name: "The Belgian Milk Chocolate", category: "Milk Chocolate", price: 75800, stock: 0, qty: 0, description: "The Belgian dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/milk/hersheyskisses.jpg", name: "Hershey's Kisses Milk Chocolate 146gr", category: "Milk Chocolate", price: 85000, stock: 35, qty: 0, description: "Hershey's Kisses dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/milk/godivaultimatechocolatier2.jpg", name: "Godiva Ultimate Chocolatier", category: "Milk Chocolate", price: 5314000, stock: 2, qty: 0, description: "Godiva Ultimate Chocolatier sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/milk/ferrerorocher.jpg", name: "Ferrero Rocher 24 pcs", category: "Milk Chocolate", price: 135000, stock: 30, qty: 0, description: "Ferrero Rocher dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/milk/ghirardelli.jpg", name: "Ghirardelli Milk Chocolate Caramel", category: "Milk Chocolate", price: 128000, stock: 5, qty: 0, description: "Ghirardelli dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/milk/toblerone.jpg", name: "Toblerone Milk Chocolate 100gr", category: "Milk Chocolate", price: 35000, stock: 50, qty: 0, description: "Toblerone dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
    darkItem = [
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},    
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/dark/lindtthinsdark.jpg", name: "Lindt Swiss Thins Dark Chocolate", category: "Dark Chocolate", price: 135000, stock: 125, qty: 0, description: "Lindt Swiss Thins sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
    whiteItem = [
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},    
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/white/lindtlindorwhite.jpg", name: "Lindt Lindor White Chocolate", category: "White Chocolate", price: 163500, stock: 60, qty: 0, description: "Lindt Lindor White sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
    unsweetenedItem = [
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},    
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/unsweetened/hersheysunsweetened.jpg", name: "Hershey's, Natural Unsweetened Cocoa, 23 Oz.", category: "Unsweetened Chocolate", price: 354800, stock: 15, qty: 0, description: "Hershey's, Natural Unsweetened sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
    drinkItem = [
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},    
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {img: "img/drink/ghirardellihotcocoa.jpg", name: "Ghirardelli Double Chocolate Premium Hot Cocoa Mix, 10.5 Oz.", category: "Chocolate Drink", price: 81000, stock: 150, qty: 0, description: "Ghirardelli Double Chocolate Premium Hot Cocoa, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
];

var type = ["milk", "dark", "white", "unsweetened", "drink"];



/**
 * function copyCard() is used to copy one card(or div) in index.html so that even though it was only one card,
 * but it can be dupicated/copy until there are many    */
/**
 * I use '.cloneNode(true)' to CLONE or COPY the HTML element in 'firstCard',
 * and 'firstCard.after(cardCopy)' to put the 'cardCopy' next to 'firstCard'.   */
function copyCard(firstCard, type, i){
    var cardCopy = firstCard.cloneNode(true);
    cardCopy.id = "card" + type + i;
    firstCard.after(cardCopy);
}

/** 
 * 'callPerType' is a function to call all products in one type/category.  */
function callPerType(type, item){
    var firstCard = document.getElementById("card"+type+"1");
    firstCard.getElementsByClassName("img")[0].setAttribute("src", item[0].img);
    firstCard.getElementsByClassName("name")[0].innerHTML = item[0].name;
    firstCard.getElementsByClassName("category")[0].innerHTML = item[0].category;
    firstCard.getElementsByClassName("price")[0].innerHTML = item[0].price;
    if(item[0].stock > 5){
        firstCard.getElementsByClassName("stock")[0].innerHTML = item[0].stock;
    }else if(item[0].stock > 0){
        firstCard.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>only " + item[0].stock + " left!</span>";
    }else{
        firstCard.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>" + 0 + "<span> left!</span>";
    }
    
    for(var i=2; i<=item.length; i++){
        copyCard(firstCard, type, i);
        var cardI = document.getElementById("card"+type+i);
        cardI.getElementsByClassName("img")[0].setAttribute("src", item[i-1].img);
        cardI.getElementsByClassName("name")[0].innerHTML = item[i-1].name;
        cardI.getElementsByClassName("category")[0].innerHTML = item[i-1].category;
        cardI.getElementsByClassName("price")[0].innerHTML = item[i-1].price;
        if(item[i-1].stock > 5){
            cardI.getElementsByClassName("stock")[0].innerHTML = item[i-1].stock;
        }else if(item[i-1].stock > 0){
            cardI.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>only " + item[i-1].stock + " left!</span>";
        }else{
            cardI.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>" + 0 + "<span> left!</span>";
        }

        firstCard = document.getElementById("card"+type+i);
    }
    
    /**
     * The following code is for HIDE some of the content and SHOW
     * them when the element with class '.slidedown' got clicked.   */
    var i=5;
    while(i>4 && i<=item.length){ 
        document.getElementById("card"+type+i).style.display = "none";
        i++;
    }
    document.getElementById(type + "section").querySelector(".slidedown").addEventListener("click", function(){
        var i=5;
        var target;
        while(i>4 && i<=item.length){ 
            target = document.getElementById("card"+type+i);
            if (target.style.display === "none") {
                target.style.display = "block";
            } else {
                target.style.display = "none";
            }
            i++;
        }
        if (document.getElementById("card"+type+5).style.display === "none") {
            document.getElementById(type + "section").querySelector(".chevron").style.transform = "none";
            document.getElementById(type + "section").querySelector(".chevron").style.transition = "0.8s";
        }else{
            document.getElementById(type + "section").querySelector(".chevron").style.transform = "rotate(-270deg)";
            document.getElementById(type + "section").querySelector(".chevron").style.transition = "0.8s";
        }
        
    });
}

/**
 * 'callPerType' is a function to call all products in one type/category.   */
for(var i=0; i<type.length; i++){
    callPerType(type[i], items[i]);
}

/**
 *  navbar color styling    */
for(var i=0; i<4; i++){
    document.getElementsByClassName("navcuscol")[i].addEventListener("mouseover", function(){
        document.getElementsByClassName("navcusbgcol")[0].style.background = "linear-gradient(#ff2a6d 0%, transparent 100%)";
    });
    document.getElementsByClassName("navcuscol")[i].addEventListener("mouseout", function(){
        document.getElementsByClassName("navcusbgcol")[0].style.backgroundColor = "#ff2a6d";
    });
}
window.addEventListener("scroll", function(){
    document.getElementsByClassName("navcusbgcol")[0].style.background = "linear-gradient(#ff2a6d 0%, transparent 100%)";
    if(window.scrollY === 0){
        document.getElementsByClassName("navcusbgcol")[0].style.backgroundColor = "#ff2a6d";
    }
});

/**
 * A glowing clickable text in 'class="recom"' under the 'Store Name'. 
 * Change the glow color to yellow-blue-yellow and so on    */
setInterval(function(){
    for(var i=0; i<3; i++){
        var recoma = document.getElementsByClassName("recoma")[i];
        recoma.classList.toggle("recomjs");
    }
}, 200);


// ITEM DETAIL (in POP UP) //

/**
 * Show pop up when you click each item     */
function clickcard(type, item, i){
    document.getElementById("card"+type+i).addEventListener("click", function(){
        modifyClickedCard(type, item[i-1], i);
    });
}
for(var i=0; i<type.length; i++){
    for(var j=1; j<=items[i].length; j++){
        clickcard(type[i], items[i], j);
    }
}

/**
 * Show pop up when you click the link to Godiva Chocolate in homepage  */
for(var i=0; i<3; i++){
    var recoma = document.getElementsByClassName("recoma")[i];
    recoma.addEventListener("click", function(){
        modifyClickedCard(type[0], items[0][4-1], 4);
    });
}

/**
 * function modifyClickedCard() is used to modify the img, name, category, and other contents in the Pop Up   */
function modifyClickedCard(type, item, i){
    document.getElementsByClassName("cardclickcustom")[0].id = "clickedcard" + type + i;
    
    var clickedcard = document.getElementById("clickedcard"+type + i);

    clickedcard.getElementsByClassName("img")[0].setAttribute("src", item.img);
    clickedcard.getElementsByClassName("name")[0].innerHTML = item.name;
    clickedcard.getElementsByClassName("category")[0].innerHTML = item.category;
    clickedcard.getElementsByClassName("price")[0].innerHTML = 0;
    clickedcard.getElementsByClassName("priceperitem")[0].innerHTML = item.price;
    if(item.stock > 5){
        clickedcard.getElementsByClassName("stock")[0].innerHTML = item.stock;
    }else if(item.stock > 0){
        clickedcard.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>only " + item.stock + " left!</span>";
    }else{
        clickedcard.getElementsByClassName("stock")[0].innerHTML = "<span style='color: red'>" + 0 + "<span> left!</span>";
    }
    clickedcard.getElementsByClassName("description")[0].innerHTML = item.description;

    /**
     * add and subtract Qty from the item to buy it     */
    var qty = item.qty;
    clickedcard.getElementsByClassName("qty")[0].value = qty;
        // console.log("item STock: " + item.stock);
    clickedcard.getElementsByClassName("qty")[0].addEventListener("input", function(){
            // console.log("item STOck: " + item.stock);
        /**
         * if the qty number that we type in the input box is more than the max Qty available, the qty 
         * will be the same as the max Qty, we cannot input more. 
         * The similiar thing happen if it is less than 0. The qty will be 0, we cannot SUBTRACT it more.   */
        var inputvalue = clickedcard.getElementsByClassName("qty")[0].value;
            // console.log("input value = " + inputvalue + " | item STOCk = " + item.stock);
        if(inputvalue > item.stock){
                // console.log("input value > item.stock");
            qty = item.stock;
        }else if(inputvalue < 0){
                // console.log("input value <= 0");
            qty = 0;
        }else{
            qty = inputvalue;
        }

        // clickedcard.getElementsByClassName("qty")[0].value = qty;

        /**
         * if the total price is Not-a-Number(NaN) because we input letter or symbol, the price in the button
         * will show a text instead of number. if the total price is a number, the button will show the price
         * depends on the qty that we add, subtract, or input.  */
        var totalprice = item.price * qty;
        if(isNaN(totalprice)){
            clickedcard.getElementsByClassName("price")[0].innerHTML = "\"Haha... is that a joke???\"";
            clickedcard.getElementsByClassName("cardclickcustbtn")[0].style.pointerEvents = "none";
        }else if(!isNaN(totalprice) && (inputvalue > item.stock)){
            clickedcard.getElementsByClassName("price")[0].innerHTML = totalprice + "/(MAX: " + item.stock + ")";
            clickedcard.getElementsByClassName("cardclickcustbtn")[0].style.pointerEvents = "auto";
        }else if(!isNaN(totalprice)){
            clickedcard.getElementsByClassName("price")[0].innerHTML = totalprice;
            clickedcard.getElementsByClassName("cardclickcustbtn")[0].style.pointerEvents = "auto";
        }
            // console.log("qty from input: "+qty);
    });
    clickedcard.getElementsByClassName("plus")[0].addEventListener("click", function(){
        qty++;
        changeQtyAndPriceValue();
    });
    clickedcard.getElementsByClassName("minus")[0].addEventListener("click", function(){
        qty--;
        changeQtyAndPriceValue();
    });

    /**
     * if the qty number that we ADD or SUBTRACT is more than the max Qty available, the qty 
     * will remains the same as the max Qty, we cannot ADD it more. 
     * The similiar thing happen if it is less than 0. The qty will remains 0, we cannot SUBTRACT it more.   */
    function changeQtyAndPriceValue(){
        if(qty > item.stock){
            qty = item.stock;
        }else if(qty < 0){
            qty = 0;
        }
        var totalprice = item.price * qty;
        if(isNaN(totalprice)){
            clickedcard.getElementsByClassName("qty")[0].value = "^_~";
            clickedcard.getElementsByClassName("price")[0].innerHTML = "\"Haha... is that a joke???\"";
            clickedcard.getElementsByClassName("cardclickcustbtn")[0].style.pointerEvents = "none";
        }else if(!isNaN(totalprice)){
            clickedcard.getElementsByClassName("qty")[0].value = qty;
            clickedcard.getElementsByClassName("price")[0].innerHTML = totalprice;
            clickedcard.getElementsByClassName("cardclickcustbtn")[0].style.pointerEvents = "auto";
        }
    };

    /**
     * decrease the Name's font size if it is more than 34 letters  */
    var numberofcharacters = item.name.length;
    if(numberofcharacters > 34){
        clickedcard.getElementsByClassName("nameclick")[0].style.fontSize = "30px";
    }else{
        clickedcard.getElementsByClassName("nameclick")[0].style.fontSize = "40px";
    }

    /**
     * When the pop up appear   */
    document.getElementsByClassName("cardclick")[0].style.visibility = "visible";
    document.getElementsByClassName("cardclick")[0].style.transform = "translateY(0)";
    document.getElementsByClassName("cardclick")[0].style.transition = "0.5s";
}

/**
 * Add the total item price to the price box in navbar.    */
function modifyTotalItemPrice(type, i){
    document.getElementsByClassName("cardclickcustom")[0].id = "clickedcard" + type + i;

    var clickedcard = document.getElementById("clickedcard"+type + i);
    
    clickedcard.getElementsByClassName("cardclickcustbtn")[0].addEventListener("click", function(){
        var totalItemPrice = 0;
        var totalprice = parseInt(clickedcard.getElementsByClassName("price")[0].innerHTML);
        var totalItemPrice = parseInt(document.getElementsByClassName("totalitemprice")[0].value);
        totalItemPrice += totalprice;
        document.getElementsByClassName("totalitemprice")[0].value = totalItemPrice;
    });

}
modifyTotalItemPrice(type[0], 1);

/**
 * reset the total item price back to 0 when you click the reset butten in the left the 'IDR' text.     */
document.getElementById("resetTotalItemPrice").onclick = function(){
    document.getElementsByClassName("totalitemprice")[0].value = 0;
}

/**
 * Close the item detail when you click the 'X' symbol      */
document.getElementById("closecard").addEventListener("click", function(){
    document.getElementsByClassName("cardclick")[0].style.visibility = "hidden";
    document.getElementsByClassName("cardclick")[0].style.transform = "translateY(600px)";
    document.getElementsByClassName("cardclick")[0].style.transition = "0.4s";
});

/**
 * About */
document.getElementById("about").addEventListener("click", function(){
    document.getElementsByClassName("aboutclick")[0].style.visibility = "visible";
    document.getElementsByClassName("aboutclick")[0].style.transform = "translateY(0px)";
    document.getElementsByClassName("aboutclick")[0].style.transition = "0.5s";
});
/**
 * Close the 'About' when you click the 'X' symbol      */
document.getElementById("closeabout").addEventListener("click", function(){
    document.getElementsByClassName("aboutclick")[0].style.visibility = "hidden";
    document.getElementsByClassName("aboutclick")[0].style.transform = "translateY(-600px)";
    document.getElementsByClassName("aboutclick")[0].style.transition = "0.4s";
});

/**
 * Sound Effects    */

function playHoverSound(){
    var hoverSfx = new Audio("sfx/hover2.ogg");
    hoverSfx.play();
}
function playClick1Sound(){
    var click1Sfx = new Audio("sfx/click1.ogg");
    click1Sfx.play();
}
function playClick2Sound(){
    var click2Sfx = new Audio("sfx/click2.ogg");
    click2Sfx.play();
}

var backSound = new Audio("sfx/Nucleus - Akihiko Ren(렌-レン).m4a");
backSound.loop = true;
var toPlay = document.getElementById("bgSoundOff");
var toPause = document.getElementById("bgSoundOn");

toPlay.onclick = function(){
    backSound.play();
    toPlay.style.display = "none";
    toPause.style.display = "block";
    toPause.innerHTML = "\'Nucleus - Akihiko Ren(렌/レン)\'"
}
toPause.onclick = function(){
    backSound.pause();
    toPlay.style.display = "block";
    toPause.style.display = "none";
}


/**
 * Get the year for copyright in the footer     */
var date = new Date();
document.getElementsByClassName("year")[0].innerHTML = date.getFullYear();
document.getElementsByClassName("year")[1].innerHTML = date.getFullYear();


/**
 * ALERT    */
window.onload = function(){
    alert("************************ ATTENTION!!! ************************\n Sound Effects Will Only Work After You Click The Screen !!!!");
}
