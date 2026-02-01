const yearChanger=document.querySelector('.year2');
const monthChanger=document.querySelector('.monthe');
const Hambuger=document.querySelector('.hamburger');
const navBar=document.querySelector('.navics');
const closeIcon=document.querySelector('.close-box');
const bodyTab=document.querySelector('body')


const months =['januray' , 'february' , 'march' , 'aprill' , 'may' , 'june' , 'july' , 'august'
  , 'september' , 'october' , 'november' , 'december'
]

  function monthFunction(){
  let currentMonth=new Date().getMonth();
  return (months[currentMonth]);
}

yearChanger.innerHTML=new Date().getFullYear();
monthChanger.innerHTML=monthFunction();


Hambuger.addEventListener('click' , ()=>{
  navBar.classList.add('active11');
  bodyTab.classList.add('active10')
})
closeIcon.addEventListener('click' , ()=>{
  navBar.classList.remove('active11');
  bodyTab.classList.remove('active10')
})
document.addEventListener('click' , (e)=>{
  if( !closeIcon.contains(e.target) && !Hambuger.contains(e.target)){
    navBar.classList.remove('active11');
  }
})

