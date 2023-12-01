<?php 

    include 'conexion_be.php';
    $Nombre = $_POST['Nombre'];
    $Email = $_POST['Email'];
    $Texto = $_POST['Texto'];

    $query = "INSERT INTO usuarios (Nombre, Email, Texto) VALUES ('$Nombre', '$Email', '$Texto')";

    $ejecutar = mysqli_query($conexion, $query);

    if ($ejecutar) {
        echo '<script> 
                alert("Registro insertado correctamente");
                window.location.href = "../INDEX.php";
              </script>';
    } else {
        echo '<script>
                alert("Error al insertar el registro: ' . mysqli_error($conexion) . '");
                window.location.href = "../INDEX.php";
              </script>';
    }
    mysqli_close($conexion);
   

?>