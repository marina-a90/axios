<template>
  <div id="app">
    <h1>Posts with Axios</h1>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { postsService } from "./services/PostsService";

export default {
  name: "app",
  data() {
    return {
      posts: []
    };
  },
  components: {},
  created() {
    postsService
      .getPosts()
      .then(response => response.data)
      // .then(response => (this.posts = response.data))
      .then(data => {
        this.posts = data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
