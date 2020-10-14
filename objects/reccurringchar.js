var word="Helloooo";
var arr=word.split("");
var dict={};
for(item of arr){
    if(item in dict){
        dict[item]=dict[item]+1;
    }
    else{
        dict[item]=1;
    }

}
for(key in dict){
    console.log(key+":"+dict[key]);
}