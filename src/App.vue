<template>
    <div id="app" class="font-sans antialiased">
        <plan-selector></plan-selector>
    </div>
</template>

<script>
    import PlanSelector from './components/PlanSelector'

    export default {
        name: 'app',
        components: {
            PlanSelector
        }
    }
</script>

<style>
    @tailwind preflight;
    @tailwind components;
    @tailwind utilities;

    .push-r {
        right: 100%;
    }

    .push-t {
        top: 100%;
    }

    .push-b {
        bottom: 100%;
    }

    .push-l {
        left: 100%;
    }

    .outline-solid {
        outline-style: solid;
    }

    .outline {
        outline-width: 1px;
    }

    .outline-0 {
        outline-width: 0;
    }

    .outline-2 {
        outline-width: 2px;
    }

    .outline-4 {
        outline-width: 4px;
    }

    .outline-8 {
        outline-width: 8px;
    }

    .outline-blue {
        outline-color: config('colors.blue');
    }

</style>
