document.body.onload = init();

//Loading json from file
  function serverRequest(name){
    var request = new XMLHttpRequest();
    request.open("GET", name, false);
    request.send(null);
    return request;
}




//create elements
function addThumb(postItem) {
  var li = document.createElement("li");
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
  //var h3 = document.createElement("h3");
  //var p = document.createElement("p");
  var a = document.createElement("a");

  img.setAttribute("src", postItem.imgThumb);

  //var ptitle = document.createTextNode(postItem.title);
  //var pinfo = document.createTextNode(postItem.info);

  //h3.appendChild(ptitle);
  //p.appendChild(pinfo);
  document.getElementById("thumbs").appendChild(li);
  li.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  //figcaption.appendChild(h3);
  //figcaption.appendChild(p);


  /*if (postItem.link != null){
  a.setAttribute("href",postItem.link);
  a.appendChild(document.createTextNode("youtube"));
  p.appendChild(a);
  p.appendChild(document.createTextNode("."));
}*/
}

function addLarges(postItem, imgName) {
  var li = document.createElement("li");
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
//  var h3 = document.createElement("h3");
//  var p = document.createElement("p");

img.setAttribute("src",postItem.imgLarge);

//var ptitle = document.createTextNode(postItem.title);
//var pinfo = document.createTextNode(postItem.info);

//h3.appendChild(ptitle);
//p.appendChild(pinfo);
document.getElementById("larges").appendChild(li);
li.appendChild(figure);
figure.appendChild(figcaption);
figure.appendChild(img);
//figcaption.appendChild(h3);
//figcaption.appendChild(p);
}

//init
  function init(){

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pagelink = page.slice(0, page.indexOf("."));

    var request = serverRequest(pagelink+".json");
    var jsondata = JSON.parse(request.responseText);

    //THUMBNAILS
    for (var prop in jsondata){
      if (jsondata.hasOwnProperty(prop)) addThumb(jsondata[prop]);
    }

    //LARGES
    for (var prop in jsondata){
      if (jsondata.hasOwnProperty(prop)) addLarges(jsondata[prop]);
    }

  }
