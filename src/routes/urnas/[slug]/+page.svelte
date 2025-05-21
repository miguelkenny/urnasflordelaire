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
      {#each urna.descripcionLarga as parrafo}
        <p class="descripcion">{parrafo}</p>
      {/each}
      <div class="detalle">
        <strong>Capacidad:</strong>
        {urna.capacidad} litros (~{urna.gramos}g de cenizas)
      </div>
      {#if urna.tipo == "std"}
        <h1>Colores Disponibles</h1>
        <ColorMeaning />
      {/if}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener"
        class="whatsapp-button"
      >
        Consultar por WhatsApp
      </a>
      <a href="/#urnas" rel="noopener" class="whatsapp-button">
        Volver al Catálogo
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
    margin: 2rem 1rem;
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
    font-family: "Lobster", sans-serif;
    font-size: 2.5rem;
    color: #444;
    margin-bottom: 1rem;
  }

  .descripcion {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.8;
    color: #374151; /* gris oscuro, fácil de leer */
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    text-align: justify;
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
