import React from 'react';
import './Content.css'
import Background from './BackImage'

let curDate = new Date(2020, 8, 7, 22)
//let curDate = new Date()
curDate = curDate.getHours()
let greetings = " ";
let title = " ";
let cssStyle= {};


if(curDate >= 1 && curDate <12){
    greetings = "Good morning";
    title = "Have a nice day!!";
    cssStyle.color="red"
  } else if(curDate >=12 && curDate <= 19){
    greetings = "Good Afternoon";
    title= "I hope you doing well!!";
    cssStyle.color="orange"
  } else if(curDate >19 && curDate < 24)
  {
    greetings = "Good night";
    title = "Beautiful night ahead!!"
    cssStyle.color="skyblue"
  }
  
function Content(){
    return(
<div className="content">
<Background />
<h1>Hello Sir, <span style={cssStyle}> {greetings}</span> </h1>
<h2><span style={cssStyle}>{title}</span></h2>
<h1>Welcome to my website</h1>

</div>
    )
}
export default Content;