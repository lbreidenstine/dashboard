import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let fButtonTL = gsap.timeline();

fButtonTL.to("#f-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#f-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#f-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#underwater",{alpha:0, duration:1},"press button")
            .from("#underwater-graphic",{alpha:0, duration:1.5},"press button")
            .to("#e-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#e-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#e-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#illumination",{alpha:0, duration:1},"press button")
            .to("#illumination-graphic",{alpha:0, duration:1.5},"press button")
            .to("#underwater",{fill:"#F5CA34", duration:1},"color change")
            .to("#underwater-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button");