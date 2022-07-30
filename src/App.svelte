<script>
  import Hero from "./hero.svelte";
  import About from "./lib/About.svelte";
  import Experience from "./Experience.svelte";
</script>

<!-- Hero Header -->
<Hero />

<div class="main-content" style="text-align: center; width: 100%; position: absolute;">
  
  <About />
  <Experience />
  <!-- <Projects /> -->
  <!-- <Contact /> -->

</div>

<style>
  h1 {
  font-family: 'Rubik', sans-serif;
  font-size: clamp(1rem, 8vw, 3rem);
  font-weight: 700;
  color: var(--lightest-slate);
  }

  h2 {
  font-family: 'Rubik', sans-serif;
  font-size: clamp(0.75rem, 4vw, 2rem); 
  font-weight: 500;
  color: var(--slate)
}

  h3 {
  font-family: 'Rubik', sans-serif;
  font-size: clamp(0.5rem, 2.5vw, 1rem); 
  font-weight: 500;
  color: white;
  padding-bottom: 10px;
}

p {
  font-family: 'Rubik', sans-serif;
  font-size: clamp(0.5rem, 2vw, 9rem); 
  font-weight: 400;
  color: white;
}

a {
  text-decoration: none;
}
</style>