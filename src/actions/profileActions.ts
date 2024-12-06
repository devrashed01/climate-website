import { privateRequest } from "@/config/axios.config";

export const getProfile = () =>
  privateRequest
    .get<{
      data: User;
    }>("profile")
    .then((res) => res.data.data);
