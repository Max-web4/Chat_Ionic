<template>
<basic-layout pageTitle="All memories">
       <memories-list :memories="memories"></memories-list>
  </basic-layout>
</template>


<script>

import basicLayout from '../components/Basic/basicLayout.vue';
import memoriesList from '../components/memories/memoriesList.vue'

export default {
    components:{
        basicLayout,
        memoriesList
       
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    }
    }
</script>

<style scoped>

</style>