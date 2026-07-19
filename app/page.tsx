import { fetchImage } from "./fetch-image"
import { connection } from "next/server"
import { CatImage } from "./cat-image";

export default async function home(){
  await connection();
  const image = await fetchImage();
  console.log("画像情報を取得しました, ", image);
  return <CatImage url={image.url}/>;
}