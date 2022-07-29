<script>
    import { getContext } from 'svelte';
      
    import PopupLongContent from './PopupLongContent.svelte';
  
    const { open } = getContext('simple-modal');
      
      let opening = false;
      let opened = false;
      let closing = false;
      let closed = false;
      const showPopupLong = () => {
          open(PopupLongContent, { message: "It's a popup with long text!" });
      };
  </script>
  
  <section>
      <br/>
      <button on:click={showPopupLong}>Read more...</button>
      <br/>
  
      <div id="state">
          {#if opening}
              <p>opening modal...</p>
          {:else if opened}
              <p>opened modal!</p>
          {:else if closing}
              <p>closing modal...</p>
          {:else if closed}
              <p>closed modal!</p>
          {/if}
      </div>
  </section>
  
  <style>
      section {
          padding-top: 0.5em;
      }
      
      #state {
          position: absolute;
          top: 0;
          right: 0;
          opacity: 0.33;
          font-size: 0.8em;
      }
  </style>