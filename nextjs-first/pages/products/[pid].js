import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
function ProductDetailsPage({ loadedProduct }) {
  if (!loadedProduct) {
    return <h1>Loading</h1>;
  }
  return (
    <Fragment>
      <h1>title: {loadedProduct.title}</h1>
      <p>Details:{loadedProduct.description}</p>
    </Fragment>
  );
}
async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
//context for params value
export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((product) => product.id === productId);
    if(!product){
        return {notFound: true}
    }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: true, //blocking
  };
}
export default ProductDetailsPage;
