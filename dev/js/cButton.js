import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let cButtonTL = gsap.timeline();

cButtonTL.to("#c-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#c-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#c-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#rotary-saws",{alpha:0, duration:1},"press button")
            .from("#rotary-saws-graphic",{alpha:0, duration:1.5},"press button")
            .to("#b-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#b-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#b-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#grip-tires",{alpha:0, duration:1},"press button")
            .to("#grip-tires-graphic",{alpha:0, duration:1.5},"press button")
            .to("#rotary-saws",{fill:"#F5CA34", duration:1},"color change")
            .to("#rotary-saws-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button");