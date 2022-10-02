import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// Any code inside getStaticProps is executed on the server-side, w/ server-side capabilities.
export async function getStaticProps(context) {
  console.log('Re-Generating...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/no-data',
  //     }
  //   }
  // }

  // if(data.products.length === 0) {
  //   return { notFound: true }; // Render 404 error page
  // }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
