<script>
  let selected = null;

  const colors = [
    {
      nombre: "Blanco Piedra",
      hex: "#f5f5f4",
      descripcion:
        "Evoca pureza, paz y una conexión con lo esencial. Ideal para quienes valoran la luz y la serenidad.",
    },
    {
      nombre: "Turquesa Chino",
      hex: "#00a6a6",
      descripcion:
        "Representa equilibrio emocional, frescura y espiritualidad. Inspirado en aguas tranquilas y cielos limpios.",
    },
    {
      nombre: "Rojo Selenio",
      hex: "#a52a2a",
      descripcion:
        "Símbolo de vitalidad, amor y fuerza interior. Aporta calidez y profundidad emocional.",
    },
    {
      nombre: "Azul",
      hex: "#1e3a8a",
      descripcion:
        "Invoca serenidad, sabiduría y confianza. Relacionado con el cielo y el mar infinito.",
    },
    {
      nombre: "Caramelo",
      hex: "#c97e4f",
      descripcion:
        "Tonos cálidos y acogedores que transmiten dulzura, protección y naturalidad.",
    },
    {
      nombre: "Habano",
      hex: "#8b5e3c",
      descripcion:
        "Conecta con la tierra, la raíz y la estabilidad. Ideal para homenajes sobrios y elegantes.",
    },
    {
      nombre: "Violeta",
      hex: "#7c3aed",
      descripcion:
        "Color de transformación, espiritualidad y conexión con el alma. Evoca misterio y contemplación.",
    },
    {
      nombre: "Rosado",
      hex: "#f472b6",
      descripcion:
        "Simboliza ternura, amor incondicional y dulzura. Perfecto para recuerdos sensibles y amorosos.",
    },
  ];

  function toggle(index) {
    selected = selected === index ? null : index;
  }
</script>

<div class="colors-section">
  <div class="colors-grid">
    {#each colors as color, index}
      <div class="card" on:click={() => toggle(index)}>
        <div class="color-header">
          <div
            class="swatch"
            style="background-color: {color.hex};"
            title={color.nombre}
          ></div>
          <h3>{color.nombre}</h3>
        </div>
        {#if selected === index}
          <p>{color.descripcion}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .colors-section {
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
  }

  .colors-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1rem;
    background: #f9f9f9;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .card:hover {
    background-color: #f1f1f1;
  }

  .color-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .swatch {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    box-shadow: 0 0 0 1px #fff;
  }

  .card h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
  }

  .card p {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    line-height: 1.4;
    color: #444;
  }

  @media (min-width: 768px) {
    .colors-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .colors-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
