import { privateRequest } from "@/config/axios.config";

export const getPosts = (params: Params) =>
  privateRequest
    .get<Pagination<Post>>("post/list", { params })
    .then((res) => res.data);

export const addPost = (payload: PostPayload) =>
  privateRequest.post("post/create", payload).then((res) => res.data);

export const updatePost = (id: string, payload: PostPayload) =>
  privateRequest.put(`post/update/${id}`, payload).then((res) => res.data);

export const deletePost = (id: string) =>
  privateRequest.delete(`post/delete/${id}`).then((res) => res.data);
