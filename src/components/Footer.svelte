<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img
        src="/images/icon400x400.png"
        alt="Logo Urnas Flor del Aire"
        class="footer-logo"
      />
      <div>
        <h2>Urnas Flor del Aire</h2>
        <p class="slogan">Casitas para Almas</p>
      </div>
    </div>

    <div class="footer-contact">
      <h3>Contacto</h3>
      <p>📍 San Juan, Argentina</p>
      <p>
        📞 <a href="https://wa.me/5492644036921" target="_blank"
          >+54 9 264 403 6921</a
        >
      </p>
      <p>
        📧 <a href="mailto:info@urnasflordelaire.com"
          >info@urnasflordelaire.com</a
        >
      </p>
    </div>

    <div class="footer-links">
      <h3>Enlaces</h3>
      <a href="/">Inicio</a>
      <a href="#urnas">Catálogo</a>
      <a href="#capacidad">Capacidades</a>
      <a href="#faq">Preguntas frecuentes</a>
      <a href="#contacto">Contacto</a>
    </div>

    <div class="footer-social">
      <h3>Seguinos</h3>
      <div class="social-icons">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram">📷</a
        >
        <a
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Facebook">📘</a
        >
        <a
          href="https://wa.me/5493510000000"
          target="_blank"
          aria-label="WhatsApp">💬</a
        >
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>
      &copy; {currentYear} Urnas Flor del Aire. Todos los derechos reservados.
    </p>
  </div>
</footer>

<style>
  .footer {
    width: 100%;
    color: #f9fafb;
    padding: 2rem 1.5rem;
    font-size: 0.95rem;
    border-top: 1px solid #e5e7eb; /* línea gris clara */
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05); /* sombra en la parte superior */
  }

  .footer-container {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
  }

  .footer-logo {
    height: 60px;
    margin-right: 1rem;
    border-radius: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .slogan {
    font-style: italic;
    color: #d1d5db;
    font-size: 1rem;
    margin-top: 0.25rem;
    text-align: center;
  }

  .footer-contact a,
  .footer-links a {
    color: #f3f4f6;
    text-decoration: none;
    display: block;
    margin: 0.25rem 0;
  }

  .footer-contact a:hover,
  .footer-links a:hover {
    color: #60a5fa;
  }

  .footer-links h3,
  .footer-contact h3,
  .footer-social h3 {
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .social-icons {
    display: flex;
    gap: 0.75rem;
    font-size: 1.5rem;
  }

  .footer-social a {
    text-decoration: none;
    transition: transform 0.2s;
  }

  .footer-social a:hover {
    transform: scale(1.2);
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.85rem;
    color: #9ca3af;
  }

  @media (max-width: 640px) {
    .footer-brand {
      flex-direction: column;
      text-align: center;
    }

    .footer-logo {
      margin-bottom: 0.5rem;
    }

    .footer-container {
      text-align: center;
    }

    .footer-links a,
    .footer-contact a {
      display: inline-block;
    }
  }
</style>
