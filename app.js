const edAmigo = document.getElementById("amigo");
const listaParticipantes = [];
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo()
{ 
    if (edAmigo.value == "")
    {
        alert("INSERTAR NOMBRE")
    }
    listaParticipantes.push(edAmigo.value);
    listaAmigos.innerHTML += `<li>${edAmigo.value}</li>`;
};
function sortearAmigo()
{
    const sorteo = Math.floor(Math.random()*listaParticipantes.length);
    const amigoSecreto = listaParticipantes[sorteo];
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`
}