gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.main_header', {opacity: 1}, {
            opacity: 0, scrollTrigger: {
                trigger: '.main_header',
                start: 'center',
                end: '820',
                scrub: true
            }
        },
    )


    let itemsL = gsap.utils.toArray('.left__content .img__block')
    itemsL.forEach(item => {
        gsap.fromTo(item, {opacity: 0, x: -50}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            }
        )
    })

    let itemsR = gsap.utils.toArray('.right__content .img__block')
    itemsR.forEach(item => {
        gsap.fromTo(item, {opacity: 0, x: 50}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: 'top',
                    scrub: true
                }
            }
        )
    })


}