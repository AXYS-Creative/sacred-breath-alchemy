import { maxXxl, maxSm } from "../utility.js";

let colorWhite = "#fafafa";
let colorGold = "#d1b768";
let colorPink = "#d982e0";

window.onload = function () {
  Particles.init({
    selector: ".particles",
    maxParticles: maxXxl ? 24 : 48, // 100
    sizeVariations: 3, // 3
    speed: maxXxl ? 0.25 : 0.5, // 0.5
    color: colorPink,
    // color: colorGold,
    minDistance: maxSm ? 48 : 120, // 120, for connected lines
    connectParticles: true,
  });
};
