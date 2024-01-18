<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import reade1storie from '@/views/reade1storieView.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld,
    reade1storie,
  }
}
</script>