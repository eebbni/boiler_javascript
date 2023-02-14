var pants = 0;
var socks = 100;


function test(a,str2,str3){
    if(str2 == 0)
    {
        str2 = '다팔렸어요';
    }
    console.log(a[0]+str2+a[1]+str3);
}

test`바지${pants} 양말${socks}`;

//Template literals / tagged literals 