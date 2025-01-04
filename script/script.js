const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click on this box below to add a new list item. Click an existing list item to change its text to something else. (Good luck deleting list items!)';

document.body.appendChild(info);
document.body.appendChild(list);

var music = new Audio('Nutcracker Suite for Piano - Tchaikovsky.mp3');

function playMusic(){
  music.play();
  }

function pauseMusic(){
  music.pause();
}

{document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65) {
    document.getElementById('barksound').play();
  }
});
}
list.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
