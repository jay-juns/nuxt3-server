import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  let data = {data: [{data: ""}]}
  try {
    data = await $fetch(`https://yts.mx/api/v2/list_movies.json?limit=10`)
    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(data));
    res.end();

  } catch(err) {
    console.error(err)
  }
}