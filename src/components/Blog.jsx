function Blog() {
  const posts = [
    { id: 1, title: "Exploring Bali", excerpt: "A journey through temples, beaches, and sunsets." },
    { id: 2, title: "Backpacking in Europe", excerpt: "Tips for budget-friendly travel across Europe." },
    { id: 3, title: "Adventures in Japan", excerpt: "From Tokyo lights to Kyoto temples." },
  ]

  return (
    <section id="blog" className="blog">
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </section>
  )
}
export default Blog