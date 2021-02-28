import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {id: "m1", image: "https://commons.wikimedia.org/w/index.php?search=mountain&title=Special%3ASearch&go=Go&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1#/media/File:%D0%9D%D1%96%D0%B6%D0%BD%D0%B8%D0%B9_%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D1%81%D0%B2%D1%96%D1%82%D0%BB%D0%BE.jpg", title: "Mountains", description: "Amazing trip",},
                {id: "m2", image: "https://unsplash.com/photos/LQ_SoWQDk84", title: "Ocean", description: "Power of elements",},
                {id: "m3", image: "../img/table_with_food_top_view_900x700.jpg", title: "Food", description: "So tasty",}
               ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description,
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        },
    }
});

export default store;
