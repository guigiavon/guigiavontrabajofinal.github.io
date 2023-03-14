let boton;

document.getElementById("Estudios").onmouseover = function () {
  let boton = document.getElementById("Estudios").value;
  ocultar(boton);
  document.getElementById("Estudio").style.display = "block";

  
  
};

document.getElementById("HistoriaLab").onmouseover = function () {
  let boton = document.getElementById("HistoriaLab").value;
  ocultar(boton);
  document.getElementById("Laboral").style.display = "block";
};

document.getElementById("Intereses").onmouseover = function () {
  let boton = document.getElementById("Intereses").value;
  ocultar(boton);
  document.getElementById("Interes").style.display = "block";
};

document.getElementById("Contacto").onmouseover = function () {
  let boton = document.getElementById("Contacto").value;
  ocultar(boton);
  document.getElementById("Cont").style.display = "block";
};

function ocultar(boton) {
  document.getElementById("Estudio").style.display = "none";
  document.getElementById("Laboral").style.display = "none";
  document.getElementById("Interes").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  document.getElementById("Cont").style.display = "none";

}

document.getElementById("mostrar").onmouseover = function () {
  document.getElementById("contacto").style.display = "block";

  document.getElementById("Estudio").style.display = "none";
  document.getElementById("Laboral").style.display = "none";
  document.getElementById("Interes").style.display = "none";
  document.getElementById("Cont").style.display = "none";
};

document.getElementById("enviar").addEventListener("click", function () {
  let Nombre = document.getElementById("Nombre").value;
  let Apellido = document.getElementById("Apellido").value;
  let Consulta = document.getElementById("Consulta").value;
  var url = enviar(Nombre, Apellido, Consulta);
  if (url != 0) {
    window.open(url);
  }

});



function enviar(Nombre, Apellido, Consulta) {
  if (
    Nombre.trim() === "" ||
    Apellido.trim() === "" ||
    Consulta.trim() === ""
  ) {
    console.log("Debe ingresar datos");
    document.getElementById("error").style.display = "block";

    return 0;
  } else {
    document.getElementById("error").style.display = "none";
    return (
      "https://api.whatsapp.com/send?text=" +
      "Mi nombre es " +
      encodeURIComponent(Nombre) +
      " " +
      Apellido +
      " y te queria consultar sobre " +
      Consulta +
      "&phone=" +
      encodeURIComponent(543513213802)
    );
  }

  //var url = "whatsapp://send?text="+encodeURIComponent(mensaje)+"&phone="+encodeURIComponent(number)
}
