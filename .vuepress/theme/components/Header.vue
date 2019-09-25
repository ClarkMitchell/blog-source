<template>
    <div>
        <GradientBar class="h-3"></GradientBar>
        <div class="container my-16">
            <div class="text-black font-serif font-semibold text-4xl md:text-5xl leading-tight mr-12 sm:mr-20 lg:mr-0" v-text="title"></div>
            <div class="text-black font-serif text-xl md:text-2xl font-medium" v-if="subtitle" v-text="subtitle"></div>
        </div>
    </div>
</template>

<script>
import GradientBar from './GradientBar'

export default {
    components: { GradientBar },
    computed: {
        title () {
            return this.$page.title
        },
        subtitle () {
            return this.$page.frontmatter.subtitle
        },
    }
}
</script>
