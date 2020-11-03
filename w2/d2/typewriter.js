// const sentence = "hello there from lighthouse labs \n";
 
// for (let i = 0; i < sentence.length; i++) {
  
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 2000) // <= 1s delay to make it noticeable. Can dial it down later.
// }


const sentence = "hello there from lighthouse labs \n";
let typer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, typer);
  typer += 50;
};

