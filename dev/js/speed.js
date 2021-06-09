import { gsap } from "gsap";

export let speedTL = gsap.timeline();

speedTL.to("#speed-numbers-1",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-2",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-2",{alpha:0, duration:.05, ease:"power3.out"},"speed color")
        .from("#speed-numbers-3",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-3",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-4",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-4",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-5",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-5",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-6",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-6",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-7",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-7",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-8",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-8",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-9",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-9",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-10",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-10",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-11",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-11",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-12",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-numbers-12",{alpha:0, duration:.05, ease:"power3.out"})
        .from("#speed-numbers-13",{alpha:0, duration:.05, ease:"power3.out"})
        .to("#speed-ticks",{duration:2, fill:"#A02021"},"speed color");

