import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let aButtonTL = gsap.timeline();

aButtonTL.to("#a-button",{duration:.5, stroke:"#F5CA34"},"press button")
            .to("#a-button-label",{duration:.5, fill:"#F5CA34"},"press button")
            .to("#a-indicator",{duration:.5, fill:"#A02021"},"press button")
            .from("#auto-jacks",{alpha:0, duration:1},"press button")
            .from("#auto-jacks-graphic",{alpha:0, duration:1.5},"press button")
            .to("#auto-jacks",{fill:"#F5CA34", duration:1},"color change")
            .to("#auto-jacks-graphic",{stroke:"#A02021", duration:1},"color change")
            .to("#time-circle",{duration:3, x:"+=15"},"press button");