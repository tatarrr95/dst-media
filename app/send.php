<!DOCTYPE html>
<html lang="ru-RU">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DST-Media - рекламно производственный комплекс</title>
    <!-- SEO -->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <!-- favicon.ico -->
    <link rel="shortcut icon" href="img/favicon/favicon-16x16.png" type="image/x-icon">
    <link rel="icon" href="img/favicon/favicon-32x32.png" type="image/x-icon">
    <link rel="stylesheet" href="css/vendor.css">
    <link rel="stylesheet" href="css/main.css">
    <!-- favicon -->
    
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <!--[if lt IE 8]>
	<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <section class="shapka">
        <div class="container">
            <div class="shapka-header row clearfix">
                <div class="logo col-md-7">
                    <img class="img-responsive" src="img/logo.png" alt="">
                </div>
                <div class="header-info clearfix">
                    <div class="header-info-contacts">
                        <span>Владивосток, ул. Светланская, 147В</span>
                        <span>Телефон: <a href="">7 (423) 202-54-13</a></span>
                        <span><a href="">sales@dst-media.ru</a></span>
                    </div>
                    <img class="top-header-line" src="img/line-header.png" alt="">
                    <div class="header-info-right">
                        <div class="header-info-right-time clearfix">
                           <div class="header-info-right-time-text">
                               <span>Режим работы:</span>
                               <span>ПН-ПТ 9:00-18:00(МСК + 7)</span>
                           </div> 
                           <div class="clock">
                               <i class="sprite sprite-clocks"></i>
                           </div>
                        </div>
                        <div class="header-button">
                            <img class="hvr-buzz-out v-modal-zvonok" src="img/header-button.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="shapka-center">
                <img class="img-responsive shapka-lines" src="img/shapka-left-lines.png" alt="">
                <div class="shapka-center-inner">
                    <span class="shapka-center-title">Мы получили вашу заявку, спасибо. Наш менеджер свяжется с вами</span>
                    <span class="shapka-center-subtitle"><a href="/">Вернуться на главную</a></span>
                    <img class="img-responsive hvr-buzz-out v-modal-zvonok" src="img/button-shapka.png" alt="">
                </div>
                <img class="img-responsive shapka-lines" src="img/shapka-right-lines.png" alt="">
            </div>
        </div>
    </section>    

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    <script src="scripts/vendor.js"></script>
    <script src="scripts/main.js"></script>
</body>

</html>


<?php
if(isset($_POST['name'])){
	$headers[] = 'MIME-Version: 1.0';
	$headers[] = 'Content-type: text/html; charset=utf-8';
	$headers[] = 'From: noreply@dstmedia.ru';
	$headers[] = 'Cc: noreply@dstmedia.ru';
	$headers[] = 'Bcc: noreply@dstmedia.ru';

	ini_set("SMTP", "smtp.timeweb.ru");
    ini_set("sendmail_from", "noreply@dstmedia.ru");

    if(isset($_POST['textarea'])){
    	$name = $_POST['name'];
    	$telephone = $_POST['telephone'];
    	$email = $_POST['email'];
    	$textarea = $_POST['textarea'];
    	$title = "Поступила заявка на РАСЧЕТ с сайта DST-Media.ru";
    	$message = "Данные пользователя:<br><p><strong>Имя:</strong></p>".$name."<p><strong>Телефон:</strong></p>".$telephone."<p><strong>E-mail</strong></p>".$email."<p><strong>Сообщение</strong></p>".$textarea;
    }
    else{
    	$name = $_POST['name'];
    	$telephone = $_POST['telephone'];
    	$email = $_POST['email'];
    	$title = "Поступила заявка на ЗВОНОК с сайта DST-Media.ru";
    	$message = "Данные пользователя:<br><p><strong>Имя:</strong></p>".$name."<p><strong>Телефон:</strong></p>".$telephone."<p><strong>E-mail</strong></p>".$email;
    }

    

    mail("dstmedia@yandex.ru", $title, $message, implode("\r\n", $headers));
}
?>