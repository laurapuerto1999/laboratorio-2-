<?php
$db_host = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "usuarios";

// Crear una nueva conexión a la base de datos
$mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

// Verificar si la conexión tuvo éxito
if ($mysqli->connect_error) {
    die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

$nombre = $_POST['name'];
$primerApellido = $_POST['primerApellido'];
$segundoApellido = $_POST['segundoApellido'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Realizar las validaciones.
if (empty($nombre)) {
    echo 'El nombre de usuario no puede estar vacío.';
    exit;
}

if (!preg_match("/^[a-zA-Z]+$/", $nombre)) {
    echo 'El nombre de solo puede contener letras.';
    exit;
}

if (empty($primerApellido)) {
    echo 'El primer apellido no puede estar vacío.';
    exit;
}

if (!preg_match("/^[a-zA-Z]+$/", $primerApellido)) {
    echo 'El primer apellido solo puede contener letras.';
    exit;
}

if (empty($segundoApellido)) {
    echo 'El segundo apellido no puede estar vacío.';
    exit;
}

if (!preg_match("/^[a-zA-Z]+$/", $segundoApellido)) {
    echo 'El segundo apellido solo puede contener letras.';
    exit;
}

if (empty($username)) {
    echo 'El nombre de usuario no puede estar vacio';
    exit;
}

if (empty($email)) {
    echo 'El email no puede estar vacío.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'El formato del email no es válido.';
    exit;
}

if (empty($password)) {
    echo 'La clave no puede estar vacía.';
    exit;
}

if (strlen($password) > 8) {
    echo 'La clave no puede tener más de 8 caracteres.';
    exit;
}

// Consultar si el email ya está registrado.
$consulta = $mysqli->prepare("SELECT * FROM usuarios WHERE email = ?");
$consulta->bind_param("s", $email);
$consulta->execute();
$resultado = $consulta->get_result();

// ... (Tu código anterior)

if ($resultado->num_rows > 0) {
    // Devuelve un mensaje específico si el correo electrónico ya está registrado
    echo 'Correo existente';
    exit;
}


$sql = "INSERT INTO usuarios (nombre, primerApellido, segundoApellido, username, email, password) VALUES ('$nombre', '$primerApellido', '$segundoApellido', '$username', '$email', '$password')";

if ($mysqli->query($sql) === TRUE) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();
?>