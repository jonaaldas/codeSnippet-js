// DOM variables
let titleInput = document.querySelector('.tite-input').addEventListener('input', getTitleInputValue);

let textArea = document.querySelector('textarea').addEventListener('input', getTextAreaValue);

let submitBtn = document.querySelector('.btn-submit').addEventListener('click', submitButton);

let clearBtn = document.querySelector('.btn-clear').addEventListener('click', clearButton);

let dropDown = document.querySelector('select');
dropDown.addEventListener('change', function() {
  lang = this.value;
});



// values
let titleInputValue,
    textAreaValaue;
    let lang = 'javascript';
    let idTracker = 0;

//Dom elemenets created
let codeCont,condeInner,h3,btn1,btn2,pre,code;
let editTextAreavalue, editTitleInputValue;

// Clears all the data from the textarea
function clearButton(){
  document.querySelector('.tite-input').value = '';
  document.querySelector('textarea').value = '';


  editTextAreavalue = titleInputValue;
  editTitleInputValue = textAreaValaue;

  titleInputValue = null;
  textAreaValaue = null;

  // mental note, delete save button and put back submit button
}

// get the value from the title form 
function getTitleInputValue(){
  titleInputValue = this.value;
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
    parseHtml(titleInputValue,textAreaValaue);
  } 
  idTracker++
  console.log(idTracker)

  
}

//deletes the code block 
function deleteCodeBlock(){
  this.parentNode.remove()
  idTracker--;
}

// Creates dom elements and addes them to the DOM and Prsismjs parese them 
function parseHtml(title, textArea){

  codeCont = document.querySelector(".code-cont");

  condeInner = document.createElement('div');
  condeInner.className = `code-inner`;
  condeInner.setAttribute(`data-value`, `${idTracker}`)
  codeCont.appendChild(condeInner)
  
  h3 = document.createElement("h3");
  h3.className = 'code-title'
  h3.innerText = title;
  
  btn1 = document.createElement("button");
  btn1.className = 'edit-btn btn btn-success'
  btn1.onclick = editCodeBlock;
  btn1.innerText = 'Edit';
  btn2 = document.createElement("button");
  btn2.className = 'delete-btn btn btn-success';
  btn2.onclick = deleteCodeBlock;
  btn2.innerText = 'Delete';
  
  pre = document.createElement("pre");
  code = document.createElement("code");
  pre.appendChild(code);
  
  code.className = `snippet language-${lang}`;
  code.innerText = textArea;
  condeInner.appendChild(pre);
  condeInner.appendChild(h3);
  condeInner.appendChild(btn1);
  condeInner.appendChild(btn2);

  Prism.hooks.add("before-sanity-check", function (env) {
    env.code = env.element.innerText;
    });
    Prism.highlightElement(code);
    clearButton();
}


// edit code block
function editCodeBlock(){

  let edit1, edit2;

  let btnSave = document.createElement('button');
  btnSave.className = 'btn-save btn btn-success';
  btnSave.innerHTML = 'Save';

  let btnSubmit = document.createElement('button');
  btnSubmit.className = 'btn-submit btn btn-success';
  btnSubmit.innerHTML = 'Submit';
  // console.log(document.querySelector('.code-inner').getAttribute('data-value'))
  
  
  btnSave.onclick = () => {
   if(edit1 === undefined & edit2 === undefined){
     alert('please change me ')
   } else{
     document.querySelector('.code-inner').remove();
     document.querySelector('.btn-save').remove();
     document.querySelector('.buttons').appendChild(btnSubmit);
     parseHtml(edit1,edit2);
     document.querySelector('.btn-submit').addEventListener('click', submitButton);
    }
  }

  document.querySelector('.btn-submit').remove();
  document.querySelector('.buttons').appendChild(btnSave);


  document.querySelector('.tite-input').value = editTextAreavalue;
  document.querySelector('textarea').value = editTitleInputValue;
  //
  document.querySelector('.tite-input').addEventListener('input', function(){
    edit1 = this.value;
  });

  document.querySelector('textarea').addEventListener('input', function(){
    edit2 = this.value;
  });

}

