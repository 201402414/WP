<?php

//$infoArray;

  class FileInfo {
    public $name;
    public $cost;


    public function __construct($na, $co) {
      $this->name = $na;
      $this->cost = $co;

    }

    public function saveTodo() {

        $myfile=fopen("data.txt", "a+");
       //$infoArray = array($aValue => $bValue);
       //var_dump($infoArray);
       //화일에 저장하기
       //$fullstr = "./data/".$fstr;
       fwrite($myfile, $this->name."\n");
       fwrite($myfile, $this->cost."\n");
       echo fread($myfile, filesize("data.txt"));
       echo "저장되었습니다.";
    }
}
// 데이타 추가하기
$a1str = $_POST['a1'];
$b1str = $_POST['b1'];

$doData = new FileInfo($a1str, $b1str);

$doData->saveTodo();

//var_dump($infoArray);

/*
$fullstr = "./data/".$fstr;

if(file_exists($fullstr)) {
  echo "$fstr 파일이 존재합니다.";
}
else {
  $myfile=fopen($fullstr, "w");
  fwrite($myfile, $cstr);
  echo "저장되었습니다.";
}
*/
?>
