// DOM variables
let titleInput = document.querySelector('.tite-input').addEventListener('input', getTitleInputValue);

let textArea = document.querySelector('textarea').addEventListener('input', getTextAreaValue);

let submitBtn = document.querySelector('.btn-submit').addEventListener('click', submitButton);

let clearBtn = document.querySelector('.btn-clear').addEventListener('click', clearButton);

let dropDown = document.querySelector('select');
dropDown.addEventListener('change', function() {
  lang = this.value;
});
// 



// values
let titleInputValue,
    textAreaValaue;
    let lang = 'javascript';
    let dataValue = 0;
let codeSnippets = [];
let obj = {}

//Dom elemenets created
let codeCont,condeInner,h3,btn1,btn2,pre,code;
let editTextAreavalue, editTitleInputValue;

// Clears all the data from the textarea
function clearButton(){
  document.querySelector('.tite-input').value = '';
  document.querySelector('textarea').value = '';


  editTextAreavalue = textAreaValaue;
  editTitleInputValue = titleInputValue;

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
    dataValue++;
    obj =   {
      'ID': dataValue,
      'codeTitle': titleInputValue,
      'langauge': lang,
      'textArea': textAreaValaue
    }
    parseHtml(titleInputValue,textAreaValaue,dataValue);
    codeSnippets.push(obj);
    console.log(codeSnippets)
  } 
}

//deletes the code block 
function deleteCodeBlock(){
  //removes from array
  for(let i in codeSnippets){
    if(codeSnippets[i].ID === parseInt(this.parentNode.getAttribute('data-value'))){
        codeSnippets.splice(i,1);
        break;
      }
    }
    this.parentNode.remove();
  console.log(codeSnippets)
}

// Creates dom elements and addes them to the DOM and Prsismjs parese them 
function parseHtml(title, textArea, idIdentifier){

  codeCont = document.querySelector(".code-cont");

  condeInner = document.createElement('div');
  condeInner.className = `code-inner`;
  condeInner.setAttribute(`data-value`, `${idIdentifier}`)
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

//new edit block 
function editCodeBlock(){
  let title, textArea;

  document.querySelector('.tite-input').value = editTitleInputValue;
  document.querySelector('textarea').value = editTextAreavalue;

  document.querySelector('.tite-input').addEventListener('input', function(){
      title = this.value;
    });
  
  document.querySelector('textarea').addEventListener('input', function(){
      textArea = this.value;
    });

  let btnSave = document.createElement('button');
  btnSave.className = 'btn-save btn btn-success';
  btnSave.innerHTML = 'Save';

  
  document.querySelector('.buttons').appendChild(btnSave);

  // save button
  btnSave.onclick = () => {
  if(title === undefined && textArea === undefined){
    this.parentNode.remove();
    this.parentNode.replaceWith(parseHtml(editTitleInputValue, editTextAreavalue ,dataValue));
  } else {
    //If i change the Title but not the Body
    if(title === undefined){
      this.parentNode.remove();
      this.parentNode.replaceWith(parseHtml(editTitleInputValue, textArea ,dataValue));
      //If i change the body but not the title
    } else if (textArea === undefined){
      this.parentNode.remove();
      this.parentNode.replaceWith(parseHtml(title, editTextAreavalue ,dataValue));
      //If i do not change
    } else {
      this.parentNode.remove();
      this.parentNode.replaceWith(parseHtml(title, textArea ,dataValue));
    }
    //remove the save button
    document.querySelector('.btn-save').remove();
    }//from else
  }
}

//  seach feature
function findMach(titleToSearch, arr){
    return  arr.filter( title => {
      const regex = new RegExp(titleToSearch, 'gi');
      return title.codeTitle.match(titleToSearch)
    });
}

// searchfunction
function displayMatches(){
  const matchArray = findMach(this.value, codeSnippets);
  const html = matchArray.map(title => {
      const codeInner = document.querySelectorAll('.code-inner');
      console.log(codeInner)
  })
}
const searchInput = document.querySelector('.search-form');

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)

