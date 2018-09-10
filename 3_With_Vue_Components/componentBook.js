Vue.component('book', {
  props: ['book'],
  template: `
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
          <div class="front">
              <img :src="book.portada" :alt="book.portada">
          </div>
          <div class="back">
              <h2>{{book.titulo}}</h2>
              <span>{{book.descripcion}}</span>
              <a :href="book.detalle"><button class="btn">More Info</button></a>
          </div>
      </div>
  </div>`,
})