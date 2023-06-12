<?php
// Configuración de la conexión a la base de datos
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

// Actualizado para seleccionar los nuevos campos
$query = "SELECT nombre, primerApellido, segundoApellido, email, username FROM Usuarios";
$result = $mysqli->query($query);
?>
<!DOCTYPE html>
<html>

<head>
    <title>Usuarios Registrados</title>
    <!-- añade aquí cualquier otra metaetiqueta, estilos o scripts -->
    <style>
        body {
            background-color: #242933;
            color: #ffffff;
            font-family: Arial, sans-serif;
            padding: 0;
            margin: 0;
        }

        .container {
            width: 80%;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            padding: 20px 0;
        }

        .boton-registro {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px auto;
            display: block;
        }

        .boton-registro:hover {
            background-color: #0056b3;
        }

        .usuario {
            border: 1px solid #007BFF;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Usuarios Registrados</h1>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<div class='usuario'>Nombre: " . $row["nombre"] . " - First Name: " . $row["primerApellido"] . " - Last Name: " . $row["segundoApellido"] . " - Username: " . $row["username"] . " - Email: " . $row["email"] . "</div>";
            }
        } else {
            echo "No hay usuarios registrados";
        }
        $mysqli->close();
        ?>
        <a href="index.html" class="boton-registro">Volver a la página de registro</a>
    </div>
</body>

</html>