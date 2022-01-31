function fun() {
  var input1 = prompt("Enter item name");
  if (input1 == null || input1 == "") {
    alert("Are you leaving?");
    return;
  }
  var input2 = prompt("Enter URL");
  if (input2 == null || input1 == "") {
    alert("Are you really leave?");
    return;
  }
  var list = document.createElement('li');
  var aa = document.createElement('a');
  aa.href = input2;
  aa.setAttribute( 'target', '_blank' )
  var text = document.createTextNode(input1);
  aa.appendChild(text);
  var olTag = document.getElementById('site')
  list.appendChild(aa);
  olTag.appendChild(list);
}
