<script>
export default({
    name:"Home",
    data(){
        return{
            users:null,
            posts:null,
            loading:true,

        };
    },
    created(){
        this.http.get("users").then((r)=>(this.users=r.data)).finally(()=>this.loading=false);
        //this.http.get("posts").then((r)=>(this.posts=r.data));
    },
    mounted(){
       this.load();
    },
    methods:{
        load:function(){
           var ladingDiv=document.querySelector(".loading")
           function write(){
           setTimeout(function(){ladingDiv.innerHTML="loading."},500)
           setTimeout(function(){ladingDiv.innerHTML="loading.."},1000)
           setTimeout(function(){ladingDiv.innerHTML="loading..."},1500)
            }
            write();
            var vm=this;
           setTimeout(function(){
                if(vm.loading)
                   write();
                },2000)
    
            },
            playTone:function(){
                console.log("click");
                const synth=new this.Tone.Synth().toDestination();
                synth.triggerAttackRelease("C3", "9n");
            },
        }
});
</script>

<template>
<div class="container">
    <div class="loading" v-on:load="load" v-if="loading">loading...</div>

    <div class="user" v-for="user in users" :key="user.id">
        <img :src="user.avatar" alt="">
        <p>username:<b><a v-bind:href="'user/'+user.id">{{user.username}}</a></b></p><br>
    </div><br>
    <button v-on:click="playTone">
        Play Tone
    </button>
</div>

</template>

<style>
.user{
    float:left;
    border:1px solid rgba(0,0,0,0.6);
    border-radius: 10px;
    margin:5px;
    padding:15px;
    align-items: center;
}
.user>img{
    align-self: center;
    float:left;
    width:3vw;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 50%;
    background-color: purple;
}
.user>p{
    font-family: 'Courier New', Courier, monospace;
    float:left;
    font-size: 0.9em;
    margin:0
    
}
.loading{
    position:absolute;
   top: 45%;
   right: 50%;
   left:45%;
}
</style>