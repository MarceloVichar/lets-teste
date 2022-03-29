<template>
  <container class="flex flex-col w-60 h-120 gap-2 border border-black rounded cardcontainer">
    <img src="../static/assets/hulk.png" alt="personagem" class="w-60 h-50">
    <h1 class="pl-2 text-left">
      Hulk
    </h1>
    <p class="block-with-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button type="submit" class="border ml-24 mr-2 mb-2 h-12 rounded">
      Veja mais...
    </button>
  </container>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>

<style>
  .cardcontainer {
    background-color: #E18880;
  }

  button {
    background: #E1CDCB;
  }

  .block-with-text {
    overflow: hidden;
    position: relative;

    max-height: 8rem; /* aqui vc controla a altura da caixa de texto */
    text-align: justify;
    padding: 0.5rem;
}
.block-with-text:before {
    content: '...';
    position: absolute;
    right: 0px;
    bottom: 0;
    padding: 0 0px 0 0.25em;
}
</style>