const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Id est et excepteur ipsum occaecat irure mollit consectetur cillum qui duis nisi. Culpa nostrud consectetur id Lorem eu reprehenderit aliquip cupidatat officia excepteur culpa laboris pariatur. Deserunt mollit enim aliquip incididunt. Cillum laboris commodo commodo id est fugiat exercitation nisi proident incididunt amet eiusmod duis excepteur. Mollit officia sunt adipisicing non elit do adipisicing dolore. Ex irure voluptate eiusmod culpa excepteur exercitation. Fugiat et occaecat minim quis voluptate deserunt deserunt.'


let indexText = 0;
const time = 70;

const addLeter = () => {
    spnText.textContent += txt[indexText];
    indexText ++;
    if(indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = ()=> {
    console.log("ok");
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLeter, time);

setInterval(cursorAnimation, 400);



