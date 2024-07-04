import gsap from 'https://cdn.skypack.dev/gsap';

gsap.timeline().from(".homeFirst__title", {
    opacity: 0,
    duration: 1,
    x: 300,
}).from(".homeFirst__subtitle", {
    opacity: 0,
    scale: .7,
    duration: 1,
}).from(".homeFirst__content > div", {
    opacity: 0,
    scale: .7,
    stagger: 0.4,
}).from(".homeFirst__link", {
    opacity: 0,
    scale: .7,
});

gsap.set('.homeFirst__image_saluteOne', {
    opacity: 0,
})
gsap.set('.homeFirst__image_saluteTwo', {
    opacity: 0,
})
gsap.set('.homeFirst__image_saluteThree', {
    opacity: 0,
})
gsap.set('.homeFirst__image_saluteFour', {
    opacity: 0,
})

gsap.timeline().from(".homeFirst__image_pyramid", {
    opacity: 0,
    duration: 1,
}).from(".homeFirst__image_statue", {
    opacity: 0,
    x: -100,
    duration: 1,
}).from(".homeFirst__image_sam", {
    y: "100vh",
    stagger: 0.4,
}).to(".homeFirst__image_saluteOne",
    {
        opacity: 1,
        duration: .5,
        scale: 1.2,
    }).to(".homeFirst__image_saluteOne",
    {
        duration: .5,
        scale: 1,
    }).to(".homeFirst__image_saluteTwo",
    {
        opacity: .8,
        duration: .5,
        scale: 1.2,
    }).to(".homeFirst__image_saluteTwo",
    {
        duration: .5,
        scale: 1,
    }).to(".homeFirst__image_saluteThree",
    {
        opacity: .7,
        duration: .5,
        scale: 1.2,
    }).to(".homeFirst__image_saluteThree",
    {
        duration: .5,
        scale: 1,
    }).to(".homeFirst__image_saluteFour",
    {
        opacity: .7,
        duration: .5,
        scale: 1.2,
    }).to(".homeFirst__image_saluteFour",
    {
        duration: .5,
        scale: 1,
    });

gsap.timeline({repeat:-1, yoyo:true,}).to('.homeFirst__image_lightLeft', {
    rotation:-20,
    transformOrigin:"50% 100%",
    duration: 6,
    ease: 'none',
})

gsap.timeline({repeat:-1, yoyo:true,}).to('.homeFirst__image_lightRight', {
    rotation:20,
    transformOrigin:"50% 100%",
    duration: 6,
    ease: 'none',
})

gsap.timeline({repeat:-1, yoyo:true,}).to('.homeFirst__image_lightBottom', {
    rotation:20,
    transformOrigin:"50% 100%",
    duration: 4,
    ease: 'none',
})

// gsap.timeline().fromTo('.homeFirst__linkBorderAnimation', {drawSVG:"100%"}, {duration: 10, drawSVG:"50% 50%", stagger: 0.1, stroke:"white",})
//
//
// const bgColor = "#CC0000";
//
//
// const easing = Power0.easeNone;
// // top
// gsap.timeline().fromTo(".top-side", 1,
//     {
//         width: 0,
//         background: bgColor,
//         immediateRender: false,
//         autoRound: false,
//         ease: 1
//     },
//     {
//         width: 200,
//         background: bgColor
//     }
// ).fromTo(".right-side", 1,
//     {
//         height: 0,
//         background: bgColor,
//         immediateRender: false,
//         autoRound: false,
//         ease: easing
//     },
//     {
//         height: 200,
//         background: bgColor
//     }
// ).fromTo(".bottom-side", 1,
//     {
//         width: 0,
//         background: bgColor,
//         immediateRender: false,
//         autoRound: false,
//         ease: easing
//     },
//     {
//         width: 200,
//         background: bgColor
//     }
// ).fromTo(".left-side", 1,
//     {
//         height: 0,
//         background: bgColor,
//         immediateRender: false,
//         autoRound: false,
//         ease: easing
//     },
//     {
//         height: 200,
//         background: bgColor
//     }
// );



