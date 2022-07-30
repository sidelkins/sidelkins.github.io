<script>

</script>

<div class="nav-container">
    <div>

    </div>
    <div class="buttons">
        <a href="#about">
            <h3 class="page-button">about</h3>
        </a>
        <a href="#experience">
            <h3 class="page-button">experience</h3>
        </a>
        <a href="#projects">
            <h3 class="page-button">projects</h3>
        </a>
        <a href="#contact">
            <h3 class="page-button">contact</h3>
        </a>
    </div>
</div>

<style>
    a {
        text-decoration: none;
    }
    .nav-container {
        display: flex;
        flex-direction: column;
        align-self: flex-end;  
        width: 100%;
        padding-right: 8rem;
        padding-left: 8rem;
    }

    .buttons {
        display: flex;
        align-self: center;
        gap: 0.8rem;
    }

    .page-button {
        font-size: clamp(10px, 5vw, 20px);
        /* -webkit-transition: color 0.2s; */
        transition: color 0.15s;
        border-bottom: solid 2px;
    }

    .page-button:hover {
        color: #a8b2d1;
    }
</style>