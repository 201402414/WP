<?php

session_start();
$id = $_POST['name'];
$imgData = $_POST['imgData'];

echo $id . "/" . $imgData;

function save() {
    global $id;
    global $imgData;

    $file = fopen($imgData."1.txt", "a+");
    fwrite($file, $id);
    fwrite($file, '|');
    fclose($file);
}

save();

?>