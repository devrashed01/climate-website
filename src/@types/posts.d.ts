interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

interface PostPayload {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}
