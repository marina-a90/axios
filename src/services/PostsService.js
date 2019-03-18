import axios from "axios";

class PostsService {
  createPosts(post) {
    return axios.post("https://jsonplaceholder.typicode.com/posts", post);
  }

  getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }
}

export const postsService = new PostsService();
