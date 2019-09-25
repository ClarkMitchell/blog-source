<template>
    <div :class="parent + id" class="shadow rounded-lg overflow-hidden bg-grey-lightest mb-6">
        <GradientBar :progress="progress" class="h-3" />
        <div class="p-4">
          <slot></slot>
      </div>
    </div>
</template>

<script>
import GradientBar from '@theme/components/GradientBar'
 
export default {
    components: { GradientBar },
    props: ["parent", "id"],
    data () {
        return {
            progressValue: 0,
            progressMax: 0,
        }
    },
    computed: {
        progress () {
            if (this.progressMax === 0) {return 0;}
            const percent = Math.floor(this.progressValue / this.progressMax * 1000) / 10
            return Math.min(percent, 100)
        }
    },
    methods: {
        update () {
            const content = document.querySelector('.' + this.parent + this.id)
            const progressValue = window.scrollY + window.innerHeight / 4
            const progressMax = content.offsetTop
            this.progressMax = progressMax
            this.progressValue = progressValue
        },
    },
    mounted () {
        this.update()
        window.addEventListener('scroll', this.update, { passive: true })
        window.addEventListener('resize', this.update, false)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.update)
        window.removeEventListener('resize', this.update)
    }
}
</script>

<style scoped>

</style>
