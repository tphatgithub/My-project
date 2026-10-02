let flowers = [
    "flower_spring.png",
    "flower_summer.png",
    "flower_autumn.png",
    "flower_winter.png"
];

let currentFlower = 0;


setInterval(() => {
    currentFlower = (currentFlower + 1) % flowers.length;
}, 30 * 1000);



function createFlower() {
    let flower = document.createElement("div");

    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.setProperty(
        "--wind1",
        (Math.random() * 200 - 100) + "px"
    );

    flower.style.setProperty(
        "--wind2",
        (Math.random() * 300 - 150) + "px"
    );

    flower.style.setProperty(
        "--wind3",
        (Math.random() * 400 - 200) + "px"
    );

    flower.style.setProperty(
        "--wind4",
        (Math.random() * 500 - 250) + "px"
    );

    flower.style.setProperty(
        "--flower-image",
        `url("images/${flowers[currentFlower]}")`
    );

    flower.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document
        .getElementById("falling-flowers")
        .appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 100);


setTimeout(() => {
    let search = document.getElementById("searchInput");

    if (search) {
        search.focus();
    }
}, 500);


document.addEventListener("click", function (event) {

    let ripple = document.createElement("div");

    ripple.className = "ripple";

    ripple.style.left = event.clientX + "px";
    ripple.style.top = event.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);

});