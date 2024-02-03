//% Axios
import { HTTP } from "./api/Axios.js";
const App = Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            isLoading: false,
        };
    }, methods: {
        async fetchPosts() {
            this.isLoading = true;
            try {
                const posts = await HTTP.get('/posts');
                this.posts = posts.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.isLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    }
});
const mountedApp = App.mount('#app');


//% fetch
/* const App = Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            isLoading: false,
        };
    },
    methods: {
        fetchPosts() {
            this.isLoading = true;
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.posts = data;
                })
                .catch(error => {
                    this.error = error;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    },
    mounted() {
        this.fetchPosts();
    },
});
const mountedApp = App.mount('#app'); */

