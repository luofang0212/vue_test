<template>
  <div id="app">
   <Count/>
   <hr>
   <Persons/>
  </div>
</template>

<script>

  import Count from './components/Count'
  import Persons from './components/Persons'

  export default {
    components: {Count,Persons},
  }
</script>

<style>
  *{
      margin: 0;
      padding: 0;
  }
  #app {
    padding: 0 12px;
  }
  hr{
    margin: 12px 0;
  }
</style>
