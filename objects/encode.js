var str ="ABCD"
var dict = {};
var op=""
var arr = str.split('');
for(item of arr){
    if(item in dict){
        dict[item]=dict[item]+1;
    }
    else{
        dict[item]=1;
    }

}
console.log(dict);
for(key in dict){
op=op+dict[key]+key;
}
console.log(op);