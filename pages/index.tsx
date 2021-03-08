export default function Home() {
  return <div>Hello</div>;
}
export async function getStaticProps() {
  return {
    props: { articles: [] },
    revalidate: 60,
  };
}
