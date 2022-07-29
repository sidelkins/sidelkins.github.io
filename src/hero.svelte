<div class="hero-image">
    <div class="hero-text">
      <h1>sid elkins</h1>
      <br>
      <h1>{randomEmoji()}</h1>
    </div>
    <Nav></Nav>
</div>


<script>
  import Nav from "./nav.svelte";
  var emojis = ['🤵','🤠', '😁','🍔'];

  export function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
</script>

