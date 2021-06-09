import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let bButtonTL = gsap.timeline();

bButtonTL.to("#b-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#b-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#b-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#grip-tires",{alpha:0, duration:1},"press button")
            .from("#grip-tires-graphic",{alpha:0, duration:1.5},"press button")
            .to("#a-button",{duration:.5, stroke:"#FEFEFE"},"press button")
            .to("#a-button-label",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#a-indicator",{duration:.5, fill:"#FEFEFE"},"press button")
            .to("#auto-jacks",{alpha:0, duration:1},"press button")
            .to("#auto-jacks-graphic",{alpha:0, duration:1.5},"press button")
            .to("#grip-tires",{fill:"#F5CA34", duration:1},"color change")
            .to("#grip-tires-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button")
            .to("#fuel-15",{duration:.5, alpha:0},"color change");