<template>
    <div class="file">

        <form v-on:submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="fields">
                <label>Upload File</label> <br>
                <input 
                type="file"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
            <div class="message"></div>
            <h5>{{message}}</h5>
        </form>
    </div>
</template>

<script>

export default {
    name: 'fileupload',
    data(){
        return{
            file: null,
            message: ""
        }
    },

    methods: {
    
        // onFileChange(e) {
        //   console.log(e);
        //   var files = e.target.files;
        //   if (!files.length)
        // return;
        // this.file = files[0]
        // },

        onSubmit(e){
            console.log(e);
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            this.file = files[0]
            eventBus.$emit('add-image', this.file);
        }
    },

}
</script>

<style>



</style>