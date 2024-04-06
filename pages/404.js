export default function NotFound() {
  return (
    <div>
      <p>404 - Page Not Found</p>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  return {
    props: {}
  }
}