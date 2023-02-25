const tagsModule = {
    namespaced: true,
    state() {
        return {
            tags: [
                {
                    name: "ანიმაცია",
                },
                {
                    name: "მუსიკა",
                },
                {
                    name: "პირდაპირი",
                },
                {
                    name: "მიქსები",
                },
                {
                    name: "ვიდეო თამაშები",
                },
                {
                    name: "კულინარიული შოუები",
                },
                {
                    name: "ხელობა",
                },
            ]
        }
    },
    getters:{
        tags(state){
            return state.tags
        }
    }
}

export default tagsModule