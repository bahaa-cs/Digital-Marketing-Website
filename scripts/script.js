let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.partner-section',
        pin: true,
        start: 'top top',
        end: '+=500',
        scrub: 1,
        snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 1 },
            delay: 0.2,
            ease: 'power1.inOut'
        }
    }
});

tl.addLabel('start')
    .from('.partner-section .paragraph-card', { scale: 0.3, rotation: 45, autoAlpha: 0, stagger: 0.2 })
    .addLabel('color')
    .from('.partner-section .paragraph-card', { backgroundColor: '#28a92b' })
    .addLabel('spin')
    .to('.partner-section .paragraph-card', { rotation: 360, stagger: 0.2 })
    .addLabel('end');
