"use strict";

var container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);
var title = document.createElement('h1');
title.innerText = "Song list";
title.classList.add('mt-4', 'text-uppercase');
container.appendChild(title);
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var list = document.createElement('ol');
list.classList.add("list-group", "list-group-numbered", "p-4");
container.appendChild(list);
playList.forEach(function (item) {
  var listItem = document.createElement("li");
  listItem.classList.add("list-group-item", "list-group-item-primary", "col-4");
  var wrap = document.createElement('div');
  wrap.classList.add("ms-2", "me-auto");
  listItem.appendChild(wrap);
  var author = document.createElement('div');
  author.classList.add("fw-bold");
  author.innerText = item.author;
  wrap.appendChild(author);
  var song = document.createElement('div');
  song.classList.add("ms-3");
  song.innerHTML = "&quot;".concat(item.song, "&quot;");
  wrap.appendChild(song);
  list.appendChild(listItem);
});

function setStyle(el, styles) {
  for (var prop in styles) {
    el.style[prop] = styles[prop];
  }
}

setStyle(container, {
  backgroundColor: 'grey',
  position: 'relative'
});
setStyle(title, {
  marginLeft: '100px',
  paddingTop: '20px',
  color: 'tomato'
}); // Modal window

var button = document.createElement('button');
button.classList.add('btn', 'btn-info');
button.setAttribute("type", "button");
button.innerText = "Push for modal";
container.appendChild(button);
button.onclick = modalWindow;
setStyle(button, {
  position: 'absolute',
  top: '100px',
  right: '200px'
});

function modalWindow() {
  var overlay = document.createElement('div');
  setStyle(overlay, {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: '9999',
    position: 'fixed',
    top: '0px',
    left: '0px'
  });
  var modal = document.createElement('div');
  modal.classList.add('window', 'close');
  var modal_header = document.createElement('div');
  modal_header.classList.add('d-flex', 'justify-content-between', 'p-3', 'align-items-center');
  modal.appendChild(modal_header);
  var modal_title = document.createElement('h3');
  modal_title.innerText = "Modal window";
  modal_header.appendChild(modal_title);
  var btnClose = document.createElement('button');
  btnClose.setAttribute('type', 'button');

  btnClose.onclick = function () {
    overlay.remove();
  };

  btnClose.innerHTML = '&times;';
  setStyle(btnClose, {
    width: '26px',
    height: '26px',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    color: 'red',
    fontSize: '20px',
    fontWeight: '700'
  });
  container.appendChild(modal);
  setStyle(modal, {
    width: '500px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px'
  });
  modal_header.append(btnClose);
  overlay.append(modal);
  document.body.append(overlay);
}