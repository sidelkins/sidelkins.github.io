
<section>
    <!-- About -->
  <a id="about">
    <h1>About</h1>
  </a>

    <!-- Introduction -->
    <h2 style="padding-bottom: 10px; padding-top: 10px;">Introduction</h2>
    <div class="card">
        <div class="top">
            <div class="left-container">
                <h3>Hello, I'm Sid Elkins.</h3>
            </div>
            <div class="right-container">
                <img 
                class="image offset-outline rounded-corners"
                src="https://raw.githubusercontent.com/sidelkins/sidelkins.github.io/635e1e370495c123f283bd244f3e8c6594013e4a/src/assets/headshot.jpg"
                alt="headshot">
            </div>
        </div>
        <div></div>
        <div class="bottom-container">
            <p>I'm a student at The University of Alabama studying Management Information Systems. Scroll down to learn more about me!</p>
            <p style="color: #495670;">Note: This is a work-in-progress, and not everything is guranteed to work as intended...</p>
        </div>
    </div>
  </section>

  <style>
    a {
        text-decoration: none;
        color: #ccd6f6;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: clamp(12px, 35vw, 25px);
        padding: 10px;
    }

    .top {
        display: flex;
        width: 100%;
        flex-direction: row;
    }

    .left-container{
        flex: 1;
        align-self: center;
    }

    .right-container{
        align-self: flex-end;
    }

    .bottom-container {
        align-self: center;
    }

    .image {
        width: clamp(125px, 35vw, 250px);
        padding-bottom: 0.666796875%;
    }

  </style>