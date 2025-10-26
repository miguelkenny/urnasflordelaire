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
        <strong>Peso Corporal Aprox.:</strong>
        {urna.peso}
      </div>
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
