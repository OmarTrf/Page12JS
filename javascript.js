function Hover(){
	var ele = document.getElementById("but");
	ele.setAttribute("style","background:#4CE434;");
	ele.firstChild.setAttribute("style","text-decoration:underline;");
}
function Oute(){
	var ele = document.getElementById("but");
	ele.setAttribute("style","background:#00bc8a;");
	ele.firstChild.setAttribute("style","text-decoration:none;");
}
function visibl(){
	var ele = document.getElementsByClassName("Pright")[0];
	ele.setAttribute("style","visibility:visible;")
}
function nvisibl(){
	var ele = document.getElementsByClassName("Pright")[0];
	ele.setAttribute("style","visibility:hidden;")
}
n1=0;
function Hovred1(){
  n1=n1+1;
  document.getElementById("pic_1").innerHTML = n1;
}
n2=0;
function Hovred2(){
  n2=n2+1;
  document.getElementById("pic_2").innerHTML = n2;
}
n3=0;
function Hovred3(){
  n3=n3+1;
  document.getElementById("pic_3").innerHTML = n3;
}
 	var els = document.querySelectorAll(".icns");
     	els[0].onclick = function(){els[0].setAttribute("style","color:red;");};
     	els[1].onclick = function(){els[1].setAttribute("style","color:red;");};
     	els[2].onclick = function(){els[2].setAttribute("style","color:red;");};
     	els[3].onclick = function(){els[3].setAttribute("style","color:red;");};
     	els[4].onclick = function(){els[4].setAttribute("style","color:red;");};

function valide(){
	var t = prompt("Entrez votre nom : ")
	if(t == "omar"){
		window.location = "index.html";
	}else{
		alert("Votre incorrect ! ");
	}
}
