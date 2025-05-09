<script>
  export let urna;
</script>

<div class="urna-card">
  <img src={urna.imagen} alt={urna.nombre} />
  <h2>{urna.nombre}</h2>
  <p>{urna.descripcion}</p>
  <p>
    <strong>Capacidad:</strong>
    {urna.capacidad} litros (aprox. {urna.gramos}g de cenizas)
  </p>
  <a href={`/urnas/${urna.slug}`}>Ver más</a>
</div>
