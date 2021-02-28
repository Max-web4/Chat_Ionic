<template>
<basic-layout pageTitle="All memories">
        <template v-slot:actions-end>
            <ion-button router-link="/memories/add">
                <slot name="icon-only">
                <ion-icon  :icon="add"></ion-icon>
                </slot>
            </ion-button>
        </template>
       <memories-list :memories="memories"></memories-list>
  </basic-layout>
</template>


<script>
import {IonButton, IonIcon} from '@ionic/vue';
import { add } from 'ionicons/icons'
import basicLayout from '../components/Basic/basicLayout.vue';
import memoriesList from '../components/memories/memoriesList.vue'

export default {
    components:{
        basicLayout,
        memoriesList,
        IonButton,
        IonIcon
       
    },
    data () {
        return { add };
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