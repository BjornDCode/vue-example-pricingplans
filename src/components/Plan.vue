<template>
    <div class="bg-white flex-1 mr-8 shadow-md" :class="isSelected ? 'outline-2 outline-blue outline-solid' : ''">
        <div class="border-b border-grey-lighter text-center py-2">
            <h2 class="text-2xl text-black">{{ name | capitalise }}</h2>
        </div>
        <div class="border-b border-grey-lighter text-center py-2">
            <div class="relative inline-block">
                <span class="text-black font-bold text-2xl absolute pin-t push-r">$</span>
                <h3 class="text-black font-bold text-6xl leading-none">
                    {{ price }}
                </h3>
                <div class="flex text-grey text-sm absolute pin-b push-l">
                    <span class="mr-1">/</span>
                    <span>{{ interval }}</span>
                </div>
            </div>
        </div>
        <ul class="list-reset">
            <li 
                class="border-b border-grey-lighter p-4 font-semibold text-grey-light"
                v-for="(feature, i) in features"
                :key="i"
            >
                {{ feature }}
            </li>
        </ul>
        <div class="p-2">
            <button 
                class="bg-blue w-full py-3 text-white font-xs font-bold tracking-wide uppercase focus:outline-none hover:bg-blue-light"
                @click="select(name)"
                v-text="isSelected ? 'Unselect' : 'Select'"
            >
                Select
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String, 
                required: true
            },
            monthly: {
                type: String, 
                required: true
            },
            yearly: {
                type: String, 
                required: true
            },
            features: {
                type: Array,
                required: true
            },
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
                return this.value === this.name
            },

            price() {
                return this.interval === 'monthly' ? this.monthly : this.yearly
            }
        },

        methods: {
            select(plan) {
                if (this.isSelected) {
                    this.$emit('input', '')
                    return 
                }

                this.$emit('input', plan)
            }
        }
    }
</script>
