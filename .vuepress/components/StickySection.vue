<template>
    <div class="sticky-section container">
        <div class="unstick pr-4">
            <InstructionCard id="info-1" v-if="first">
                {{ first }}
            </InstructionCard>
            <InstructionCard id="info-2" v-if="second">
                {{ second }}
            </InstructionCard>
            <InstructionCard id="info-3" v-if="third">
                {{ third }}
            </InstructionCard>
            <InstructionCard id="info-4" v-if="fourth">
                {{ fourth }}
            </InstructionCard>

        </div>
        <div class="stick pl-4 m-t-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["first", "second", "third", "fourth"]
    }
</script>

<style scoped>

</style>
