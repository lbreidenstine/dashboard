import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#mach-5-logo",{transformOrigin:"center"});

export let startupTL = gsap.timeline();

startupTL.to("#screen",{duration:1})
        .from("#mach-5-logo",{duration:2, drawSVG: 0})
        .to("#mach-5-logo",{duration:.25, scale:1.15})
        .to("#mach-5-logo",{duration:.5, scale:1})
        .to("#mach-5-logo",{duration:1, scale:.4, y:"-=207", x:"+=.5"})
        .from("#end-logo-position",{alpha:0, duration:.5},"switch")
        .to("#mach-5-logo",{alpha:0, duration:.5},"switch")
        .from("#five-and-circle",{alpha:0, duration:.5},"switch");

