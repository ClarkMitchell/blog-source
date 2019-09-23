<template>
    <div class="sticky-section container">
        <div class="unstick pr-4">
            <InstructionCard v-if="first">
                {{ first }}
            </InstructionCard>
            <InstructionCard v-if="second">
                {{ second }}
            </InstructionCard>
            <InstructionCard v-if="third">
                {{ third }}
            </InstructionCard>
            <InstructionCard v-if="fourth">
                {{ fourth }}
            </InstructionCard>

        </div>
        <div class="stick pl-4">
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
