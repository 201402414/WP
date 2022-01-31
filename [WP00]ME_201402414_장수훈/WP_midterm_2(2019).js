document.body.onload = saveInfo;

var allList = document.getElementsByTagName("tr");

document.getElementById("c1").addEventListener("click",findInfo);

document.getElementById("d1").addEventListener("click", addInfo);
//document.getElementById("c1").addEventListener("click",showList);

document.getElementById("e1").addEventListener("click", allData);

//클래스 정의
function FileInfo(name, content) {
  this.fileName = name;
  this.fileContent = content;
}

FileInfo.prototype.fullContent = function() {
  return "File name is " + this.fileName+ ", Content is " + this.fileContent + ", length is " + this.fileContent.length
}

var infoArray = [];

//테이블의 내용을 객체형태로 배열로 저장하기
function saveInfo() {

  var trList = document.getElementsByTagName("tr");

  for(var i = 0; trList.length > i; i++) {

    var tdList = trList[i].getElementsByTagName("td");

    var firstValue = tdList[0].firstChild.nodeValue;
    var secondValue = tdList[1].firstChild.nodeValue;

    infoArray[i] = new FileInfo(firstValue, secondValue);

  }
  var bpara = document.getElementById("aa");
  var tpara = document.getElementById("bb");
  bpara.removeChild(tpara);
}


function findInfo() {

  //사용자가 입력한 값을 체크
  var fnameUser = document.getElementById("a1").value;
  var wordUser = document.getElementById("b1").value;

  var bbpara = document.getElementById("aa");

  var numUL = document.getElementsByTagName("ul");

  var anList = document.getElementsByTagName("li");

  var countma=0;

  if (anList.length > 0) {
    for (var j=0; numUL.length > j; j++) {
      bbpara.removeChild(numUL[j]);
    }

  }


  if(wordUser != "" && fnameUser != "") {

    var tpara = document.createElement("ul");
    //var countma=0;

  for(var k = 0; infoArray.length > k ; k++ ) {

       var isFindFname = infoArray[k].fileName.search(fnameUser);
       var isFindContent = infoArray[k].fileContent.search(wordUser);

       if (isFindFname !== -1 && isFindContent!== -1) {

         countma = countma +1;

         var nli = document.createElement("li");
         var nFname = document.createTextNode(infoArray[k].fileName+ " : " + infoArray[k].fileContent);

         nli.appendChild(nFname);
         tpara.appendChild(nli);

         bbpara.appendChild(tpara);
       }
    }

    if(countma == 0) {
      alert("No data found!");
    }
 }

  else if (wordUser != "" && fnameUser == "") {

    var tpara = document.createElement("ul");
    for(var k = 0; infoArray.length > k ; k++ ) {
       var isFindContent = infoArray[k].fileContent.search(wordUser);

       if (isFindContent !== -1) {
         countma = countma +1;
         var nli = document.createElement("li");
         var nFname = document.createTextNode(infoArray[k].fileName+ " : " + infoArray[k].fileContent);

         nli.appendChild(nFname);
         tpara.appendChild(nli);

         bbpara.appendChild(tpara);
       }
    }
    if(countma == 0) {
    alert("No data found!");
  }

  }

  else if (wordUser == "" && fnameUser != "") {
    var tpara = document.createElement("ul");

    for(var k = 0; infoArray.length > k ; k++ ) {
       var isFindFname = infoArray[k].fileName.search(fnameUser);

       if (isFindFname !== -1) {
         countma = countma +1;
         var nli = document.createElement("li");
         var nFname = document.createTextNode(infoArray[k].fileName+ " : " + infoArray[k].fileContent);

         nli.appendChild(nFname);
         tpara.appendChild(nli);

         bbpara.appendChild(tpara);

       }
    }
    if(countma == 0) {
      alert("No data found!");
      }

  }

  else {
    alert("Enter the keywords of list that you want to search.");
  }
}


function addInfo() {

  var fnameUser = document.getElementById("a1").value;
  var wordUser = document.getElementById("b1").value;

  if(wordUser != "" && fnameUser != "") {

    var isFindFname;
    var h;
    var noList = 0;

    for(h = 0; infoArray.length > h ; h++ ) {
       isFindFname = infoArray[h].fileName.search(fnameUser);

        if (isFindFname > -1) {
           alert("We already have the " + fnameUser);
           h = infoArray.length;
         }
        else {
          noList = noList + 1;
         }

    }

    if (noList == infoArray.length) {
      var arrayLen = infoArray.length;
      infoArray[arrayLen] = new FileInfo(fnameUser, wordUser);

      var addPop = infoArray[arrayLen].fullContent();
      alert(addPop);
    }

 }

  else {
    alert("Enter the file name and the keywords of list that you want to save.");
  }
}

function allData() {

  var bbpara = document.getElementById("aa");

  var numUL = document.getElementsByTagName("ul");

  var anList = document.getElementsByTagName("li");

  if (anList.length > 0) {
    for (var j=0; numUL.length > j; j++) {
      bbpara.removeChild(numUL[j]);
    }

  }

  var tpara = document.createElement("ul");
  for(var l=0; infoArray.length > l; l++) {

    var nli = document.createElement("li");
    var nFname = document.createTextNode(infoArray[l].fileName+ " : " + infoArray[l].fileContent);

    nli.appendChild(nFname);
    tpara.appendChild(nli);

    bbpara.appendChild(tpara);


  }

}
