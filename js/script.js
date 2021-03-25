let btn=document.querySelector('.main-page__btn'),
    div=document.querySelector('.main-page'),
    height=div.clientHeight;

btn.addEventListener('click',clickBtn);

function clickBtn(){
  div.classList.toggle('is-open');
  if (div.classList.contains('is-open')){
    div.style.setProperty('height',height+310+'px');
  } else {
    div.style.setProperty('height',height+'px')
  }
  
}