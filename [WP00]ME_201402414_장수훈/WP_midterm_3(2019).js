document.getElementById("all1").addEventListener("change", checkItem);

document.getElementById("b1").addEventListener("change", checkAdd);

document.getElementById("c1").addEventListener("click", checkAll);

function checkAdd() {

  var add1 = document.getElementById("b1").value;

  if(isNaN(add1) == false) {
    alert("문자를 입력해주세요");
  }
}

function checkAll() {

  var add1 = document.getElementById("b1").value;

  var inputList = document.getElementsByTagName("INPUT");

  var countCheck=0;

  for(var k=0 ; inputList.length > k; k++) {
    if (inputList[k].checked == true) {
      countCheck = countCheck+1;
    }
  }

  if(add1 =="") {
    alert("주소를 입력해주세요");
  }
  if (countCheck == 0){
    alert("메뉴를 선택해주세요");
  }
  if (add1 !== "" && countCheck > 0){
    alert("주문 완료되었습니다.");
  }
}

function checkItem(e){
  var ch = e.target;
  var chType = ch.getAttribute("type");
  var chValue = ch.checked;

if(chType == "checkbox" && chValue==true) {
    var tId = ch.parentNode.parentNode.getAttribute("id");

    var list = document.getElementById(tId);

    list.getElementsByTagName("INPUT")[1].value = 1;

    var tdList = list.getElementsByTagName("td");
    var liPrice = tdList[2].firstChild.nodeValue;
    var realPrice = parseInt(liPrice);

     //innerHTML로 데이타 값을 넣는 경우
    tdList[4].innerHTML=realPrice;
  }

  else if(chType == "checkbox" && chValue==false) {
    var tId = ch.parentNode.parentNode.getAttribute("id");

    var list = document.getElementById(tId);
    list.getElementsByTagName("INPUT")[1].value=null;

    var tdList = list.getElementsByTagName("td");

    //innerHTML로 데이타 값을 넣는 경우
    tdList[4].innerHTML=null;

  }

else { //chType =="number"일 경우

    //수량의 값이 0보다 큰 값을 입력하면 계산함
    var xx = ch.value;

    if(xx > 0) {

      var tId = ch.parentNode.parentNode.getAttribute("id");
      var list = document.getElementById(tId);
      var tdList = list.getElementsByTagName("td");
      var liPrice = tdList[2].firstChild.nodeValue;
      var real1Price = parseInt(xx*liPrice);

      tdList[4].innerHTML=real1Price;

    }
    else {

      alert("1개 이상을 선택해주세요!");
      ch.value=1;


    }

}

    allSum();

  }

  function allSum() {

    var x = document.getElementsByClassName("aSum");
    var allSum=0;
    for (var i=0;x.length > i;i++) {
      var xValue = x[i].innerHTML;

      if(xValue=="") {
        xValue = 0;
        allSum = xValue+allSum;
      }
      else {
      //alert(isNaN(xValue));
      allSum = parseInt(xValue)+parseInt(allSum);
        //alert("sum " + allSum);
      }
  }

  if (allSum >= 20000) {
    document.getElementById("answer1").innerHTML = allSum;
  }
  else {
    document.getElementById("answer1").innerHTML = allSum+3000;
  }
}
