
//----------------------------------
//          YOUR CODE
//----------------------------------
//create(100,100,'black');
var counter=0;
var row =0;
for(var row =0; row<81; row++){
        y = row*15;
    for(var col=0; col<53; col++){
        x= col*15;
        create(x,y,colors[counter]);
        counter++;
    }
        
}