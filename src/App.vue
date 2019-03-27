<template>
  <div id="app">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name" name="" id="nameInput">
      <button @click="submitName()" >Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']"> 
          <div v-if="!personName.edit">
            <p> {{ personName.name }} </p>
            <button @click="removeName(personName['.key'])" >Remove</button>
            <button @click="setEditName(personName['.key'])" >Edit</button>
         </div>
          <div v-else>
            <input type="text" v-model="personName.name" name="" id="">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
           </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';


export default {
  
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
   
        namesRef.push( { name: this.name, edit: false })
        this.name = '';    //clear the textbox after we added a name
      
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit:false })
    },
    saveEdit(person) {
      const key = person['.key'];
      namesRef.child(key).set({ name: person.name, edit:false})
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  font-size: 1.5em;
}

h1, h2 {
  font-weight: normal;
  color: whitesmoke
}

ul {
  margin-top: 50px;
  list-style: none;
}

li {

 padding: 10px;
}

a {
  color: #42b983;
}
button {
  margin-left: 10px;
  margin-bottom: 15px;
  background-color: transparent;
  border: 2px solid black;
  transform: scale(1.1);
}

button:hover {
  cursor: pointer;
  background-color: black;
  color: white;
  transform: scale(1.3);
}
</style>
