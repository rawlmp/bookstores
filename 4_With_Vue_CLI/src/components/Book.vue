<template lang="html">

  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
          <div class="front">
              <img :src="book.cover" :alt="book.title">
          </div>
          <div class="back">
              <h2>{{book.title}}</h2>
              <span>{{book.description}}</span>
              <a :href="book.detail"><button class="btn">More Info</button></a>
          </div>
      </div>
  </div>

</template>



<script>
export default {
  name:'Book',
  props:{
    book: Object
  }
}
</script>



<style>

/* entire container, keeps perspective */
.flip-container
{
    margin: 30px;

    perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container:hover .flipper,
.flip-container.hover .flipper
{
    transform: rotateY(180deg);
}

.flip-container,
.front,
.back
{
    width: 320px;
    height: 480px;
}

/* flip speed goes here */
.flipper
{
    position: relative;

    transition: .6s;

    transform-style: preserve-3d;
}

/* hide back of pane during swap */
.front,
.back
{
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 10px;

    backface-visibility: hidden;
}

/* front pane, placed above back */
.front
{
    z-index: 2;
    /* for firefox 31 */

    transform: rotateY(0deg);

    border: 3px solid purple;
    border-radius: 10px;
}

/* back, initially hidden pane */
.back
{
    transform: rotateY(180deg);
}

img
{
    width: 100%;
    height: 100%;

    border-radius: 5px;
}

.back
{
    font-size: 16px;

    display: flex;
    align-items: center;
    flex-direction: column;

    color: white;
    background: linear-gradient(to bottom, #cb60b3 0%,#ad1283 50%,#41022c 100%);
}

.back > *
{
    padding: 20px;
}



.hidden
{
    display: none;

    transition: all .7s;
}

header
{
    display: flex;
    justify-content: center;

    margin-top: 20px;
}

input
{
    font-size: 20px;

    width: 300px;
    height: 40px;
}

header button
{
    font-size: 20px;
}

/* Loader */
.lds-ripple
{
    position: relative;

    display: inline-block;

    width: 64px;
    height: 64px;
}
.lds-ripple div
{
    position: absolute;

    animation: lds-ripple 1s cubic-bezier(0, .2, .8, 1) infinite;

    opacity: 1;
    border: 10px solid rgb(255, 0, 0);
    border-radius: 10%;
}
.lds-ripple div:nth-child(2)
{
    animation-delay: -.5s;
}
@keyframes lds-ripple
{
    0%
    {
        top: 28px;
        left: 28px;

        width: 0;
        height: 0;

        opacity: 1;
    }
    100%
    {
        top: -1px;
        left: -1px;

        width: 58px;
        height: 58px;

        opacity: 0;
    }
}

#loader
{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 40vh;
}


/* Button */
.btn
{
    font-family: Arial;
    font-size: 20px;

    padding: 10px 20px 10px 20px;

    text-decoration: none;

    color: #fff;
    -webkit-border-radius: 28;
       -moz-border-radius: 28;
            border-radius: 28px;
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image:    -moz-linear-gradient(top, #3498db, #2980b9);
    background-image:     -ms-linear-gradient(top, #3498db, #2980b9);
    background-image:      -o-linear-gradient(top, #3498db, #2980b9);
    background-image:         linear-gradient(to bottom, #3498db, #2980b9);
}

.btn:hover
{
    text-decoration: none;

    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image:    -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image:     -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image:      -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image:         linear-gradient(to bottom, #3cb0fd, #3498db);
}

</style>
