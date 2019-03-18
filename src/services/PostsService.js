import axios from "axios";

class PostsService {
  getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }
}

export const postsService = new PostsService();
