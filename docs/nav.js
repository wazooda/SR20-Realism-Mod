
(function(){var q=document.getElementById('q');if(!q)return;
q.addEventListener('input',function(){var t=q.value.trim().toLowerCase();
document.querySelectorAll('nav.side ul.secs li').forEach(function(li){li.classList.toggle('hide',!!t&&li.textContent.toLowerCase().indexOf(t)<0);});
document.querySelectorAll('nav.side li.page').forEach(function(p){var any=p.querySelector('ul.secs li:not(.hide)');
var self=p.firstElementChild.textContent.toLowerCase().indexOf(t)>=0;p.classList.toggle('hide',!!t&&!any&&!self);
var s=p.querySelector('ul.secs');if(s)s.style.display=t?'block':'';});});})();
