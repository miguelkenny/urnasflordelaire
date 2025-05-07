<script>
  export let data;
  const { urna } = data.data;
</script>

{#if urna}
  <h1>{urna.nombre}</h1>
  <img src={urna.imagen} alt={urna.nombre} />
  <p>{urna.descripcionLarga}</p>
  <p>
    <strong>Capacidad:</strong>
    {urna.capacidad} litros (~{urna.gramos}g de cenizas)
  </p>
{:else}
  <p>Urna no encontrada.</p>
{/if}
