let container = document.createElement('div');
container.classList.add("container");

document.body.appendChild(container);

let title = document.createElement('h1');
title.innerText = "Song list";
title.classList.add('mt-4','text-uppercase');
container.appendChild(title);

let playList = [
    {
     author: "LED ZEPPELIN",    
     song:"STAIRWAY TO HEAVEN"    
    },    
    {    
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

let list = document.createElement('ol');
list.classList.add("list-group", "list-group-numbered","p-4"); 
container.appendChild(list);

// playList.forEach( item => {
//     let listItem = document.createElement("li");
//     listItem.classList.add("list-group-item","list-group-item-primary");
//     listItem.innerText = `${item.author} : ${item.song}`;
//     list.appendChild(listItem);
// });

playList.forEach( item => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item","list-group-item-primary","col-4");
    let wrap = document.createElement('div');
    wrap.classList.add("ms-2", "me-auto");
    listItem.appendChild(wrap);
    let author = document.createElement('div');
    author.classList.add("fw-bold");   
    author.innerText = item.author;
    wrap.appendChild(author);
    let song = document.createElement('div');
    song.classList.add("ms-3");
    song.innerHTML = `&quot;${item.song}&quot;`;
    wrap.appendChild(song);
    list.appendChild(listItem);
});

function setStyle(el, styles){ 
    for(let prop in styles){
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
});

// Modal window


let button = document.createElement('button');
button.classList.add('btn', 'btn-info');
button.setAttribute("type","button");
button.innerText = "Push for modal";
container.appendChild(button);

setStyle(button, {
    position: 'absolute',
    top: '100px',
    right: '200px'
});

let modal = document.createElement('div');
modal.classList.add('window', 'close');
let modal_header = document.createElement('div');
modal_header.classList.add('d-flex', 'justify-content-between','p-3', 'align-items-center');
modal.appendChild(modal_header);
let modal_title = document.createElement('h3');
modal_title.innerText = "Modal window";
modal_header.appendChild(modal_title);
let modal_close = document.createElement('span');
modal_close.innerHTML = '&times';
modal_close.style.fontSize = '40px';
modal_close.style.cursor = 'pointer';
modal_header.appendChild(modal_close);
container.appendChild(modal); 



button.onclick = openMod;
modal_close.onclick = closeMod;


function closeMod(){
    modal.classList.add('close');

}

function openMod(){
    modal.classList.add('blur');
    modal.classList.remove('close');    
}

setStyle(modal, {
    width: '500px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    position: 'fixed',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    top: '50%'   
});


