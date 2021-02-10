// function set_para(){
//     var text = document.getElementById('para')
//     text.innerHTML = 'This is example text'
// }


function getNumber(num){
    var input = document.getElementById('inp')
    input.value += num
}

function clearInput(){
    var input = document.getElementById('inp')
    input.value = ''
}

function getResult(){
    var input = document.getElementById('inp')
    input.value = eval(input.value)
}