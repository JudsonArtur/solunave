<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__.'/PHPMailer/src/Exception.php';
require __DIR__.'/PHPMailer/src/PHPMailer.php';
require __DIR__.'/PHPMailer/src/SMTP.php';

$jSON = [];


$mail = new PHPMailer(true);


  $POST = filter_input_array(INPUT_POST);

        try {
            //Server settings
           // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'franstel.net';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'suporte@franstel.net';                     // SMTP username
            $mail->Password   = '6Y#pbp88';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('suporte@franstel.net', 'Soltec');
            $mail->addAddress($POST['email']);     // Add a recipient
                    // Name is optional
          
        
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Contacto Soltec';
            $mail->Body    = '
            Muito Obrigado '.$POST['nome'].' por entrar em contacto</b>
             <p>Contacto : '.$POST['telefone'].'</p>
             <div><p>'.$POST['mensagem'].'</p></div>
                        ';
        
            $mail->send();
             $jSON['Certo']=$POST['nome'].'A sua mensagem foi envida sucesso, em breve entraremos em contacto';
        } catch (Exception $e) {
             $jSON['Error'] = 'Error ao enviar a mensagem';
        }

         echo json_encode($jSON);
