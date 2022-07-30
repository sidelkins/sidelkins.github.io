<script>

import Modal from "./lib/modal/Modal.svelte";
import PopupLongBtn from "./lib/modal/PopupLongBtn.svelte";
import { modal } from './lib/modal/stores.js';

</script>
<section>
    <!-- Experience -->
  <a id="experience">
    <h1>Experience</h1>
  </a>
    <div class="card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <h2>Software Development Intern</h2>
        <h3>Motion Industries, May 2022 - Aug 2022</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        <Modal show={$modal}>
          <PopupLongBtn />
        </Modal>
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
    </div>

    <div class="card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <h3 style="font-size: 1.25rem;">Director of IT & Webmaster</h3>
        <h2 style="font-size: 0.9rem;">The University of Alabama SGA, May 2022 - Aug 2022</h2>
        <p>Update and maintain Student Government Association website while abiding by WCAG 2.0 guidelines
          <br>
          <br>
          Provide University of Alabama’s student body with academic, legislative, and programming based
          resources
        </p>
      </div>
      <div class="small-container-right" style="">
        <img src="src/assets/sga-logo.png" style="align-self:center; justify-content: center; width: 150px;">
        <div class="toolbox">

        </div>
      </div>
    </div>

    <div class="card" style="padding-top: 10px;">
      <div class="big-container-left" style="">
        <h3 style="font-size: 1.25rem;">Director of Public Relations</h3>
        <h2 style="font-size: 0.9rem;">The University of Alabama IFC, May 2022 - Aug 2022</h2>
        <p>Work alongside executive members to develop new initiatives
          <br>
          <br>
          Deliver announcements of recruitment schedules and contact information through social media
          <br>
          <br>
          Organize and advertise philanthropic events to improve the Tuscaloosa area
        </p>
      </div>
      <div class="small-container-right" style="">
        <img src="src/assets/ifc-logo.png" style="align-self:center; justify-content: center; width: 150px;">
        <div class="toolbox">
          
        </div>
      </div>
    </div>
  </section>

  <style>
    a {
      text-decoration: none;
      color: #ccd6f6;
    }

    h2 {

    }
  </style>