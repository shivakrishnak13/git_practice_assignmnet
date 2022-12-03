let str="madam";
let bag="";
let ans = "Not a Palindrome";
for (i=str.length-1 ; i>=0 ; i--){
    bag+=str[i];
}
if(str == bag)
{
ans = "Palindrome"
}
console.log(ans);