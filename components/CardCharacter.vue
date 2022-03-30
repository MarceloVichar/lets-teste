<template>
  <div class="flex flex-col w-60 h-120 gap-2 border border-black rounded cardcharacter">
    <img :src="character.thumbnail" alt="personagem" class="w-60 h-50">
    <div class="flex h-40">
      <h1 class="pl-2 text-left">
      {{character.name}}
      </h1>
    </div>
    <p class="block-with-text">
      {{character.description}}
    </p>
    <button type="submit" class="border ml-24 mr-2 mb-2 h-12 rounded">
      Veja mais...
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardCharacter',
  props:{
    character: Object
  }
}
</script>

<style>
  .cardcharacter {
    background-color: #E18880;
  }

  button {
    background: #E1CDCB;
  }

  .block-with-text {
    overflow: hidden;
    position: relative;

    height: 8rem; 
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