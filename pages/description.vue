<template>
<main class="flex flex-col items-center gap-12 min-h-screen">
    <HeaderContainer />
    <container class="w-3/4 p-2  flex flex-col bg-white rounded">
      <div class="flex w-full justify-between">
        <div class="flex items-center justify-center w-2/3">
            <h1 class="text-center text-2xl ">Nome do personagem</h1>
        </div>
        <img src="../static/assets/hulk.png" alt="img personagem" class=" w-1/3 h-50">
      </div> 
      <nav class="flex justify-center space-x-1 pt-2 ">
        <a  class="checked font-medium px-3 py-2 text-slate-700 rounded-t-lg hover:bg-slate-100 hover:text-slate-900 cursor-pointer">História</a>
        <a  class="font-medium px-3 py-2 text-slate-700 rounded-t-lg hover:bg-slate-100 hover:text-slate-900 cursor-pointer">Participações</a>
        <a  class="font-medium px-3 py-2 text-slate-700 rounded-t-lg hover:bg-slate-100 hover:text-slate-900  cursor-pointer">Notícias</a>
      </nav>
      <div class="infos w-full p-2 h-auto rounded">
        <p class="text-justify">Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.A ordem dos tratores não altera o pão duris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Copo furadis é disculpa de bebadis, arcu quam euismod magna.

Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem manda na minha terra sou euzis!Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.

Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Delegadis gente finis, bibendum egestas augue arcu ut est.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Paisis, filhis, espiritis santis.</p> 
      </div>
    </container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'description'
})
</script>

<style>

  main {
    background: #61150E;
  }

  a:hover {
    opacity: 0.8;
  }

  a:hover, .infos, .checked{
    background: #E18880;
  }
</style>