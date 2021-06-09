import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let gButtonTL = gsap.timeline();

gButtonTL.to("#g-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#g-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#g-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#homing-robot",{alpha:0, duration:1},"press button")
            .from("#homing-robot-graphic",{alpha:0, duration:1.5},"press button")
            .to("#f-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#f-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#f-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#underwater",{alpha:0, duration:1},"press button")
            .to("#underwater-graphic",{alpha:0, duration:1.5},"press button")
            .to("#homing-robot",{fill:"#F5CA34", duration:1},"color change")
            .to("#homing-robot-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button")
            .to("#fuel-13",{duration:.5, alpha:0},"color change");