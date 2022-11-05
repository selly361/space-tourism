<template>
  <main>
    <article>
      <section>
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
        <a href="#/destination">EXPLORE</a>
    </article>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  height: 900px;
  background: url("@/assets/home/background-home-desktop.jpg") no-repeat;
  background-size: cover;
}

article {
  position: absolute;
  width: calc(100vw - 330px);
  height: 382px;
  top: 387px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  left: 0;
  right: 0;
  align-items: center;
}

section {
  width: 450px;
  display: grid;
  gap: 24px;
  align-items: center;
}

section h4 {
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #d0d6f9;
}

p {
  font-family: "Barlow";
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}


a {
  background: #ffffff;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #0b0d17;
  position: relative;
}

a::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: inherit;
  opacity: 0.09;
  transition: 0.5s transform;
  border-radius: 50%;
  transform: scale(1);
  z-index: 1;
}

a:hover::before {
  transform: scale(1.5);
}
</style>
