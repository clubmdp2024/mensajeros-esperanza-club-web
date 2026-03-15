document.addEventListener("DOMContentLoaded", () => {
  const pageName = document.body.dataset.page;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.dataset.nav === pageName) link.classList.add("active");
  });

  const galleryData = [
    {
      title: "Actividad 01 - Bienvenida y apertura",
      description: "Galería de ejemplo para el recibimiento general del campamento.",
      photos: [
        { src: "../img/registro/actividad-01/foto-01.jpg", caption: "Bienvenida general del evento." },
        { src: "../img/registro/actividad-01/foto-02.jpg", caption: "Momento de alabanza e integración." },
        { src: "../img/registro/actividad-01/foto-03.jpg", caption: "Equipo de apoyo y apertura." }
      ]
    },
    {
      title: "Actividad 02 - Taller de liderazgo",
      description: "Espacio de formación, dinámicas y trabajo por equipos.",
      photos: [
        { src: "../img/registro/actividad-02/foto-01.jpg", caption: "Sesión de enseñanza práctica." },
        { src: "../img/registro/actividad-02/foto-02.jpg", caption: "Dinámica grupal de integración." },
        { src: "../img/registro/actividad-02/foto-03.jpg", caption: "Registro del trabajo colaborativo." }
      ]
    },
    {
      title: "Actividad 03 - Jornada de servicio",
      description: "Actividad misionera con registro de salida y cierre.",
      photos: [
        { src: "../img/registro/actividad-03/foto-01.jpg", caption: "Inicio de la jornada de servicio." },
        { src: "../img/registro/actividad-03/foto-02.jpg", caption: "Desarrollo de la actividad misionera." },
        { src: "../img/registro/actividad-03/foto-03.jpg", caption: "Fotografía final del cierre." }
      ]
    }
  ];

  const galleryMount = document.getElementById("galleryMount");
  if (galleryMount) {
    galleryData.forEach((activity) => {
      const card = document.createElement("article");
      card.className = "activity-card";

      const header = document.createElement("div");
      header.className = "activity-header";
      header.innerHTML = `
        <div>
          <h3>${activity.title}</h3>
          <p>${activity.description}</p>
        </div>
        <span>${activity.photos.length} foto(s)</span>
      `;

      const carouselShell = document.createElement("div");
      carouselShell.className = "carousel-shell";

      const track = document.createElement("div");
      track.className = "carousel-track";
      track.dataset.index = "0";

      activity.photos.forEach((photo) => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        slide.innerHTML = `
          <img src="${photo.src}" alt="${photo.caption}">
          <div class="carousel-caption">${photo.caption}</div>
        `;
        track.appendChild(slide);
      });

      const controls = document.createElement("div");
      controls.className = "carousel-controls";

      const prevBtn = document.createElement("button");
      prevBtn.className = "carousel-btn";
      prevBtn.textContent = "Anterior";

      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-btn";
      nextBtn.textContent = "Siguiente";

      const moveTrack = (direction) => {
        const maxIndex = Math.max(activity.photos.length - 3, 0);
        let currentIndex = Number(track.dataset.index);

        currentIndex = direction === "next"
          ? Math.min(currentIndex + 1, maxIndex)
          : Math.max(currentIndex - 1, 0);

        track.dataset.index = String(currentIndex);
        const firstSlide = track.children[0];
        const slideGap = 16;
        const offset = currentIndex * (firstSlide.offsetWidth + slideGap);
        track.style.transform = `translateX(-${offset}px)`;
      };

      prevBtn.addEventListener("click", () => moveTrack("prev"));
      nextBtn.addEventListener("click", () => moveTrack("next"));

      controls.appendChild(prevBtn);
      controls.appendChild(nextBtn);

      const tip = document.createElement("p");
      tip.className = "edit-tip";
      tip.textContent = "Tip: para agregar más imágenes, solo añade nuevas rutas dentro de galleryData en js/main.js.";

      carouselShell.appendChild(track);
      carouselShell.appendChild(controls);
      carouselShell.appendChild(tip);

      card.appendChild(header);
      card.appendChild(carouselShell);
      galleryMount.appendChild(card);
    });
  }
});
