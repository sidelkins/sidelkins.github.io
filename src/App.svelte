<script>
import Hero from "./hero.svelte";
</script>

<!-- Hero Header -->
<Hero></Hero>

<div class="main-content" style="text-align: center; width: 100%; position: absolute;">
  <section>
    <!-- About -->
  <a id="about">
    <h1>About</h1>
    <!-- Introduction -->
    <h2 style="padding-bottom: 10px; padding-top: 10px;">Introduction</h2>
  </a>
    <div class="flex-container-card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <p style="font-size: 2rem;">Hello, I'm Sid Elkins.</p>
        <p style="font-size: 1.1rem;">I'm a student at The University of Alabama studying Management Information Systems. Scroll down to learn more about me!</p>
        <h2 style="font-size: 0.8rem;">Note: This is a work-in-progress, and not everything is guranteed to work as intended...</h2>
      </div>
      <div class="small-container-right flex-container-card-image">
        <img style="width: 80%;" src="https://raw.githubusercontent.com/sidelkins/sidelkins.github.io/635e1e370495c123f283bd244f3e8c6594013e4a/src/assets/headshot.jpg" class="title-image offset-outline" alt="headshot">
      </div>
    </div>
  </section>

  <section>
    <!-- Experience -->
  <a id="experience">
    <h1>Experience</h1>
  </a>
    <div class="flex-container-card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <h3 style="font-size: 1.25rem;">Software Development Intern</h3>
        <h2 style="font-size: 1.25rem;">Motion Industries, May 2022 - Aug 2022</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div class="small-container-right" style="">
        <img src="src/assets/motion-industries.png" style="align-self:center; justify-content: center; width: 150px;">
        <div class="toolbox">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" class="icon-image">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="icon-image"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="icon-image"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" class="icon-image" />

        </div>
      </div>
      <div>   
      </div>
    </div>

    <div class="flex-container-card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <h3 style="font-size: 1.25rem;">Director of IT & Webmaster</h3>
        <h2 style="font-size: 0.9rem;">The University of Alabama SGA, May 2022 - Aug 2022</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div class="small-container-right" style="">
        <img src="src/assets/sga-logo.png" style="align-self:center; justify-content: center; width: 150px;">
        <div class="toolbox">

        </div>
      </div>
      <div>   
      </div>
    </div>
  </section>

  <section>
    <!-- Projects -->
  <a id="projects">
    <h1>Projects</h1>
  </a>
    <div class="flex-container-card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div class="small-container-right flex-container-card-image">
        <img src="https://raw.githubusercontent.com/sidelkins/sidelkins.github.io/4cec8bed6db2903c5888a45b7a80b58358ab0d88/src/assets/placeholder-image.png" class="title-image" alt="">
      </div>
    </div>
  </section>

</div>