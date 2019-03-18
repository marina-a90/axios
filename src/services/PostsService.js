import { httpService } from "./HttpService";

class PostsService {
  createPosts(post) {
    return httpService.post("https://jsonplaceholder.typicode.com/posts", post);
  }

  getPosts() {
    return httpService.get("https://jsonplaceholder.typicode.com/posts");
  }
}

export const postsService = new PostsService();
