import fs from "fs/promises";
import path from "path";
import Link from "next/link"
import Head from "next/head"
function HomePage(props) {
  const { products } = props;
  return (
    <div>
      <Head>
        <title>next js thing</title>
        <meta name="description" content="what to write"></meta>
      </Head>
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
    </div>
  );
}
//if nextjs see the getStaticProps, it will calll this before anything in the page
export async function getStaticProps() {
  //when next js will excuate this file it will trate this file
  //as it was sitting in the root file.
  //so process.cwd() will be root of the project
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data= JSON.parse(jsonData)
  //always return an object
  if(!data){
    return{
    redirect:{
      destination:"/no-data"
    }
  }
}
if(data.products.length===0){
  return{notFound:true}
}
  return {
    props: {
      products: data.products,
    },
    // after how many seconds it should be regenerated in production
    revalidate:10,
    
  };
}
export default HomePage;
