import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let dButtonTL = gsap.timeline();

dButtonTL.to("#d-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#d-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#d-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#deflector",{alpha:0, duration:1},"press button")
            .from("#deflector-graphic",{alpha:0, duration:1.5},"press button")
            .to("#c-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#c-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#c-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#rotary-saws",{alpha:0, duration:1},"press button")
            .to("#rotary-saws-graphic",{alpha:0, duration:1.5},"press button")
            .to("#deflector",{fill:"#F5CA34", duration:1},"color change")
            .to("#deflector-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button")
            .to("#fuel-14",{duration:.5, alpha:0},"color change");