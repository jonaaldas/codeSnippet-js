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
    let lang = 'javascript';

//Dom elemenets created
let codeCont,condeInner,h3,btn1,btn2,pre,code;

// Clears all the data from the textarea
function clearButton(){
  document.querySelector('.tite-input').value = '';
  document.querySelector('textarea').value = '';
  titleInputValue = null;
  textAreaValaue = null;
}

// get the value from the title form 
function getTitleInputValue(){
  titleInputValue = this.value;
  console.log(typeof titleInputValue)
}

// get the value from the textArea
function getTextAreaValue(){
  textAreaValaue = this.value;
}


// checks if values of textarea and title 
function submitButton(){
  if(typeof titleInputValue != 'string' && typeof textAreaValaue != 'string'){
    alert('Do not leave fields empty')
  } else if(typeof titleInputValue === 'string' && typeof textAreaValaue === 'string'){
    parseHtml();
  } 
}

//deletes the code block 
function deleteCodeBlock(){
  this.parentNode.remove()
}


// Creates dom elements and addes them to the DOM and Prsismjs parese them 
function parseHtml(){
  console.log(titleInputValue,textAreaValaue)
  codeCont = document.querySelector(".code-cont");

  condeInner = document.createElement('div');
  condeInner.className = 'code-inner';
  codeCont.appendChild(condeInner)
  
  h3 = document.createElement("h3");
  h3.className = 'code-title'
  h3.innerText = titleInputValue;
  
  btn1 = document.createElement("button");
  btn1.className = 'edit-btn btn btn-success'
  btn1.innerText = 'Edit';
  btn2 = document.createElement("button");
  btn2.className = 'delete-btn btn btn-success';
  btn2.onclick = deleteCodeBlock;
  btn2.innerText = 'Delete';
  
  pre = document.createElement("pre");
  code = document.createElement("code");
  pre.appendChild(code);
  
  code.className = `snippet language-${lang}`;
  code.innerText = textAreaValaue;
  condeInner.appendChild(pre);
  condeInner.appendChild(h3);
  condeInner.appendChild(btn1);
  condeInner.appendChild(btn2);

  Prism.hooks.add("before-sanity-check", function (env) {
    env.code = env.element.innerText;
    });
    Prism.highlightElement(code);
}

