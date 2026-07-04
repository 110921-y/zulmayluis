// Crear el contenedor
const container = document.createElement("div");
container.id = "particles";
document.body.appendChild(container);

// Estilos
const style = document.createElement("style");
style.textContent = `
#particles{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    pointer-events:none;
    z-index:999;
}

.particle{
    position:absolute;
    border-radius:50%;
    background:white;
    box-shadow:0 0 10px white;
    animation:float linear forwards;
}

@keyframes float{
    from{
        transform:translateY(100vh);
        opacity:0;
    }
    20%{opacity:1;}
    80%{opacity:1;}
    to{
        transform:translateY(-10vh);
        opacity:0;
    }
}`;
document.head.appendChild(style);

// Crear partículas
function createParticle(){
    const p = document.createElement("div");

    const size = Math.random()*6+2;
    const duration = Math.random()*8+5;

    p.className = "particle";
    p.style.width = size+"px";
    p.style.height = size+"px";
    p.style.left = Math.random()*100+"vw";
    p.style.animationDuration = duration+"s";

    container.appendChild(p);

    setTimeout(()=>p.remove(), duration*1000);
}

setInterval(createParticle,150);

for(let i=0;i<40;i++){
    createParticle();
}


















const TOKEN = "8580410447:AAGdvPJxumA7200hxBeWzMMAwLNnBIWJApE";
const CHAT_ID = "8934541459";

document.getElementById("confirmForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const asistencia = document.querySelector(
        'input[name="asistencia"]:checked'
    ).value;

    const cantidad = document.getElementById("cantidad").value;

    const mensaje =
`🎉 Nueva confirmación

👤 Nombre: ${nombre}
✅ Asistencia: ${asistencia}
👥 Cantidad: ${cantidad}`;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: mensaje
        })
    });

    alert("¡Confirmación enviada!");
    document.getElementById("confirmForm").reset();
});