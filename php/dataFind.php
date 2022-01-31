<?php

 $infoArray;

 $ofile = fopen("data.txt", "r");

 while(!feof($ofile)) {
   $aValue = fgets($ofile);
   $bValue = fgets($ofile);
   $infoArray[$aValue] = $bValue;
 }
 fclose($ofile);

  $fstr = $_POST['a1'];
  $cstr = $_POST['b1'];

  if(!empty($fstr) && !empty($cstr)) {
      $co = 0;
      echo "<ul>";

   foreach($infoArray as $x => $x_value) {

     if(strpos($x,$fstr) !==false && strpos($x_value, $cstr) !== false) {
       $co = $co +1;
       echo "<li>$x : ";
       $re_value = rtrim($x_value, "\n");
       echo "$re_value</li>";
     }
   }

   if ($co == 0) {
     echo "No file";
   }

}

else if (!empty($fstr) && empty($cstr)) {

  $co = 0;
  echo "<ul>";

  foreach($infoArray as $x => $x_value) {

    if(strpos($x,$fstr) !==false) {
      $co = $co +1;
      echo "<li>$x : ";
      $re_value = rtrim($x_value, "\n");
      echo "$re_value</li>";
    }
  }

  if ($co == 0) {
    echo "No file";
  }

}

else if(empty($fstr) && !empty($cstr)) {

  $co = 0;
  echo "<ul>";

  foreach($infoArray as $x => $x_value) {

    if(strpos($x_value,$cstr) !==false) {
      $co = $co +1;
      echo "<li>$x : ";
      $re_value = rtrim($x_value, "\n");
      echo "$re_value</li>";
    }
  }

  if ($co == 0) {
    echo "No file";
  }

}
else {
  echo "Enter the keywords of list that you want to search.";
}
  echo "</ul>";
 ?>
