import { gsap } from "gsap";
//import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

//gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin);

import { startupTL } from "./startUp"
import { screenAppearsTL } from "./screenAppears"
import { speedTL } from "./speed"
import { aButtonTL } from "./aButton"
import { bButtonTL } from "./bButton"
import { cButtonTL } from "./cButton"
import { dButtonTL } from "./dButton"
import { eButtonTL } from "./eButton"
import { fButtonTL } from "./fButton"
import { gButtonTL } from "./gButton"

let mainTL = gsap.timeline();

mainTL.add(startupTL)
        .add(screenAppearsTL)
        .add(speedTL)
        .add(aButtonTL)
        .add(bButtonTL,"+=1")
        .add(cButtonTL,"+=1")
        .add(dButtonTL,"+=1")
        .add(eButtonTL,"+=1")
        .add(fButtonTL,"+=1")
        .add(gButtonTL,"+=1");


//console.log(numberThing);

//GSDevTools.create();


