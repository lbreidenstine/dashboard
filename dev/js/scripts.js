import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin);

import { startupTL } from "./startUp"
import { screenAppearsTL } from "./screenAppears"

let mainTL = gsap.timeline();

mainTL.add(startupTL)
        .add(screenAppearsTL);


//console.log(numberThing);

GSDevTools.create();


