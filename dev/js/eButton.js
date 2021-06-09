import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let eButtonTL = gsap.timeline();

eButtonTL.to("#e-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#e-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#e-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#illumination",{alpha:0, duration:1},"press button")
            .from("#illumination-graphic",{alpha:0, duration:1.5},"press button")
            .to("#d-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#d-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#d-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#deflector",{alpha:0, duration:1},"press button")
            .to("#deflector-graphic",{alpha:0, duration:1.5},"press button")
            .to("#illumination",{fill:"#F5CA34", duration:1},"color change")
            .to("#illumination-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button");