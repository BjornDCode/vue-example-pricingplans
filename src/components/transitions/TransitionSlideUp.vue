<template>
    <transition-base v-bind="$attrs" name="slide-up">
        <slot></slot>
    </transition-base>
</template>

<script>
    import TransitionBase from './TransitionBase'

    export default {
        components: {
            TransitionBase
        }
    }
</script>

<style>
    .slide-up-enter, .slide-up-leave-to {
        transform: translateY(100%);
    }
</style>
