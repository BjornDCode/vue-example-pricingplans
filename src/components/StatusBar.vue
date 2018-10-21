<template>
    <transition-slide-up :duration="300">
        <div class="fixed pin-b w-full bg-blue py-4" v-show="selectedPlan.length">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <span class="text-grey-lighter text-sm mr-4">Selected plan:</span>
                    <span class="text-white font-bold text-2xl mr-2">
                        {{ selectedPlan | capitalise }}
                    </span>
                    <span class="text-grey-lighter text-sm">
                        ({{ interval | capitalise }})
                    </span>
                </div>
                <a href="#" class="block no-underline bg-white text-black font-xs font-bold tracking-wide uppercase hover:bg-grey-lightest py-3 px-6">Continue</a>
            </div>
        </div>
    </transition-slide-up>
</template>

<script>
    export default {
        props: {
            selectedPlan: {
                type: String,
                required: true
            },
            interval: {
                type: String,
                required: true
            }
        }
    }
</script>

