const htmlTemplate = await fetch('/scripts/VueComponents/Templates/App.html')
    .then(response => response.text());

// App.js
async function createApp() {

    const App = {
        template: htmlTemplate,
        props: {
          editorId: {
            type: String,
            default: 'editor', // Change this ID if needed
          },
        },
        data() {
            return {
                
            };
        },
        methods: {
            
        },
        mounted() {
            ClassicEditor
            .create(document.getElementById(this.editorId))
            .catch(error => {
                console.error(error);
            });
        },
    }
    return App;
};

const app = Vue.createApp(await createApp());
app.mount('#app');