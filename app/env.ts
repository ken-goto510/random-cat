if(!process.env.CAT_API_KEY){
    throw new Error("環境変数にAPIキーが設定されていません")
}
export const CAT_API_KEY = process.env.CAT_API_KEY;