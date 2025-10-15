// import { type Metadata } from 'next';
// import { Suspense } from 'react';
// import { getAllBlogs } from '@/lib/blog';
// import { Background } from '@/components/background';
// import { Container } from '@/components/container';
// import { Heading } from '@/components/heading';
// import { Subheading } from '@/components/subheading';
// import { BlogList } from '@/components/blog-list';

// export const metadata: Metadata = {
//   title: 'Blog - Mojo Helpdesk',
// };

// export default async function ArticlesIndex() {
//   const allBlogs = await getAllBlogs();
//   return (
//     <div className="relative overflow-hidden py-20 md:py-0">
//       <Background />
//       <Container className="flex flex-col items-center justify-between pb-20">
//         <div className="relative z-20 py-10 md:pt-40">
//           <Heading as="h1">Blog</Heading>
//           <Subheading className="text-center">
//             The blog about Mojo Helpdesk ticket tracking help desk software.
//           </Subheading>
//         </div>

//         <Suspense fallback={<div>Loading...</div>}>
//           <BlogList allBlogs={allBlogs} />
//         </Suspense>
//       </Container>
//     </div>
//   );
// }