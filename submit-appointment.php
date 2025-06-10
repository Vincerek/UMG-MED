<?php
// Warunek sprawdzający, czy formularz został poprawnie uzupełniony przed podjęciem próby łączenia z bazą.
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['doctor']) && isset($_POST['date'])) {
    // łączenie z bazą danych
    $con = mysqli_connect('localhost', 'root', '');

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Utworzenie bazy danych, jeśli nie istnieje
    $dbName = 'db_appointment';
    $createDbQuery = "CREATE DATABASE IF NOT EXISTS $dbName";
    if (!mysqli_query($con, $createDbQuery)) {
        die("Error creating database: " . mysqli_error($con));
    }

    // wybór bazy danych
    mysqli_select_db($con, $dbName);

    // Utworzenie tabeli, jeśli nie istnieje
    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS `tbl_contact` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(255) NOT NULL,
            `email` VARCHAR(255) NOT NULL,
            `phone` VARCHAR(15) DEFAULT NULL,
            `date` DATE NOT NULL,
            `doctor` VARCHAR(255) NOT NULL,
            `symptoms` TEXT DEFAULT NULL,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";
    if (!mysqli_query($con, $createTableQuery)) {
        die("Error creating table: " . mysqli_error($con));
    }

    // Wzyciągnięcie danych z formularza
    $name = $_POST['name'];
    $email = $_POST['email'];
    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    } else {
        $phone = null; // Ustawienie domyślnej wartości, jeśli pole nie jest wypełnione
    };
    $doctor = $_POST['doctor'];
    $date = $_POST['date'];
    if (isset($_POST['symptoms'])) {
        $symptoms = $_POST['symptoms'];
    } else {
        $symptoms = null; // Ustawienie domyślnej wartości, jeśli pole nie jest wypełnione
    }

    // Zapytanie SQL typu "INSERT" uzupełniający tabelę danymi z formularza
    $sql = "INSERT INTO `tbl_contact` (`id`, `name`, `email`, `phone`, `doctor`, `date`, `extra`) VALUES (NULL, '$name', '$email', '$phone', '$doctor', '$date','$symptoms')";

    // Próba wykonania zapytania SQL
    $rs = mysqli_query($con, $sql);
    if ($rs) {
        echo "Twoja wizyta została umówiona pomyślnie!";
    } else {
        echo "Error: " . mysqli_error($con);
    }
} else {
    echo "Źle wypełnione dane";
}
?>