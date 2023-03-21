<template>
    <div>
        <input type="text" v-model="userId" />
        <button @click="myFunction">클릭</button>
        <button @click="changeData">변경</button>

    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            userId: '안녕하세요'
             }
        },
        setup() {},
    created() {},
    unmounted() {},
    methods: {
        myFunction() {
            console.log(this.userId)
        },
        changeData() {
            this.userId = 'jeremy'
        }
    }
}
</script>
