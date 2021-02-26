<template>
    <basic-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">Could not find a memory for the given id. </h2>
        <memory-overview v-else 
        :title="loadedMemory.title" 
        :image="loadedMemory.image" 
        :description="loadedMemory.description"
        >
        </memory-overview>
    </basic-layout>
</template>

<script>
import memoryOverview from '../components/memories/memoryOverview.vue';

export default {
    components: {
        memoryOverview
    },
  data() {
      return{
          memoryId: this.$route.params.id,
    }
  },
  computed: {
      loadedMemory() {
          return this.$store.getters.memory(this.memoryId);
      }
  },
//   watch: {
//       '$route'(currentRoute) {
//           this.memoryId = currentRoute.params.id;
//       }
//   }
    
}
</script>