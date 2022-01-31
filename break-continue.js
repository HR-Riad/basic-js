var i =0;
while (i<20)
{
    console.log(i);

    if(i==10){
        break;
    }

    i++;
}

for(var i=0; i<20; i++)
{
    console.log(i);
    if(i==7){
        break;
    }
}

var numbers =[7,10,17,22,33,44,66,88,220];
for(var i=0; i<numbers.length; i++){
var num = numbers[i];
console.log(num);
if (num>60)
{
    break;
}
}

// continue
var numbers =[7,10,17,22,33,44,66,88,220];
for(var i=0; i<numbers.length; i++){
var num = numbers[i];
if (num<60)
{
   continue;
}
console.log(num);

}