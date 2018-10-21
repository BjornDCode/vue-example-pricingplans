<template>
    <button 
        class="font-xs font-bold tracking-wide uppercase w-1/2 py-2 focus:outline-none"
        :class="[isSelected ? 'text-white bg-blue' : 'text-black']"
        @click="select(interval)"
    >
        {{ interval | capitalise }}
    </button>
</template>

<script>
    export default {
        props: {
            interval: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },

        computed: {
            isSelected() {
                return this.value === this.interval
            }
        },

        methods: {
            select(interval) {
                this.$emit('input', interval)
            }
        }
    }
</script>
