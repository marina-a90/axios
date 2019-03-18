import { httpService } from "./HttpService";

class PostsService {
  createPosts(post) {
    return httpService.post("/posts", post);
  }

  getPosts() {
    return httpService.get("/posts");
  }
}

export const postsService = new PostsService();
