new Pageable('.board-content', {
  childSelector: '[data-anchor]',
  anchors: [], // define the page anchors
  pips: true, // display the pips
  animation: 300, // the duration in ms of the scroll animation
  delay: 0, // the delay in ms before the scroll animation starts
  throttle: 50, // the interval in ms that the resize callback is fired
  orientation: 'vertical', // or horizontal
  swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
  freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
  navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
  navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
  infinite: false, // enable infinite scrolling (from 0.4.0)
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: false, // enable / disable mouse drag scrolling
    touch: false, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
});
