<template>
  <div
    class="flex flex-col items-center w-60 h-120 gap-4 cardcharacter rounded-lg overflow-hidden p-2 shadow-md border border-slate-100"
  >
    <InfosCardCharacter :character="character" />
    <SubmitButtonCardCharacter :character="character" />
  </div>
</template>

<script>
import InfosCardCharacter from '@/components/dashboard/cardCharacterContainer/cardCharacterExibs/cardCharacter/infosCardCharacter/InfosCardCharacter.vue'
import SubmitButtonCardCharacter from '@/components/dashboard/cardCharacterContainer/cardCharacterExibs/cardCharacter/submitButtonCardCharacter/SubmitButtonCardCharacter.vue'

export default {
  components: { InfosCardCharacter, SubmitButtonCardCharacter },
  name: "CardCharacter",
  props: {
    character: Object,
  },
};
</script>
