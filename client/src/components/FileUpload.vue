<template>
    <div class="file">

        <form submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="fields">
                <label>Upload File</label> <br>
                <input 
                v-on:change="onFileChange"
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
// import axios from 'axios';
export default {
    name: 'fileupload',
    data(){
        return{
            file: null,
            message: ""
        }
    },

    methods: {
        onSelect(){
            const file = this.$refs.file.files[0];
            this.file = file;
        },

         onFileChange(e) {
             console.log(e);
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
        this.file = files[0]
    //   this.createImage(files[0]);
    },

        async onSubmit(){

            var data = fs.readFileSync(file_path);
            var insert_data = {};
            insert_data.file_data= Binary(data);

            // const formData = new FormData();
            // FormData.append(file, this.file);
            // try{
            //     await axios.post('/upload', formData);
            //     this.message = 'Uploaded'
            // }
            // catch(err){
            //     console.log(err);
            //     this.message = 'oooops, something went wrong'
            // }
        }
    },

}
</script>

<style>

</style>