<section class="contact-section">
  <h1 class="section-title contacto">Contacto</h1>
  <p class="section-text">
    Si querés consultarnos por una urna, realizar un pedido o simplemente hablar
    con nosotros, escribinos directamente por WhatsApp o a través de nuestros
    datos de contacto.
  </p>

  <div class="contact-container">
    <!-- Columna izquierda: Info de contacto -->
    <div class="contact-info">
      <h2>Urnas Flor del Aire</h2>
      <p>
        <strong>Dirección:</strong> Av. Ignacio de la Roza 1234, San Juan, Argentina
      </p>
      <p>
        <strong>Teléfono:</strong>
        <a href="tel:+5492644036921">+54 9 264 403 6921</a>
      </p>
      <p>
        <strong>Email:</strong>
        <a href="mailto:urnasflordelaire@gmail.com"
          >urnasflordelaire@gmail.com</a
        >
      </p>
    </div>

    <!-- Columna derecha: Mapa -->
    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4945068722172!2d-68.5787147235061!3d-31.510575500812614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141b972fe5a2b%3A0xa2837a4a242703b4!2sUrnas%20Flor%20Del%20Aire%20-%20Casitas%20para%20Almas!5e0!3m2!1ses!2sar!4v1747790471508!5m2!1ses!2sar"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación de Urnas Flor del Aire en Google Maps"
      ></iframe>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 3rem 1.5rem;
    background-color: #e3e3e400;
    color: #ffffff;
  }

  .section-title {
    font-size: 3rem;
    margin-bottom: 0.8rem;
    text-align: center;
    color: #ffffff;
  }

  .section-text {
    max-width: 700px;
    margin: 0 auto 2rem auto;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-info {
    flex: 1 1 180px;
    font-size: 1rem;
    margin-bottom: 0rem;
  }

  .contact-info h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .contact-info p {
    margin: 0.5rem 0;
  }

  .contact-info a {
    color: #25d366;
    text-decoration: none;
  }

  .contact-map {
    flex: 1 1 300px;
    margin-top: 0rem;
  }

  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
    }

    .contact-map {
      margin-top: -1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .section-text {
      font-size: 1rem;
    }
  }
</style>
