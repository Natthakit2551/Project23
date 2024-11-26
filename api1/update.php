<?php
include_once("config.db.php");
$dataJSON = json_decode(file_get_contents('php://input'), true);
$message = array();

// ประกาศตัวแปร สำหรับแก้ไขข้อมูล
$id = $dataJSON['id'];
$id_stu = $dataJSON['id_stu'];
$name = $dataJSON['name'];
$nname = $dataJSON['nname'];
$age = $dataJSON['age'];
$phone = $dataJSON['phone'];
$address = $dataJSON['address'];
$status = $dataJSON['status'];

// เขียนคำสั่งในการแก้ไขข้อมูล
$update = "UPDATE `members` SET `id_stu` = '$id_stu', `name` = '$name', `nname` = '$nname', `age` = '$age', `phone` = '$phone', `address` = '$address', `status` = '$status' WHERE `members`.`id` = '$id'";

$qr_update = mysqli_query($conn, $update);

if ($qr_update) {
    // แก้ไขข้อมูลสำเร็จ
    http_response_code(201);
    $message['status'] = "แก้ไขข้อมูลสำเร็จ";
} else {
    // แก้ไขข้อมูลไม่ได้
    http_response_code(422);
    $message['status'] = "แก้ไขข้อมูลไม่สำเร็จ";
}

// ส่งข้อมูลการดำเนินการกลับไป
echo json_encode($message);
echo mysqli_error($conn);


?>