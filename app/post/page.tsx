async function getPosts() {

  const res = await fetch(
    "http://localhost:3000/api/posts"
  );

  return res.json();

}


export default async function PostsPage(){

  const posts = await getPosts();

  return (
    <div>

      {posts.map((post:any)=>(
        <div key={post._id}>

          <h1>{post.title}</h1>

          <p>{post.description}</p>

        </div>
      ))}

    </div>
  );
}
