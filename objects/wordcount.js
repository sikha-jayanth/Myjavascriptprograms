var word="heelloooo";
var arr=word.split('');
var dict={};
for(item of arr){
    if(item in dict){
        dict[item]=dict[item]+1;
        if(dict[item]==2){
            console.log("first recurring character: "+item);
            break;
        }
    }
    else{
        dict[item]=1;
    }

}
