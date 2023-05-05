import BkData from "@/app/model/ListofBook";

export default async function BooksData() {

    const response = await fetch("https://simple-books-api.glitch.me/books");
    let result: BkData[] = await response.json();

    console.log(result)

    return(
        <div>
            {result[0].name}
            {result[0].id}
        </div>
    )
}