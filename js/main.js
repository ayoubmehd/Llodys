document.querySelector('.header__button').addEventListener('click', function () {
  document.querySelector('.header__nav-elms').classList.toggle('show');
});

ScrollOut({
  onShown: function (element, ctx, scrollingElement) {
    element.classList.add("animated", element.dataset.animate);
  },
  onHidden: function (element, ctx, scrollingElement) {
    element.classList.remove("animated", element.dataset.animate);
  }
});