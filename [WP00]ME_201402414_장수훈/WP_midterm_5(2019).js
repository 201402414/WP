//click 이벤트가 발생했을 때 부모노드와 자식노드의 값을 바꿈
//document.getElementById("ool").addEventListener("dblclick", exChild);
//document.getElementById("ool").addEventListener("click",exChild);
//dblclick 이벤트가 발생했을 때 형제노드들간의 값을 바꿈
document.getElementById("ool").addEventListener("click",exSibling);


function exSibling(e) {

  var tlist=e.target;

  var curValue = tlist.firstChild.nodeValue;

  var pValue=tlist.parentNode.nodeName;

  //alert(preValue);
  if(pValue == "OL") {

    var preValue=tlist.previousSibling;

    if(preValue==null) {

      var sslist = tlist.nextSibling.firstChild;
      var ssValue = sslist.nodeValue;
      sslist.nodeValue = curValue;
      tlist.firstChild.nodeValue = ssValue;
    }
    else {
      var psslist = tlist.previousSibling.firstChild;
      var pssValue = psslist.nodeValue;
      psslist.nodeValue = curValue;
      tlist.firstChild.nodeValue = pssValue;
    }


}

  if(pValue =="UL") {

    var llist=document.getElementsByTagName("li");

    var uValue= tlist.parentNode.parentNode.nextSibling;
     if(uValue == null) {

      var ulist=llist[1].firstChild.nodeValue;
      llist[1].firstChild.nodeValue=curValue;
      tlist.firstChild.nodeValue = ulist;
    }

    else {
      var uulist=llist[3].firstChild.nodeValue;
      llist[3].firstChild.nodeValue=curValue;
      tlist.firstChild.nodeValue = uulist;
    }



  }

}
