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


// $('#form').on('submit', function(){
//     var arr = $(this).serializeArray();
//     console.log(arr);
// });
