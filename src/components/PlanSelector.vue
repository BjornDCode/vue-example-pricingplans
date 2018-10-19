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
            <div class="bg-white flex-1 mr-8 shadow-md" :class="selectedPlan === 'personal' ? 'outline-2 outline-blue outline-solid' : ''">
                <div class="border-b border-grey-lighter text-center py-2">
                    <h2 class="text-2xl text-black">Personal</h2>
                </div>
                <div class="border-b border-grey-lighter text-center py-2">
                    <div class="relative inline-block">
                        <span class="text-black font-bold text-2xl absolute pin-t push-r">$</span>
                        <h3 
                            class="text-black font-bold text-6xl leading-none"
                            v-text="interval === 'monthly' ? '19' : '190'"
                        ></h3>
                        <div class="flex text-grey text-sm absolute pin-b push-l">
                            <span class="mr-1">/</span>
                            <span>{{ interval }}</span>
                        </div>
                    </div>
                </div>
                <ul class="list-reset">
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        20.000 Records
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        20 GB Storage
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        2 Hours of Down Time
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        1 Hour of Support
                    </li>
                </ul>
                <div class="p-2">
                    <button 
                        class="bg-blue w-full py-3 text-white font-xs font-bold tracking-wide uppercase focus:outline-none hover:bg-blue-light"
                        @click="selectPlan('personal')"
                        v-text="selectedPlan === 'personal' ? 'Unselect' : 'Select'"
                    >
                        Select
                    </button>
                </div>
            </div>
            <div class="bg-white flex-1 mr-8 shadow-md" :class="selectedPlan === 'professional' ? 'outline-2 outline-blue outline-solid' : ''">
                <div class="border-b border-grey-lighter text-center py-2">
                    <h2 class="text-2xl text-black">Professional</h2>
                </div>
                <div class="border-b border-grey-lighter text-center py-2">
                    <div class="relative inline-block">
                        <span class="text-black font-bold text-2xl absolute pin-t push-r">$</span>
                        <h3 
                            class="text-black font-bold text-6xl leading-none"
                            v-text="interval === 'monthly' ? '49' : '490'"
                        ></h3>
                        <div class="flex text-grey text-sm absolute pin-b push-l">
                            <span class="mr-1">/</span>
                            <span>{{ interval }}</span>
                        </div>
                    </div>
                </div>
                <ul class="list-reset">
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        100.000 Records
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        10 GB Storage
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        Zero Down Time
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        12 Hours of Support
                    </li>
                </ul>
                <div class="p-2">
                    <button 
                        class="bg-blue w-full py-3 text-white font-xs font-bold tracking-wide uppercase focus:outline-none hover:bg-blue-light"
                        @click="selectPlan('professional')"
                        v-text="selectedPlan === 'professional' ? 'Unselect' : 'Select'"
                    >
                        Select
                    </button>
                </div>
            </div>
            <div class="bg-white flex-1 shadow-md" :class="selectedPlan === 'enterprise' ? 'outline-2 outline-blue outline-solid' : ''">
                <div class="border-b border-grey-lighter text-center py-2">
                    <h2 class="text-2xl text-black">Enterprise</h2>
                </div>
                <div class="border-b border-grey-lighter text-center py-2">
                    <div class="relative inline-block">
                        <span class="text-black font-bold text-2xl absolute pin-t push-r">$</span>
                        <h3 
                            class="text-black font-bold text-6xl leading-none"
                            v-text="interval === 'monthly' ? '99' : '990'"
                        ></h3>
                        <div class="flex text-grey text-sm absolute pin-b push-l">
                            <span class="mr-1">/</span>
                            <span>{{ interval }}</span>
                        </div>
                    </div>
                </div>
                <ul class="list-reset">
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        1.000.000 Records
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        Unlimited Storage
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        Zero Down Time
                    </li>
                    <li class="border-b border-grey-lighter p-4 font-semibold text-grey-light">
                        Unlimited Support
                    </li>
                </ul>
                <div class="p-2">
                    <button 
                        class="bg-blue w-full py-3 text-white font-xs font-bold tracking-wide uppercase focus:outline-none hover:bg-blue-light"
                        @click="selectPlan('enterprise')"
                        v-text="selectedPlan === 'enterprise' ? 'Unselect' : 'Select'"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>

        <status-bar :selectedPlan="selectedPlan" :interval="interval"></status-bar>
    </div>
</template>

<script>
    import StatusBar from './StatusBar'

    export default {
        components: {
            StatusBar
        },

        data() {
            return {
                selectedPlan: '',
                interval: 'monthly'
            }
        },

        methods: {
            selectPlan(plan) {
                if (this.selectedPlan === plan) {
                    this.selectedPlan = ''
                    return 
                }

                this.selectedPlan = plan
            },

            selectInterval(interval) {
                this.interval = interval
            }
        },

        filters: {
            capitalise(value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>
