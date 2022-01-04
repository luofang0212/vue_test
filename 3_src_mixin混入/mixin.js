export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！！')
    },
}

export const hunhe2 = {
    data(){
        return {
            a: 100,
            b: 200
        }
    }
}