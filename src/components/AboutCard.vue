<template>
    <div class="column">
    <div class="card">
      <img :src="image" style="width:100%">
      <div class="container">
        <h2 class="name color">{{name}}</h2>
        <p class="title color">{{title}}</p>
        <p class="description color">{{description}}</p>
        <p><button class="button" target='_blank' >Mail</button></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'AboutCard',
    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.color {
    color: #ffffffe6
}
.title{
    text-align: center;
}

.name {
    text-align: center;
}

.description {
    text-align: center;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  background-color: #00000059 ;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>