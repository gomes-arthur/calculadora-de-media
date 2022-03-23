function CalcularMedia() {
  var nome = document.getElementById("Nome").value;

  var notaPrimeiroTrimestre = parseFloat(
    document.getElementById("Nota1").value
  );
  var notaSegundoTrimestre = parseFloat(document.getElementById("Nota2").value);
  var notaTerceiroTrimestre = parseFloat(
    document.getElementById("Nota3").value
  );

  var mediaFinal =
    (notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre) / 3;
  var mediaFinalArredondada = mediaFinal.toFixed(0);

  if (mediaFinalArredondada >= 60) {
    document.getElementById("resultado").innerHTML =
      nome +
      ", sua média final é de " +
      mediaFinalArredondada +
      " pontos." +
      " Você passou de ano!";
  } else if (mediaFinalArredondada < 60) {
    if (mediaFinalArredondada == 0) {
      document.getElementById("resultado").innerHTML = "você ZEROU!";
    } else
      document.getElementById("resultado").innerHTML =
        nome +
        ", sua média final é de " +
        mediaFinalArredondada +
        " pontos." +
        " Você não passou de ano.";
  } else
    document.getElementById("resultado").innerHTML =
      "Vish, deu ruim! Verifique as informações inseridas.";
}
