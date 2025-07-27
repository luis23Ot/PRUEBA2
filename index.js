function borrarHistorialMovimientos() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se borrarán todos los movimientos registrados",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("movimientos");
        cargarMovimientos();
        Swal.fire("Borrado", "El historial de movimientos ha sido eliminado", "success");
      }
    });
  }

  // Al final del script, agregar:
function borrarDatos() {
    localStorage.clear();
    cargarInventario();
    cargarPrestamos();
    cargarMovimientos();
    Swal.fire("Datos borrados", "Se ha limpiado todo el almacenamiento local", "success");
  }
  
  