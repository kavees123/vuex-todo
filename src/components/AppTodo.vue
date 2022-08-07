<template>
<div>
<h1>AddTodo</h1>
<div class="add">
    <form @submit="submit">
        <input type="text" v-model="title" placeholder="Add Todos ...">
         <input type="submit" value="Submit">
    </form>
    {{title}}
</div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore,mapActions } from 'vuex'
export default {
    data()
    {
        return {
            title: ""
        };
    },
    methods: {
    submit: async function (event) {
        event.preventDefault();
        console.log("Submit is being called" + this.title);
        console.log("The type of is " + typeof(this.title));
       // const store = useStore();
        console.log("Before dispatch method");
        await this.$store.dispatch('addTodo',this.title);
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>