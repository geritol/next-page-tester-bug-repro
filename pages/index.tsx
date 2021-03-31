import ReactSelect from "react-select";

export default function Home() {
  return (
    <div>
      Hello <ReactSelect></ReactSelect>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: { articles: [] },
    revalidate: 60,
  };
}
