<template>
    <div class="min-h-screen pt-16 bg-grey-lightest">
        <div class="w-64 bg-white rounded overflow-hidden flex flex-wrap mx-auto">
            <button 
                class="font-xs font-bold tracking-wide uppercase w-1/2 py-2 focus:outline-none"
                :class="[interval === 'monthly' ? 'text-white bg-blue' : 'text-black']"
                @click="selectInterval('monthly')"
            >
                Monthly
            </button>
            <button 
                class="font-xs font-bold tracking-wide uppercase w-1/2 py-2 focus:outline-none"
                :class="[interval === 'yearly' ? 'text-white bg-blue' : 'text-black']"
                @click="selectInterval('yearly')"
            >
                Yearly
            </button>
        </div>
        
        <div class="container mx-auto flex pt-16">
            <plan
                name="personal"
                monthly="19"
                yearly="199"
                :features="[
                    '20.000 Records',
                    '10 GB Storage',
                    '2 Hours of Down Time',
                    '1 Hour of Support'
                ]"
                :interval="interval"
                v-model="selectedPlan"
            ></plan>

            <plan
                name="professional"
                monthly="49"
                yearly="499"
                :features="[
                    '100.000 Records',
                    '20 GB Storage',
                    'Zero Down Time',
                    '12 Hours of Support'
                ]"
                :interval="interval"
                v-model="selectedPlan"
            ></plan>

            <plan
                name="enterprise"
                monthly="99"
                yearly="999"
                :features="[
                    '1.000.000 Records',
                    'Unlimited Storage',
                    'Zero Down Time',
                    'Unlimited Support'
                ]"
                :interval="interval"
                v-model="selectedPlan"
            ></plan>
        </div>

        <status-bar :selectedPlan="selectedPlan" :interval="interval"></status-bar>
    </div>
</template>

<script>
    import StatusBar from './StatusBar'
    import Plan from './Plan'

    export default {
        components: {
            StatusBar,
            Plan
        },

        data() {
            return {
                selectedPlan: '',
                interval: 'monthly'
            }
        },

        methods: {
            selectInterval(interval) {
                this.interval = interval
            }
        }
    }
</script>
