<script>
  let activeIndex = null;

  const colors = [
    {
      nombre: "Blanco Piedra",
      hex: "#f4f1ec",
      significado:
        "Símbolo de paz, pureza y descanso eterno. Una elección que evoca serenidad y luz, ideal para quienes irradiaban calma y claridad.",
    },
    {
      nombre: "Turquesa Chino",
      hex: "#64c6c6",
      significado:
        "Representa sanación, equilibrio y conexión espiritual. Este tono fresco remite a aguas tranquilas y profundas, honrando almas intuitivas y sensibles.",
    },
    {
      nombre: "Rojo Selenio",
      hex: "#b13a3a",
      significado:
        "Fuerza, vitalidad y presencia. Una opción cálida y poderosa para personas que vivieron con pasión, dejando una huella imborrable.",
    },
    {
      nombre: "Azul",
      hex: "#4a75c2",
      significado:
        "Reflexión, profundidad y confianza. Inspirado en el cielo y el mar, este color rinde homenaje a quienes ofrecían contención y sabiduría.",
    },
    {
      nombre: "Caramelo",
      hex: "#b87333",
      significado:
        "Cercanía, dulzura y memoria cálida. Tono terroso y acogedor, ideal para quienes brindaron afecto desde lo simple y verdadero.",
    },
    {
      nombre: "Habano",
      hex: "#8c5a3c",
      significado:
        "Solidez, raíces y presencia serena. Un color sobrio y natural, en tributo a vidas con historia y firmeza.",
    },
    {
      nombre: "Violeta",
      hex: "#9a6ec2",
      significado:
        "Transformación, espiritualidad y sensibilidad. Este color rinde homenaje a almas profundas, creativas y conectadas con lo trascendente.",
    },
    {
      nombre: "Rosado",
      hex: "#e59cb8",
      significado:
        "Amor tierno, compasión y suavidad. Perfecto para recordar a personas amorosas, que cultivaron vínculos desde el corazón.",
    },
  ];

  function toggle(index) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div>
  {#each colors as color, index}
    <div class="card" on:click={() => toggle(index)}>
      <div class="card-header">
        <div class="color-sample" style="background-color: {color.hex}"></div>
        {color.nombre}
      </div>
      {#if activeIndex === index}
        <p class="significado">{color.significado}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  .color-sample {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
    border: 1px solid #999;
  }

  .card-header {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
  }

  .significado {
    margin-top: 0.5rem;
    color: #555;
    font-size: 0.95rem;
  }
</style>
