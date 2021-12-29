// DOM variables
let titleInput = document.querySelector('.tite-input').addEventListener('input', getTitleInputValue);

let textArea = document.querySelector('textarea').addEventListener('input', getTextAreaValue);

let submitBtn = document.querySelector('.btn').addEventListener('click', submitButton);

let clearBtn = document.querySelector('.btn-clear').addEventListener('click', clearButton);

let a = document.querySelector('select');
a.addEventListener('change', function() {
  lang = this.value;
});


// values
let titleInputValue,
    textAreaValaue;
    let lang = 'javascript'

function clearButton(){
  document.querySelector('.tite-input').value = '';
  document.querySelector('textarea').value = '';
  titleInputValue = '';
  textAreaValaue = '';
}

function getTitleInputValue(){
  titleInputValue = this.value;
}

function getTextAreaValue(){
  textAreaValaue = this.value;
}


function submitButton(){
  if(titleInputValue === undefined && textAreaValaue === undefined){
    alert('Do not leave fields empty')
  } else {
    let codeCont = document.querySelector(".code-cont");

    let condeInner = document.createElement('div');
    condeInner.className = 'code-inner';
    codeCont.appendChild(condeInner)
    
    let h3 = document.createElement("h3");
    h3.className = 'code-title'
    h3.innerText = titleInputValue;
    
    let btn1 = document.createElement("button");
    btn1.className = 'edit-btn btn btn-success'
    btn1.innerText = 'Edit';
    let btn2 = document.createElement("button");
    btn2.className = 'delete-btn btn btn-success'
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

    Prism.hooks.add("before-sanity-check", function (env) {
      env.code = env.element.innerText;
      console.log(env.code)
      });
      Prism.highlightElement(code);
  } 
}