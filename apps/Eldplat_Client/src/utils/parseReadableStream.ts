// manually read a readable stream buffer~
export async function readStream(stream: ReadableStream) {
  const reader = stream.getReader();
  let arrayOne = new Uint8Array();
  let mergeArray = new Uint8Array();
  while (true) {
    const { done, value } = await reader.read();
    console.log("done", done);
    console.log("value", value);
    if (done) {
      console.log("Stream complete");
      console.log(`Received ${mergeArray.length} characters`);
      console.log("mergeArray", mergeArray);
      return new TextDecoder().decode(mergeArray);
    }
    mergeArray = new Uint8Array(arrayOne.length + value.length);
    mergeArray.set(arrayOne);
    mergeArray.set(value, arrayOne.length);
    arrayOne = mergeArray;
    console.log(value);
  }
}
