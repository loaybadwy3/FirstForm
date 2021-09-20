let form = document.getElementById("form")

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    var list = document.querySelectorAll(".data")
    var arr=[]
    for (var i=0 ; i < list.length ; i++  ){
        arr.push(list[i].name + " :" + list[i].value)
    // console.log(list)
}
console.log(arr)
})
function sendData(num1,num2){
    console.log(num1 + num2);
}

// $('#form').on('submit', function(){
//     var arr = $(this).serializeArray();
//     console.log(arr);
// });