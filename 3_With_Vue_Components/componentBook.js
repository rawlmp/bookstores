Vue.component('book', {
  props: ['book'],
  template: `
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
          <div class="front">
              <img :src="book.cover" :alt="book.cover">
          </div>
          <div class="back">
              <h2>{{book.title}}</h2>
              <span>{{book.description}}</span>
              <a :href="book.detail"><button class="btn">More Info</button></a>
          </div>
      </div>
  </div>`,
})