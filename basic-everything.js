// basic everything
var tableLength = 12;
var tourDestination =['Bangladesh','Srilanka','india','Thailand','Nepal'];
tourDestination.indexof('India');
var fourthDestination = tourDestination[3];
tourDestination[1]='SaudiArabia';
tourDestination.push('England');
tourDestination.pop();
if (tourDestination[1]=='Bangladesh')
{
    console.log('I will go to visit Bandarban');
}
else if(tourDestination.length==8){
    console.log('I will visit lots of place');

}
else{
    console.log('Sleep in the bed');
}