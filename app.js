// DOM variables
let titleInput = document.querySelector('.tite-input').addEventListener('input', getTitleInputValue);

let textArea = document.querySelector('textarea').addEventListener('input', getTextAreaValue);

let submitBtn = document.querySelector('.btn').addEventListener('click', submitButton);

// values
let titleInputValue,
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
  let h3 = document.createElement('h3'), 
      pre = document.createElement('pre'), 
      button1 = document.createElement('button'), 
      button2 = document.createElement('button'), 
      code = document.createElement('div'),
      codeCont = document.querySelector('.code-cont');
      
      code.className = 'code'
      h3.className = 'code-title';
      h3.innerHTML = titleInputValue;
      pre.className = 'prettyprint prettyprinted';
      pre.innerHTML = textAreaValaue;
      button1.className = 'edit-btn'
      button2.className = 'delete-btn'

      codeCont.appendChild(code);

  let tags = [h3,pre,button1, button2];



  tags.forEach(e => {
    code.appendChild(e);
  })



  console.log(h3,pre,button1, button2, code, codeCont)
  console.log(tags)


}