var count = 1;
var value = 17.90.toFixed(2);
var title = "Caramel Ribbon";
var description = `Caramel ribbon meets coffee, milk and ice for rendezvous
in blender, while whipped cream and buttery caramel sauce
layer the love on top. To changes thinks up, try it with
a hot expresso shot poured right over the top.`;

window.onload = () => {
    document.getElementById("title").innerHTML = title;
    document.getElementById("description").innerHTML = description;
    document.getElementById("text-field").innerHTML = count;
    document.getElementById("value").innerHTML = value;
}

function sideMenu(state) {
    if (state === 1) {
        var menu = document.querySelector("#sideMenu");
        menu.setAttribute('class', 'open');
    } else if (state === 0) {
        var menu = document.querySelector("#sideMenu");
        menu.setAttribute('class', 'close');
    }
}

function minus() {
    if (count <= 1) {
        count = 1;
        document.getElementById("text-field").innerHTML = count;
    } else {
        count--;
        document.getElementById("text-field").innerHTML = count;
    }
}

function plus() {
    count++;
    document.getElementById("text-field").innerHTML = count;
}

function item1() {
    var nav = document.querySelector("#coffee");
    nav.setAttribute('src', 'img/products/item1.png');

    document.body.style.setProperty('--color-principal', '#48A878');

    title = "Caramel Ribbon";
    document.getElementById("title").innerHTML = title;
    description = `Caramel ribbon meets coffee, milk and ice for rendezvous
    in blender, while whipped cream and buttery caramel sauce
    layer the love on top. To changes thinks up, try it with
    a hot expresso shot poured right over the top.`;
    document.getElementById("description").innerHTML = description;

    count = 1;
    document.getElementById("text-field").innerHTML = count;

    value = 17.90.toFixed(2);
    document.getElementById("value").innerHTML = value;
}

function item2() {
    var nav = document.querySelector("#coffee");
    nav.setAttribute('src', 'img/products/item2.png');

    document.body.style.setProperty('--color-principal', '#D16374');

    title = "Mocha Chocolate Ribbon";
    document.getElementById("title").innerHTML = title;
    description = `Caramel ribbon meets coffee, milk and ice for rendezvous
    in blender, while whipped cream and buttery caramel sauce layer the love
    on top. To changes thinks up, try it with a hot expresso shot poured
    right over the top.`;
    document.getElementById("description").innerHTML = description;

    count = 1;
    document.getElementById("text-field").innerHTML = count;

    value = 37.90.toFixed(2);
    document.getElementById("value").innerHTML = value;
}

function item3() {
    var nav = document.querySelector("#coffee");
    nav.setAttribute('src', 'img/products/item3.png');

    document.body.style.setProperty('--color-principal', '#E77D5D');

    title = "Ice Coffee Chantilly";
    document.getElementById("title").innerHTML = title;
    description = `Caramel ribbon meets coffee, milk and ice for rendezvous
    in blender, while whipped cream and buttery caramel sauce layer the love
    on top. To changes thinks up, try it with a hot expresso shot poured
    right over the top.`;
    document.getElementById("description").innerHTML = description;

    count = 1;
    document.getElementById("text-field").innerHTML = count;

    value = 27.90.toFixed(2);
    document.getElementById("value").innerHTML = value;
}

