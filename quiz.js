const ques=[
    {
        question:'What is your Mom\'s name?',
        a:'Narendra Modi', 
        b:'Naman', 
        c:'Suman', 
        d:'Donald Trump', 
        correct:'c'
    }, 
    {
        question:'Which is your dream car?',
        a:'Nano', 
        b:'Santro', 
        c:'Mercedes-Benz S/E Class', 
        d:'Rolls Royce Ghost', 
        corrrect:'c'
    },
    {
        question:'Who is the president of United States',
        a:'Barrack Obama', 
        b:'Donald Trump', 
        c:'Biden', 
        d:'None of these', 
        correct:'c'
    }, 
    
];
const q1El=document.getElementById('q1');
const q2El=document.getElementById('q2');
const q3El=document.getElementById('q3');
const q4El=document.getElementById('q4');
const qq=document.getElementById('question');
const funcCount=0;
updateVal();
function updateVal()
{
    qq.innerText=ques[funcCount].question;
    q1El.innerHTML=ques[funcCount].a;
q2El.innerHTML=ques[funcCount].b;
q3El.innerHTML=ques[funcCount].c;
q4El.innerHTML=ques[funcCount].d;   
}