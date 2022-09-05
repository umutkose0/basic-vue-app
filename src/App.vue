<script >
    export default{
    data() {
        return {
            users: null
        };
    },
      created() {
       this.axios.get("posts").then((response) => {
    console.log(response.data)
})
    },
    components: {  }
};
</script>

<template>
  <header>
    
  </header>
  <main>
    <!-- user section start-->
    <section id="app" class="app">
        <h1 align="center">List users</h1>
        <div class="user" v-for="user in users" :key="user.id">
        <img :src="user.avatar" ><input type="text" name="username" id="username" :value="user.username"> 
        <a href="#">Save</a> | 
         <a href="#">x</a>
        </div>
    </section>
    <!-- user section end-->


  </main>
</template>

<style >
.user{
    border:1px solid black;
    border-radius:15px;
    width:14vw;
    padding:1vw;
    float:left;
    align-items:center;
    text-align: center;
}
.user>img{
    border-radius:15px;
    width:2vw;
    padding-left:1vw;
    float:left;
}
.user>input{
    padding-bottom:1vw;
    width:5vw;
    height:15px;
    font-size:0.8em;
    padding:0;
    margin-right:7px;
}

</style>
