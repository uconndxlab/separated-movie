let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".top", 10, { y: -300 })
  .to(".bg", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "150%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
