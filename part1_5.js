var 사람 = {
    name: '손흥민',
    sayHi : function () {
        console.log("안녕 나는 "+ this.name);
    }
  }
  
  사람.sayHi(); //안녕 나는 손흥민

 
  var 자료 = { 
    data : [1,2,3,4,5]
  }

  자료.전부더하기 = function(){
    var sum = 0;
    this.data.forEach(function(a){
        sum += a;
    })
    console.log(sum);
  }

  자료.전부더하기();

  