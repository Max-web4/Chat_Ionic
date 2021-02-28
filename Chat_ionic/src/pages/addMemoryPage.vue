<template>
    <basic-layout pageTitle="Add a memory" pageDefaultBackLink='/memories'>
      <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </basic-layout>
</template>

<script>
import createMemoryForm from '../components/memories/createMemoryForm.vue'
import basicLayout from '../components/Basic/basicLayout.vue'
export default {
  components: { 
    basicLayout,
    createMemoryForm,
  },
  methods:{
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
    
}
</script>