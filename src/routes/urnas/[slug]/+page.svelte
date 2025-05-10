<script>
  import ColorMeaning from "../../../components/ColorMeaning.svelte";
  import ImageSlider from "../../../components/ImageSlider.svelte";
  export let data;
  const { urna } = data.data;

  const whatsappNumber = "5492644036921"; // ← Reemplazá con tu número real
  const mensaje = `Hola, me interesa la urna "${urna?.nombre}". ¿Podrías brindarme más información?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
</script>

{#if urna}
  <section class="flyer">
    <div class="flyer-content">
      <h1>{urna.nombre}</h1>
      <ImageSlider imagenes={urna.imagenes || [urna.imagen]} />
      <p class="descripcion">{urna.descripcionLarga}</p>
      <div class="detalle">
        <strong>Capacidad:</strong>
        {urna.capacidad} litros (~{urna.gramos}g de cenizas)
      </div>
      <h1>Colores Disponibles</h1>
      <ColorMeaning />
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener"
        class="whatsapp-button"
      >
        Consultar por WhatsApp
      </a>
    </div>
  </section>
{:else}
  <p>Urna no encontrada.</p>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@600&display=swap");

  .flyer {
    background: #fff;
    padding: 2rem;
    max-width: 800px;
    margin: 2rem auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    font-family: "Lato", sans-serif;
  }

  .flyer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: #444;
    margin-bottom: 1rem;
  }

  .descripcion {
    font-size: 1.05rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    padding: 0 1rem;
  }

  .detalle {
    font-size: 1.1rem;
    color: #222;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: 500px;
  }

  .whatsapp-button {
    display: inline-block;
    background-color: #25d366;
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    font-size: 1rem;
  }

  .whatsapp-button:hover {
    background-color: #1ebc5a;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.7rem;
    }

    .descripcion {
      font-size: 1.2rem;
    }
  }
</style>
