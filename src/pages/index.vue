<script setup>
import { ref } from "vue";
import   { useAdvice }  from "../composables/useAdvice";

const { advices, search } =  useAdvice();

const searchItem = ref("");

</script>
<template>
<div>
    <input
    v-model="searchItem"
    @change="search(searchItem)"
     type="text" placeholder="Type a word for a random encouragement." class="w-full py-4 mt-16 rounded-full text-center text-xl "/>


 <div 
    class="grid grid-cols-2 gap-16 pt-16">
 <div
     v-for="(advice, index) in advices"
    :key="index"    
>   
<p class="text-yellow-300 text-xl">

    {{ advice.advice }}
</p>
 </div>
</div>
</div>
</template>