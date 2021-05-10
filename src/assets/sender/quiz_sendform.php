<?php
//Сбор данных из полей формы.
$QW1 = $_POST['qw1'];
$QW2 = $_POST['qw2'];
$QW3_1 = $_POST['qw3-1'];
$QW3_2 = $_POST['qw3-2'];
$QW3_3 = $_POST['qw3-3'];
$QW3_4 = $_POST['qw3-4'];
$QW3_5 = $_POST['qw3-5'];
$QW3_6 = $_POST['qw3-6'];
//$FILE->addAttacment($_FILES['upload']['tmp_name'], $_FILES['upload']['name'][]);
$QW4 = $_POST['qw4'];
$QW5 = $_POST['qw5'];
$QW6 = $_POST['qw6'];
$QW7 = $_POST['qw9'];
$QW8 = $_POST['qw10'];
$QW9 = $_POST['qw7'];
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"

$token = "1318718152:AAHDL3Jna4OnS0gsURLMDtXWVJvWZdeFyeg"; // Тут пишем токен
$chat_id = "-1001177631999"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "MoscowRPK"; //Указываем название сайта

$arr = array(
  'Заявка после quiz-теста: ' => $sitename,
  'Тип Жилья: ' => $QW1,
  'Помещения в которых нужен ремонт: ' => $QW2,
  'Площадь помещений: ',
  'Вся квартира / дом: ' => $QW3_1,
  'Комнаты / зал: ' => $QW3_2,
  'Туалет / ванная: ' => $QW3_3,
  'Кухня: ' => $QW3_4,
  'Коридор: ' => $QW3_5,
  'Другое: ' => $QW3_6, 
  'Планировка:' => $FILE,
  'Тип ремонта: ' => $QW4,
  'Дизайн-проект: ' => $QW5,
  'Как посчитать: ' => $QW6,
  'Бюджет: ' => $QW7,
  'Когда начинаем: ' => $QW8,
  'Подарок: ' => $QW9,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>