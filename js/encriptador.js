function encriptar(texto) {
    let textoSinTildes = eliminarTildes(texto);
    let encriptado = textoSinTildes.replaceAll("e", "end");
    encriptado = encriptado.replaceAll("i", "in");
    encriptado = encriptado.replaceAll("a", "air");
    encriptado = encriptado.replaceAll("o", "ovo");
    encriptado = encriptado.replaceAll("u", "ufo");
    encriptado = encriptado.replaceAll("E", "END");
    encriptado = encriptado.replaceAll("I", "IN");
    encriptado = encriptado.replaceAll("A", "AIR");
    encriptado = encriptado.replaceAll("O", "OVO");
    encriptado = encriptado.replaceAll("U", "UFO");
    return encriptado;
};

function desencriptar(texto) {
    let textoSinTildes = eliminarTildes(texto);
    let desencriptado = textoSinTildes.replaceAll("ufo", "u");
    desencriptado = desencriptado.replaceAll("ovo", "o");
    desencriptado = desencriptado.replaceAll("ai", "a");
    desencriptado = desencriptado.replaceAll("in", "i");
    desencriptado = desencriptado.replaceAll("end", "e");
    desencriptado = desencriptado.replaceAll("UFO", "U");
    desencriptado = desencriptado.replaceAll("OVO", "O");
    desencriptado = desencriptado.replaceAll("AIR", "A");
    desencriptado = desencriptado.replaceAll("IN", "I");
    desencriptado = desencriptado.replaceAll("END", "E");
    return desencriptado;
};  

function eliminarTildes(texto) {
    return texto
    .normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
    .normalize();
}