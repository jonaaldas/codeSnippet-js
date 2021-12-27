// DOM variables
let titleInput = document.querySelector('.tite-input').addEventListener('input', getTitleInputValue);

let textArea = document.querySelector('textarea').addEventListener('input', getTextAreaValue);

let submitBtn = document.querySelector('.btn').addEventListener('click', submitButton);

let a = document.querySelector('select');

a.addEventListener('change', function() {
  lang = this.value
});



// values
let titleInputValue,
    lang,
    textAreaValaue;


function getTitleInputValue(){
  titleInputValue = this.value
  console.log(titleInputValue)
}

function getTextAreaValue(){
  textAreaValaue = this.value;
  console.log(textAreaValaue)
}


function submitButton(){
let codeCont = document.querySelector(".code-cont");

let condeInner = document.createElement('div');
condeInner.className = 'code-inner';
codeCont.appendChild(condeInner)


let h3 = document.createElement("h3");
h3.className = 'code-title'
h3.innerText = titleInputValue;


let btn1 = document.createElement("button");
btn1.className = 'edit-btn'
btn1.innerText = 'Edit';
let btn2 = document.createElement("button");
btn2.className = 'delete-btn'
btn2.innerText = 'Delete';

let pre = document.createElement("pre");
let code = document.createElement("code");
pre.appendChild(code);

code.className = `snippet language-${lang}`;
code.innerText = textAreaValaue;
condeInner.appendChild(pre);

condeInner.appendChild(h3);
condeInner.appendChild(btn1);
condeInner.appendChild(btn2);

/*
This is required, otherwise the elements are shown in one line.
Taken from: https://github.com/PrismJS/prism/issues/1764#issuecomment-467677558
*/
Prism.hooks.add("before-sanity-check", function (env) {
env.code = env.element.innerText;
console.log(env.code)
});
Prism.highlightElement(code);
}