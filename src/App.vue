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

  // created() {
  //   postsService
  //     .getPosts()
  //     .then(res => {
  //       this.posts = res.data;
  //       postsService
  //         .createPosts({
  //           title: "Our title",
  //           body: "Our body"
  //         })
  //         .then(res => {
  //           console.log(res.data);
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  async created() {
    try {
      const { data } = await postsService.getPosts();
      this.posts = data;

      const { data: newPost } = await postsService.createPosts({
        title: "bla",
        body: "bla bla"
      });
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
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
