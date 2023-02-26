const beerImage = document.querySelector('kirinichiban.png');

const tl = gsap.timeline({paused: true});
tl.set(beerImage, {scale: 0, opacity: 0})
  .to(beerImage, {duration: 0.5, scale: 1.2, opacity: 1})
  .to(beerImage, {duration: 0.3, scale: 1, opacity: 1})
  .to(beerImage, {duration: 0.5, scale: 0, opacity: 0});

beerImage.addEventListener('click', () => {
  tl.play();
});
