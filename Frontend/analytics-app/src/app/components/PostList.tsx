// // components/PostList.tsx
// import React from 'react';

// interface Post {
//   id: string;
//   content: string;
//   // Add other post properties as needed
// }

// interface PostListProps {
//   posts: Post[];
// }

// const PostList: React.FC<PostListProps> = ({ posts }) => {
//   return (
//     <div className="mt-4">
//       {posts.map((post) => (
//         <div key={post.id} className="p-4 border rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold">{post.content}</h2>
//           {/* Render other post details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;
