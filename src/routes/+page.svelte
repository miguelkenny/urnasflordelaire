<script>
  import UrnaCard from "../components/UrnaCard.svelte";
  import CapacidadTabla from "../components/CapacidadTabla.svelte";
  import IntroBanner from "../components/IntroBanner.svelte";
  import Footer from "../components/Footer.svelte";
  import urnas from "./dataUrnas.js";
</script>

<div class="page-container">
  <div class="linea"></div>
  <IntroBanner />
  <div class="linea"></div>
  <CapacidadTabla />
  <div class="linea"></div>
  <h1 id="urnas">Catálogo de Urnas</h1>
  <div class="grid-urnas">
    {#each urnas as urna}
      <UrnaCard {urna} />
    {/each}
  </div>
</div>
