<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'php-mailer/Exception.php';
    require 'php-mailer/PHPMailer.php';
    require 'php-mailer/SMTP.php';

    // capturamos los inputs del formulario de contacto en variables
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];
    $mensaje = $_POST["mensaje"];

    // Concatenamos el mensaje con todos los datos en una sola variable
    $body = "Enviado por: " . $nombre ."<br>".
            "Correo: " . $email ."<br>".
            "Celular: " . $celular ."<br> <br>".
            "<p>".$mensaje."</p>";


    $mail = new PHPMailer(true);                          // Passing `true` enables exceptions

    try {
        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'pablo.tp87@gmail.com';             // SMTP username
        $mail->Password = 'paylamilla';                       // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('pablo.tp87@gmail.com', $nombre);
        $mail->addAddress('pablo.tp87@gmail.com');            // Add a recipient
        $mail->addCC('team.apprender@gmail.com');

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Petición de contacto';
        $mail->Body    = $body;
        $mail->CharSet = 'UTF-8';

        $mail->send();
        echo 'enviado';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }   
?>