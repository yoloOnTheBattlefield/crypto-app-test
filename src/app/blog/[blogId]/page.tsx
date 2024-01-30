

export default function City({ params }:  { params: { blogId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {params.blogId}
    </main>
  );
}
