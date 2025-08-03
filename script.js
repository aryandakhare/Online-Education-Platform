var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    //markers: true,
}})

tl.to("#girl", {
  top: "110%",
  width: "200%",
  right: "55vw",  // or adjust to match your layout
}, 'education');

tl.to("#bulb", {
  top: "110%",
  left: "5vw", // match layout direction
}, 'education');

tl.to("#image_2", {
  top: "160%",
  width: "15%",
  right: "5vw", // match layout direction
}, 'education');


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true
  }
});

tl2.to("#girl", {
  top: "200%",         // Adjust based on where your .three section starts
  left: "-15%",         // Approx center of second card
  xPercent: -50,       // Center the image horizontally
  width: "37%",        // Smaller size for fitting into card
}, 'moveToCard');
