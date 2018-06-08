/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('home'), {
    dotColor: '#ff5e00',
    lineColor: '#ff5e00'
  });
  let intro = document.getElementsByClassName('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);