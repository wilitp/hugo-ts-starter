(function() {
  // dist/pronounciation.js
  "use strict";
  var $ = document.querySelector.bind(document);
  var p = $("#pronounciation");
  var nameAudio = new Audio("https://www.nameshouts.com/libs/media/guillermo_es.mp3");
  p && p.addEventListener("click", function() {
    nameAudio.play();
  });
})();
