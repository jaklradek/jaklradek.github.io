document.body.onload = init();

//Loading json from file
  function serverRequest(name){
    var request = new XMLHttpRequest();
    request.open("GET", name, false);
    request.send(null);
    return request;
}


//create elements
function addThumb(postItem, imgName) {

  var li = document.createElement("li");
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
  var h3 = document.createElement("p");
  var p = document.createElement("h3");

  img.setAttribute("src", "img/thumb/" + imgName + ".png");

  var ptitle = document.createTextNode(postItem.title);
  var pinfo = document.createTextNode(postItem.info);

  h3.appendChild(ptitle);
  p.appendChild(pinfo);
  document.getElementById("thumbs").appendChild(li);
  li.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  figcaption.appendChild(p);
  figcaption.appendChild(h3);
}

function addLarges(postItem, imgName) {

var li = document.createElement("li");
var figure = document.createElement("figure");
var img = document.createElement("img");
var figcaption = document.createElement("figcaption");
var h3 = document.createElement("p");
var p = document.createElement("h3");

img.setAttribute("src", "img/large/" + imgName + ".png");
console.log(img.getAttribute("src", "img/large/" + imgName + ".png"));

var ptitle = document.createTextNode(postItem.title);
var pinfo = document.createTextNode(postItem.info);

h3.appendChild(ptitle);
p.appendChild(pinfo);
document.getElementById("larges").appendChild(li);
li.appendChild(figure);
figure.appendChild(figcaption);
figure.appendChild(img);
figcaption.appendChild(p);
figcaption.appendChild(h3);
}

//init
  function init(){

    var request = serverRequest("text.json");
    var jsondata = JSON.parse(request.responseText);

    //THUMBNAILS
    for (var prop in jsondata){
      if (jsondata.hasOwnProperty(prop)) addThumb(jsondata[prop], prop);
      console.log(prop);
    }

    //LARGES
    for (var prop in jsondata){
      if (jsondata.hasOwnProperty(prop)) addLarges(jsondata[prop], prop);
      console.log(prop);
    }

  }
