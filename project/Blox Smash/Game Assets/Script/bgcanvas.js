const bgcanvas = document.getElementById("bgcanvas");
const bgctx = bgcanvas.getContext("2d");
bgcanvas.width = window.innerWidth;
bgcanvas.height = window.innerHeight;
const BgImageUrl = "../../Game Assets/img/game-background.jpg"
let bgElement = document.querySelector("body")
let BgImage = document.createElement("img");
BgImage.src = BgImageUrl;
BgImage.addEventListener("load", () => {
    bgctx.drawImage(BgImage, 0, 0, bgcanvas.width, bgcanvas.height)
    async function loading() {
        await sleep(1000)
        document.getElementById("loading").className = "fadeOut"
        await sleep(2000)
        document.getElementById("loading").style.display = "none"

    }
    loading();
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}