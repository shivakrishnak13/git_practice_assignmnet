let a=13;

let count=0;

for(i=1 ; i<=a ; i++){
 if (a%i==0){ count++; }
}
if(count==2)
{
console.log("Is Prime");
}
else { console.log("Not Prime"); }
