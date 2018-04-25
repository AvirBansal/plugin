console.log("running 3");

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://drive.google.com/open?id=1SzPuTzpCXCZs3xNqkmzP6mP0v49eEXLI';
head.appendChild(script);

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('link');
style.href = 'https://drive.google.com/open?id=1S01ZrG_8EDmzPCrxEsOUPJEptaGT8ylL';
style.type = 'text/css';
style.rel = 'stylesheet';
head.appendChild(style);

var div = document.createElement("div");
div.className = 'dropdown';

  var img = document.createElement("img");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png";
  img.height = '25';
  img.className = "dropbtn";
  img.onclick = "myFunc()";
  div.appendChild(img);

    var div2 = document.createElement("div");
    div2.id = "myDropdown";
    div2.className = "dropbtndown-content";

      var a1 = document.createElement("a");
      a1.innerHTML = "Home";
      div2.appendChild(a1);

      var a2 = document.createElement("a");
      a2.innerHTML = "Content";
      div2.appendChild(a2);

  div.appendChild(div2);

var src = document.getElementById("gbwa").parentNode;

src.insertBefore(div, src.childNodes[0]);
