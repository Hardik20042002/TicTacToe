let a1,a2,a3,a4,a5,a6,a7,a8,a9;
a1=document.getElementById("b1");
a2=document.getElementById("b2");
a3=document.getElementById("b3");
a4=document.getElementById("b4");
a5=document.getElementById("b5");
a6=document.getElementById("b6");
a7=document.getElementById("b7");
a8=document.getElementById("b8");
a9=document.getElementById("b9");
let player1=document.getElementById("p1");
let player11=document.getElementById("p11");
let player12=document.getElementById("p12");
let player1win=document.getElementById("wins1");
let player2=document.getElementById("p2");
let player21=document.getElementById("p21");
let player22=document.getElementById("p22");
let player2win=document.getElementById("wins2");
let border1=document.getElementById("div1");
let border2=document.getElementById("div2");
let c1,c2,p1,p2;
let ch='X';
let cnt=1,w1=0,w2=0;
let winner;
function start(){
 div1.style.boxShadow="0px 0px 0px black";
 div2.style.boxShadow="0px 0px 0px black";
 if(w1>w2){
  alert(p1+" is the FINAL WINNER");
 }
 else if(w1<w2){
  alert(p2+" is the FINAL WINNER");
 }
 else if(w1===w2 && w1!==0){
  alert("It is a TIE");
 }
 a1.style.backgroundColor="transparent";
 a2.style.backgroundColor="transparent";
 a3.style.backgroundColor="transparent";
 a4.style.backgroundColor="transparent";
 a5.style.backgroundColor="transparent";
 a6.style.backgroundColor="transparent";
 a7.style.backgroundColor="transparent";
 a8.style.backgroundColor="transparent";
 a9.style.backgroundColor="transparent";
 
 a1.innerHTML="";
 a2.innerHTML="";
 a3.innerHTML="";
 a4.innerHTML="";
 a5.innerHTML="";
 a6.innerHTML="";
 a7.innerHTML="";
 a8.innerHTML="";
 a9.innerHTML="";
 ans.innerHTML="";
 p1=prompt("Enter the name of Player 1");
 p2=prompt("Enter the name of Player 2");
 w1=0;
 w2=0;
 cnt=1;
 ch='X';
 let a=Math.random();
 if(a>0.5){
  c1='X';
  c2='O';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="black";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="red";
  div1.style.boxShadow="10px 10px 10px black";
 }
 else{
  c1='O';
  c2='X';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="red";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="black";
  div2.style.boxShadow="10px 10px 10px black";
 }
 player1.innerHTML="PLAYER 1";
 player11.innerHTML="Name: "+p1;
 player12.innerHTML="Symbol: "+c1;
 player1win.innerHTML="Wins: 0";
 player2.innerHTML="PLAYER 2";
 player21.innerHTML="Name: "+p2;
 player22.innerHTML="Symbol: "+c2;
 player2win.innerHTML="Wins: 0";
 ans.innerHTML="";
}
function perform(a){
  if(a.innerHTML==='X'||a.innerHTML==='O'){
   return;
  }
  if(ch==='X'){
   a.style.color="black";
   if(c1==='X'){
    div1.style.boxShadow="0px 0px 0px red";
    div2.style.boxShadow="10px 10px 10px red";
   }
   else{
    div1.style.boxShadow="10px 10px 10px red";
    div2.style.boxShadow="0px 0px 0px red";
   }
  }
  else{
   a.style.color="red";
   if(c1==='O'){
    div1.style.boxShadow="0px 0px 0px black";
    div2.style.boxShadow="10px 10px 10px black";
   }
   else{
    div1.style.boxShadow="10px 10px 10px black";
    div2.style.boxShadow="0px 0px 0px black";
   }
  }
  a.innerHTML=ch;
  cnt=cnt+1;
  if(ch==='X'){
   ch='O';
  }
  else{
   ch='X';
  }
  if(cnt===10){
   if(!check('X') && !check('O')){
    ans.innerHTML="TIE";
    div1.style.boxShadow="0px 0px 0px black";
    div2.style.boxShadow="0px 0px 0px red";
   }
  }
  else{
   if(check('X')||check('O')){
    ans.innerHTML=winner+" is the winner";
    div1.style.boxShadow="0px 0px 0px black";
    div2.style.boxShadow="0px 0px 0px red";
    if(winner===p1){
     w1=w1+1;
     player1win.innerHTML="Wins: "+w1;
    }
    else{
     w2=w2+1;
     player2win.innerHTML="Wins: "+w2;
    }
   }
  }
}
function check(ch){
 if(a1.innerHTML===ch && a5.innerHTML===ch && a9.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a1.style.backgroundColor="black";
   a1.style.color="white";
   a5.style.backgroundColor="black";
   a5.style.color="white";
   a9.style.backgroundColor="black";
   a9.style.color="white";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
  }
  else{
   a1.style.backgroundColor="red";
   a1.style.color="white";
   a5.style.backgroundColor="red";
   a5.style.color="white";
   a9.style.backgroundColor="red";
   a9.style.color="white";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
  }
  return true;
 }
 else if(a3.innerHTML===ch && a5.innerHTML===ch && a7.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a3.style.backgroundColor="black";
   a3.style.color="white";
   a5.style.backgroundColor="black";
   a5.style.color="white";
   a7.style.backgroundColor="black";
   a7.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  else{
   a3.style.backgroundColor="red";
   a3.style.color="white";
   a5.style.backgroundColor="red";
   a5.style.color="white";
   a7.style.backgroundColor="red";
   a7.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  return true;
 }
 else if(a1.innerHTML===ch && a2.innerHTML===ch && a3.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a1.style.backgroundColor="black";
   a1.style.color="white";
   a2.style.backgroundColor="black";
   a2.style.color="white";
   a3.style.backgroundColor="black";
   a3.style.color="white";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  else{
   a1.style.backgroundColor="red";
   a1.style.color="white";
   a2.style.backgroundColor="red";
   a2.style.color="white";
   a3.style.backgroundColor="red";
   a3.style.color="white";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  return true;
 }
 else if(a4.innerHTML===ch && a5.innerHTML===ch && a6.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a4.style.backgroundColor="black";
   a4.style.color="white";
   a5.style.backgroundColor="black";
   a5.style.color="white";
   a6.style.backgroundColor="black";
   a6.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  else{
   a4.style.backgroundColor="red";
   a4.style.color="white";
   a5.style.backgroundColor="red";
   a5.style.color="white";
   a6.style.backgroundColor="red";
   a6.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  return true;
 }
 else if(a7.innerHTML===ch && a8.innerHTML===ch && a9.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a7.style.backgroundColor="black";
   a7.style.color="white";
   a8.style.backgroundColor="black";
   a8.style.color="white";
   a9.style.backgroundColor="black";
   a9.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
  }
  else{
   a7.style.backgroundColor="red";
   a7.style.color="white";
   a8.style.backgroundColor="red";
   a8.style.color="white";
   a9.style.backgroundColor="red";
   a9.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
  }
  return true;
 }
 else if(a3.innerHTML===ch && a6.innerHTML===ch && a9.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a3.style.backgroundColor="black";
   a3.style.color="white";
   a6.style.backgroundColor="black";
   a6.style.color="white";
   a9.style.backgroundColor="black";
   a9.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
  }
  else{
   a3.style.backgroundColor="red";
   a3.style.color="white";
   a6.style.backgroundColor="red";
   a6.style.color="white";
   a9.style.backgroundColor="red";
   a9.style.color="white";
   // a1.innerHTML="";
   // a2.innerHTML="";
   // a4.innerHTML="";
   // a5.innerHTML="";
   // a7.innerHTML="";
   // a8.innerHTML="";
  }
  return true;
 }
 else if(a1.innerHTML===ch && a4.innerHTML===ch && a7.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a1.style.backgroundColor="black";
   a1.style.color="white";
   a4.style.backgroundColor="black";
   a4.style.color="white";
   a7.style.backgroundColor="black";
   a7.style.color="white";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  else{
   a1.style.backgroundColor="red";
   a1.style.color="white";
   a4.style.backgroundColor="red";
   a4.style.color="white";
   a7.style.backgroundColor="red";
   a7.style.color="white";
   // a2.innerHTML="";
   // a3.innerHTML="";
   // a5.innerHTML="";
   // a6.innerHTML="";
   // a8.innerHTML="";
   // a9.innerHTML="";
  }
  return true;
 }
 else if(a2.innerHTML===ch && a5.innerHTML===ch && a8.innerHTML===ch){
  if(c1===ch){
   winner=p1;
  }
  else{
   winner=p2;
  }
  if(ch==='X'){
   a2.style.backgroundColor="black";
   a2.style.color="white";
   a5.style.backgroundColor="black";
   a5.style.color="white";
   a8.style.backgroundColor="black";
   a8.style.color="white";
   // a1.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a9.innerHTML="";
  }
  else{
   a2.style.backgroundColor="red";
   a2.style.color="white";
   a5.style.backgroundColor="red";
   a5.style.color="white";
   a8.style.backgroundColor="red";
   a8.style.color="white";
   // a1.innerHTML="";
   // a3.innerHTML="";
   // a4.innerHTML="";
   // a6.innerHTML="";
   // a7.innerHTML="";
   // a9.innerHTML="";
  }
  return true;
 }
 return false;
}
function reset(){
 div1.style.boxShadow="0px 0px 0px black";
 div2.style.boxShadow="0px 0px 0px black";
 a1.style.backgroundColor="transparent";
 a2.style.backgroundColor="transparent";
 a3.style.backgroundColor="transparent";
 a4.style.backgroundColor="transparent";
 a5.style.backgroundColor="transparent";
 a6.style.backgroundColor="transparent";
 a7.style.backgroundColor="transparent";
 a8.style.backgroundColor="transparent";
 a9.style.backgroundColor="transparent";
 a1.innerHTML="";
 a2.innerHTML="";
 a3.innerHTML="";
 a4.innerHTML="";
 a5.innerHTML="";
 a6.innerHTML="";
 a7.innerHTML="";
 a8.innerHTML="";
 a9.innerHTML="";
 ans.innerHTML="";
 cnt=1;
 ch='X';
 let a=Math.random();
 if(a>0.5){
  c1='X';
  c2='O';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="black";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="red";
  div1.style.boxShadow="10px 10px 10px black";
 }
 else{
  c1='O';
  c2='X';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="red";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="black";
  div2.style.boxShadow="10px 10px 10px black";
 }
 player1.innerHTML="PLAYER 1";
 player11.innerHTML="Name: "+p1;
 player12.innerHTML="Symbol: "+c1;
 player1win.innerHTML="Wins: "+w1;
 player2.innerHTML="PLAYER 2";
 player21.innerHTML="Name: "+p2;
 player22.innerHTML="Symbol: "+c2;
 player2win.innerHTML="Wins: "+w2;
}
function remove(){
 div1.style.boxShadow="0px 0px 0px black";
 div2.style.boxShadow="0px 0px 0px black";
 ch='X';
 cnt=1;
 if(w1>w2){
  alert(p1+" is the FINAL WINNER");
 }
 else if(w1<w2){
  alert(p2+" is the FINAL WINNER");
 }
 else if(w1===w2){
  alert("It is a TIE");
 }
 w1=0;
 w2=0;
 let a=Math.random();
 if(a>0.5){
  c1='X';
  c2='O';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="black";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="red";
  div1.style.boxShadow="10px 10px 10px black";
 }
 else{
  c1='O';
  c2='X';
  player1.style.color="black";
  player11.style.color="black";
  player12.style.color="black";
  player1win.style.color="black";
  border1.style.borderColor="red";
  player2.style.color="black";
  player21.style.color="black";
  player22.style.color="black";
  player2win.style.color="black";
  border2.style.borderColor="black";
  div2.style.boxShadow="10px 10px 10px black";
 }
 a1.innerHTML="";
 a2.innerHTML="";
 a3.innerHTML="";
 a4.innerHTML="";
 a5.innerHTML="";
 a6.innerHTML="";
 a7.innerHTML="";
 a8.innerHTML="";
 a9.innerHTML="";
 a1.style.backgroundColor="transparent";
 a2.style.backgroundColor="transparent";
 a3.style.backgroundColor="transparent";
 a4.style.backgroundColor="transparent";
 a5.style.backgroundColor="transparent";
 a6.style.backgroundColor="transparent";
 a7.style.backgroundColor="transparent";
 a8.style.backgroundColor="transparent";
 a9.style.backgroundColor="transparent";
 ans.innerHTML="";
 player1.innerHTML="PLAYER 1";
 player11.innerHTML="Name: "+p1;
 player12.innerHTML="Symbol: "+c1;
 player1win.innerHTML="Wins: "+w1;
 player2.innerHTML="PLAYER 2";
 player21.innerHTML="Name: "+p2;
 player22.innerHTML="Symbol: "+c2;
 player2win.innerHTML="Wins: "+w2;
}