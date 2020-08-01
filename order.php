<?php

require 'vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader('templates');
$twig = new Environment($loader);



// $data = $_POST['data'];

// echo $data;
if( isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    /* special ajax here */
    

    $sum = 0;
    if(isset($_POST['source_lang']) && $_POST['source_lang'] == "Arabic"){
        $sum += 3;

    }
    if(isset($_POST['target_lang']) && $_POST['target_lang'] == "English") {
        $sum += 5;

    }
    if(isset($_POST['service']) && $_POST['service'] == "Translation") {
        $sum += 5;

    }
    if(isset($_POST['expertise']) && $_POST['expertise'] == "General") {
        $sum += 10;
    }
    if(isset($_POST['cat_name']) && $_POST['cat_name'] == "Certified") {
        $sum += 12;
    }
    if(isset($_POST['RadiosLan']) && $_POST['RadiosLan'] == "Fast") {
        $sum += 10;

    }
    if(isset($_POST['add_service']) && $_POST['add_service'] == "on") {
        $sum += 50;

    }
    if(isset($_POST['coupon']) && $_POST['coupon'] == "on") {
        $sum -= 30;
    }
    echo json_encode($sum);

}
else{
    echo $twig->render('order.twig');
}
