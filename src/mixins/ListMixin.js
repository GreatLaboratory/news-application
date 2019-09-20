import bus from "@/utils/bus";

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        bus.$emit('start:spinner');
        setTimeout(()=>{
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(()=>{
                    bus.$emit('end:spinner');
                })
                .catch(err=>{
                    console.log(err)
                });
        }, 2000)
    }
}

// 쓸 컴포넌트에서 mixin: [ListMixin] 이런 식으로 사용한다.
// 현재 프로젝트에선 hoc를 이용할 예정