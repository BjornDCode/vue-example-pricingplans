<template>
    <transition :name="name" v-on="hooks">
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                default: 200
            }
        },

        computed: {
            hooks() {
                return {
                    beforeEnter: this.setDuration,
                    afterEnter: this.cleanUpDuration,
                    beforeLeave: this.setDuration,
                    afterLeave: this.cleanUpDuration,
                    ...this.$listeners
                };
            }
        },

        methods: {
            setDuration(el) {
                el.style.transitionDuration = `${this.duration}ms`
            },
            cleanUpDuration(el) {
                el.style.transitionDuration = ''
            }
        }
    }
</script>
