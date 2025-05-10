<script>
  export let urna;
  import ImageSlider from "./ImageSlider.svelte";
</script>

<div class="urna-card">
  <ImageSlider imagenes={urna.imagenes || [urna.imagen]} />
  <h2>{urna.nombre}</h2>
  <p>{urna.descripcion}</p>
  <p>
    <strong>Capacidad:</strong>
    {urna.capacidad} litros (aprox. {urna.gramos}g de cenizas)
  </p>
  <a href={`/urnas/${urna.slug}`}>Ver más</a>
</div>
