<template>
    <div>
        <button @click="updateColor"><slot></slot></button>
    </div>
</template>

<script>

    export default {
        methods: {
            updateColor: function() {
                this.$store.commit('changeButtonColor','blue')
            }
        }
    }
</script>

<style scoped>
    button {
        color: blue;
    }
</style>