const PostList = () => {
  const dummyPosts = [
    {
      id: 1,
      name: 'First Post',
      description: 'This is the description for the very first dummy post.',
    },
    {
      id: 2,
      name: 'Second Post',
      description: 'A brief description for the second post to show how it looks.',
    },
    {
      id: 3,
      name: 'Third Post',
      description: 'Another example post with a slightly different description to fill up space.',
    },
    {
      id: 4,
      name: 'Fourth Post',
      description: 'The final post in our dummy data. Ready for more!',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.name}</h3>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;