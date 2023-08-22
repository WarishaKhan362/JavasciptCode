/*let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/

//downward triangle
/*let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//reverseno.
/*let a=1234;
let b=0;
for(;a!==0;)
{
    let c=a%10;
    b=b*10+c;
    a=Math.floor(a/10);
}
console.log(b)*/

let a=12343;
let b=0;
for(;a!==0;)
{
    let c=a%10;
    b=b*10+c;
    a=Math.floor(a/10);

}
console.log(b)