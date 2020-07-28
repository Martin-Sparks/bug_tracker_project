<template>
    <div class="file">

        <form v-on:submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="fields">
                <label>Upload File</label> <br>
                <input 
                type="file"/>
            </div>
            <div>
                <button @click="onUpLoad">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { eventBus } from "@/main";


export default {
    name: 'fileupload',
    data(){
        return{
            file: null,
        }
    },

    methods: {
        onSubmit(e){
            console.log(e.target.files[0]);
            this.file = e.target.files[0];
            // var files = e.target[0].files;
            if (!files.length)
            return;
            // this.file = files[0];
            eventBus.$emit('add-image', this.file);
        },
      
    },

}
</script>

<style>



</style>