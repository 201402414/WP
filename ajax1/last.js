imgData = document.getElementById('data');

imgData.setAttribute('draggable','true');
imgData.setAttribute('ondragstart','drag(event)');

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var a = document.getElementById(ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var dataValue = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(dataValue));
    console.log(dataValue);
    var divNode = document.getElementById(dataValue).parentNode;
    console.log(divNode.id);
    $.post("drag2.php", { name: divNode.id , imgData: dataValue }, function(data) { alert("Data Loaded: " + data); });
  }

  function getData(){
    $.get("drag3.php",  function(data) {
      var arr = data.split('|');
      var one = 0;
      var two = 0;
      for ( var i = 0 ; i < arr.length ; i++) {
        if (arr[i] == 'div1') {
          one++;
        } else if(arr[i] == 'div2'){
          two++;
        }
      }

      var divOne = document.getElementById('div1');

      for ( var j = 0 ; j < one ; j++){
        var image = document.createElement('img');
        image.setAttribute('src', imgData.src);
        divOne.appendChild(image);
      }

      var divTwo = document.getElementById('div2');

      for ( var j = 0 ; j < two ; j++){
        var image = document.createElement('img');
        image.setAttribute('src', imgData.src);
        divTwo.appendChild(image);
      }
    });
  }
