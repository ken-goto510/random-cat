"use server";

import { CAT_API_KEY } from "./env";

type Image = {
    url:string;
}
export async function fetchImage(): Promise<Image>{
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {"x-api-key":CAT_API_KEY},
        cache: "no-store", // 毎回新しい画像を取得する
    });
    const images = await res.json();
    console.log("画像情報を取得しました",images);
    return images[0];
}