import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

const videosModule = {
    namespaced: true,
    state() {
        return {
            searchVideo: null,
            videos: [
                {
                    id: 1,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: " Martin ",
                    date: "2 years"

                },
                {
                    id: 2,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Garrix",
                    date: "2 years"

                },
                {
                    id: 3,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Marshmello,",
                    date: "2 years"

                },
                {
                    id: 4,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Marshmello Martin Garrix",
                    date: "2 years"

                },
                {
                    id: 5,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Marshmello, Avicii",
                    date: "2 years"

                },
                {
                    id: 6,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Coldplay, Martin Garrix",
                    date: "2 years"

                },
                {
                    id: 7,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Marshmello,  Martin Garrix",
                    date: "2 years"

                },
                {
                    id: 8,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Marshmello,",
                    date: "2 years"

                },
                {
                    id: 9,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: " Avicii,",
                    date: "2 years"

                },
                {
                    id: 10,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko?t=5",
                    name: "Coldplay",
                    date: "2 years"

                },
                {
                    id: 11,
                    image: "https://tse3.mm.bing.net/th?id=OIP.awRFiN5xNH8xHnBxaHjSfgHaFj&pid=Api&P=0",
                    url: "https://youtu.be/Ea3Uk8ZE5ko",
                    name: "Martin Garrix",
                    date: "2 years"

                },

            ]
        }
    },
    getters,
    mutations,
    actions,
}

export default videosModule