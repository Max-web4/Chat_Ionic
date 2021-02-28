import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {id: "m1", image: "https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/fotolia-92027264european-day-forest-green-forest.jpg?itok=biCWJPQQ", title: "Mountains", description: "Amazing trip",},
                {id: "m2", image: "https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", title: "Ocean", description: "Power of elements",},
                {id: "m3", image: "https://www.study.ru/uploads/server/u9W0t6PiqVGBmMAt.jpg", title: "Food", description: "So tasty",}
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
