<template>
    <div class="w-64 bg-white rounded overflow-hidden flex flex-wrap mx-auto">
        <interval-selector-button
            interval="monthly"
            v-model="currentInterval"
        ></interval-selector-button>
        <interval-selector-button
            interval="yearly"
            v-model="currentInterval"
        ></interval-selector-button>
    </div>
</template>

<script>
    import IntervalSelectorButton from './IntervalSelectorButton'

    export default {
        components: {
            IntervalSelectorButton
        },

        props: {
            value: {
                type: String,
                required: true
            }
        },

        computed: {
            currentInterval: {
                get() {
                    return this.value
                },

                set(interval) {
                    this.$emit('input', interval)
                }
            }
        }
    }
</script>
