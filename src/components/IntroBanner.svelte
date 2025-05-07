<script>
  export let imageUrl = "/images/gota.png"; // Ruta ajustable
</script>

<section class="intro-banner">
  <div class="intro-banner__image">
    <img src={imageUrl} alt="Modelo de urna" />
  </div>
  <div class="intro-banner__text">
    <h2 class="bebas-neue-regular">URNAS FLOR DEL AIRE</h2>
    <p>
      “Desde el primer día, nuestro deseo con Urnas Flor del Aire ha sido crear
      algo más que urnas; queríamos ofrecer un refugio para las almas, un
      espacio donde el amor y los recuerdos pudieran florecer. Cada urna que
      diseñamos es un tributo, una ‘casita’ que guarda con delicadeza el legado
      de quienes han partido. Entendemos lo importante que es este momento para
      las familias, por eso, cada pieza es creada con respeto, cuidado y una
      profunda conexión con la naturaleza. Nuestro compromiso es seguir
      ofreciendo belleza y paz, en homenaje a la vida y el amor eterno.”
    </p>
    <p class="signature">— Natalia Gema Godoy, dueña de Urnas Flor del Aire</p>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  .bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
  }

  .intro-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 2rem;
    gap: 2rem;
    background-color: #f9fafb00;
    flex-wrap: wrap;
  }

  .intro-banner__image img {
    width: 450px;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
  }

  .intro-banner__text {
    flex: 1;
    min-width: 300px;
  }

  .intro-banner__text h2 {
    margin-bottom: 1rem;
    color: #f7f7f7;
  }

  .intro-banner__text p {
    line-height: 1.6;
    color: #fdfdfd;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .signature {
    font-style: italic;
    color: #6b7280;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .intro-banner {
      flex-direction: column;
      text-align: center;
    }

    .intro-banner__image img {
      width: 100%;
      max-width: 350px;
    }

    .intro-banner__text h2 {
      font-size: 1.75rem;
    }
  }
</style>
