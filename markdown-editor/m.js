new Vue({
    el: '#editor',
    data: {
        input: '# hello'
    },
    computed: {
        compiledMarkdown: function(){
            return marked(this.input, { sanitize: true})
        }
    },
    method: {
        update: _.debounce(function(e){
            this.input = e.target.value
        }, 300)
    }
})