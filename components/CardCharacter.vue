<template>
  <div
    class="flex flex-col w-60 h-120 gap-4 cardcharacter rounded-lg overflow-hidden p-2 shadow-md border border-slate-100"
  >
    <InfosCardCharacter :character="character" />
    <SubmitButtonCardCharacter :character="character" />
  </div>
</template>

<script>
export default {
  name: "CardCharacter",
  props: {
    character: Object,
  },
};
</script>
