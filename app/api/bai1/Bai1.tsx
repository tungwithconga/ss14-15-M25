interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Lỗi');
    }
    return res.json();
  }
  export default async function PostsPage() {
    const posts: Post[] = await fetchPosts();
    return (
      <div>
        <h1>List of posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  