<template>
    <div>
        <terminal></terminal>
    </div>
</template>


<script>
import Terminal from './components/Terminal.vue'

export default {
    components: {
        Terminal
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
}
</style>
