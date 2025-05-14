<script>
  let filtro = "todos";

  const datos = [
    {
      litros: "0.5",
      gramos: "250–300 g",
      peso: "Hasta 10–15 kg",
      uso: "Mascotas pequeñas o bebés",
      tipo: "mascota",
    },
    {
      litros: "0.75",
      gramos: "375–450 g",
      peso: "15–25 kg",
      uso: "Mascotas medianas o niños pequeños",
      tipo: "mascota",
    },
    {
      litros: "1.00",
      gramos: "460–540 g",
      peso: "22–35 kg",
      uso: "Niños medianas o pequeños",
      tipo: "persona",
    },
    {
      litros: "1.3",
      gramos: "600–700 g",
      peso: "30–45 kg",
      uso: "Mascotas grandes o adolescentes",
      tipo: "persona",
    },
    {
      litros: "1.5",
      gramos: "700–800 g",
      peso: "45–55 kg",
      uso: "Adultos delgados o adolescentes",
      tipo: "persona",
    },
    {
      litros: "1.75",
      gramos: "850–950 g",
      peso: "55–65 kg",
      uso: "Adultos promedio",
      tipo: "persona",
    },
    {
      litros: "2.0",
      gramos: "1,000–1,200 g",
      peso: "65–80 kg",
      uso: "Adultos corpulentos",
      tipo: "persona",
    },
    {
      litros: "2.5",
      gramos: "1,250–1,500 g",
      peso: "80–95 kg",
      uso: "Adultos grandes o reserva de cenizas",
      tipo: "persona",
    },
    {
      litros: "3.0",
      gramos: "1,500–1,800 g",
      peso: "95–110 kg",
      uso: "Personas grandes o uso doble",
      tipo: "persona",
    },
    {
      litros: "3.5",
      gramos: "1,750–2,000 g",
      peso: "110–130 kg o más",
      uso: "Cenizas múltiples o mezcla familiar",
      tipo: "persona",
    },
  ];

  function obtenerIcono(tipo) {
    return tipo === "mascota" ? "🐾" : "🧍";
  }

  function obtenerColor(tipo) {
    return tipo === "mascota" ? "#fef7f1" : "#f1f7fe";
  }

  $: datosFiltrados =
    filtro === "todos" ? datos : datos.filter((d) => d.tipo === filtro);
</script>

<section class="capacidad-section">
  <h2>Guía de Capacidades de Urnas</h2>
  <h3>
    Cada urna tiene una capacidad diferente, según la cantidad de cenizas
    generadas por el cuerpo o el uso previsto.
  </h3>
  <p class="intro">
    Seleccioná una categoría para ver las opciones disponibles.
  </p>

  <!-- Botones de filtrado -->
  <div class="filtros">
    <button
      class:activo={filtro === "todos"}
      on:click={() => (filtro = "todos")}>🔄 Todas</button
    >
    <button
      class:activo={filtro === "mascota"}
      on:click={() => (filtro = "mascota")}>🐾 Mascotas</button
    >
    <button
      class:activo={filtro === "persona"}
      on:click={() => (filtro = "persona")}>🧍 Personas</button
    >
  </div>

  <!-- Cards filtradas -->
  <div class="cards-container">
    {#each datosFiltrados as fila}
      <div class="card" style="background-color: {obtenerColor(fila.tipo)}">
        <div class="icono">{obtenerIcono(fila.tipo)}</div>
        <div class="contenido">
          <h3>{fila.litros} L</h3>
          <p><strong>Cenizas:</strong> {fila.gramos}</p>
          <p><strong>Peso estimado:</strong> {fila.peso}</p>
          <p><strong>Uso:</strong> {fila.uso}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Notas útiles -->
  <div class="notas">
    <h3>Notas útiles</h3>
    <ul>
      <li>
        Una persona adulta suele generar entre <strong>1.500 y 3.000 g</strong> de
        cenizas.
      </li>
      <li>
        Las urnas también pueden contener recuerdos, cartas u objetos
        personales.
      </li>
      <li>Podés dividir las cenizas entre varias urnas o relicarios.</li>
    </ul>
  </div>
</section>

<style>
  .capacidad-section {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1rem;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  .intro {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: #f8f8f8;
  }

  .filtros {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .filtros button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filtros button.activo {
    background-color: #0077cc;
    color: rgb(23, 23, 23);
    border-color: #0077cc;
  }

  /* Media query para pantallas pequeñas */
  @media (max-width: 768px) {
    .filtros {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .filtros button {
      margin: 0.5rem 0;
      width: 80%; /* opcional: para hacerlos más anchos */
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .card {
    border-radius: 0.75rem;
    padding: 1rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .icono {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .contenido h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #101010;
  }

  .contenido p {
    margin: 0.25rem 0;
    font-size: 0.95rem;
    color: #101010;
  }

  .notas {
    margin-top: 2.5rem;
    background: #101010;
    padding: 1.5rem;
    border-radius: 0.75rem;
  }

  .notas h3 {
    margin-bottom: 1rem;
  }

  .notas ul {
    padding-left: 1.5rem;
  }

  .notas li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    .contenido p {
      font-size: 0.9rem;
    }
    .contenido h3 {
      font-size: 1.25rem;
    }
  }
</style>
