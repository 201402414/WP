//table의 리스트를 바꾸는 예제

var ptable = document.getElementById("t1");
document.getElementById("a1").addEventListener("click", addData);

ptable.addEventListener("click", changeLo);

var numDT = 0;

function addData() {

  var newDT = prompt("새로운 데이타를 입력해주세요:", "");
  if (newDT == "") {
    alert("데이타를 입력하지 않았습니다. ");
  }

  else {
  numDT = numDT +1;
  var nTr = document.createElement("tr");
  var nTd = document.createElement("td");
  var nTd1 = document.createElement("td");
  var numVal = document.createTextNode(numDT);
  var dataVal = document.createTextNode(newDT);

  nTd.appendChild(numVal);
  nTd1.appendChild(dataVal);

  nTr.appendChild(nTd);
  nTr.appendChild(nTd1);

  ptable.appendChild(nTr);
  }
}

function changeLo(e) {

  var et = e.target;
  var cName = et.nodeName;
  var pnode = et.parentNode; //tr 노드
  var ppnode = pnode.parentNode; //table 노드
  var cNum = pnode.childNodes[0].firstChild.nodeValue;
  var cValue = pnode.childNodes[1].firstChild.nodeValue;



  if( cName == "TD") {

  var numLo = prompt("변경할 위치 번호를 입력해주세요:", "");
  var nl = parseInt(numLo);

  if (numLo == "" || isNaN == true) {
    alert("데이타를 입력하지 않았거나 숫자가 아닙니다. ");
  }

  else if (cNum == nl) {
    alert("현재 위치 번호와 같습니다. 다른 번호를 입력해주세요");
  }

  else {

    ppnode.removeChild(pnode);
    var trList = document.getElementsByTagName("tr");

    var nTr1 = document.createElement("tr");
    var nTd1 = document.createElement("td");
    var nTd11 = document.createElement("td");
    var numVal1 = document.createTextNode(nl);
    var dataVal1 = document.createTextNode(cValue);

    nTd1.appendChild(numVal1);
    nTd11.appendChild(dataVal1);

    nTr1.appendChild(nTd1);
    nTr1.appendChild(nTd11);

    ptable.insertBefore(nTr1,trList[nl-1] );

    alert(trList.length);
    alert("cName is" + cNum);
    alert("nl is " + nl);

    for( var i = 0 ; trList.length - 1 > i ; i++) {
      trList[i].childNodes[0].firstChild.nodeValue = i+1;
    }
/*
    if (nl < cNum) {
      for( var i = 0 ; trList.length - 1 > i ; i++) {
        trList[i].childNodes[0].firstChild.nodeValue = i+1;
      }
    }

    else if ( nl > cNum) {
      alert("test");
      var cn = parseInt(cNum);
      for( var i = cn, j=0 ; trList.length - cn -1 > j ; i++, j++) {

        trList[i-1].childNodes[0].firstChild.nodeValue = i;

      }

    }
    */

  }

  }

}
