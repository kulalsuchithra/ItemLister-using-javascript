//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="Hello";
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);


//GetElement By ID
//console.log(document.getElementById('header-title'));
let headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);

//headerTitle.textContent="Hello";
//console.log(headerTitle);
//headerTitle.innerHTML='<h3>Hello</h3>';
//console.log(headerTitle.innerHTML);
//var header=document.getElementById('main-header');
//console.log(header);
//header.style.borderBottom='solid 3px #000';

//GETELEMENTSBYCLASSNAME
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='hello2';
//for(let i=0;i<4;i++)
//{
//items[i].style.backgroundColor='blue';
//}

//GETELEMENTBYTAGNAME
//var li=document.getElementsByTagName('li');
//console.log(li);
//li[0].textContent='hi..';
//li[0].style.backgroundColor='blue';
//for(let i=0;i<li.length;i++)
//{
  //  li[i].style.backgroundColor='red';
//}

//QUERYSELECTOR
//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
//var submit=document.querySelector('input[type="submit"]');
//submit.value="SEND";
//var item=document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';
//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color='purple';

//TRAVERSING THE DOM
var itemlist=document.querySelector('#items');
//console.log(items.parentNode);
//itemlist.parentNode.style.backgroundColor='blue';
//console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

//CHILDNODE
//console.log(itemlist.childNodes);
//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor='yellow';
//console.log(itemlist.firstChild);
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='hellooooo';
//console.log(itemlist.lastChild);
//console.log(itemlist.lasttElementChild);
//itemlist.lastElementChild.textContent='hellooooopppp';


//nextsiblings
//console.log(itemlist.nextSibling);
//console.log(itemlist.previousSibling);

//console.log(itemlist.nextElementSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color='red';

//CREATING AN ELEMENT
//creating a div
//var newdiv=document.createElement('div');
//Add a class
//newdiv.className='helloooo';
//console.log(newdiv);
//newdiv.id='hello1'; 
//create textnode
//var newdivText=document.createTextNode('hi');
//console.log(newdivText);
//newdiv.appendChild(newdivText);
//console.log(newdiv);    
 //var container=document.querySelector('header .container');
 //var h1=document.querySelector('header h1');
 //console.log(newdiv);
//container.insertBefore(newdiv,h1);

//EVENTS
var btn=document.getElementById('Button');
btn.addEventListener('click',buttonclick);
function buttonclick(e) {
    console.log('clicked');
    document.getElementById('header-title').textContent='changed';
    document.querySelector('#main').style.backgroundColor='pink';

console.log(e);
console.log(e.target);
console.log(e.target.id);
var output=document.getElementById('output');
output.innerHTML='<h3>'+e.target.id+'</h3>';
console.log(e.type);
console.log(e.clientX);
console.log(e.clientY);
console.log(e.offsetX);
console.log(e.offsetY);
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);


}










