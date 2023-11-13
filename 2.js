let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')

but1.onclick = f1
but2.onclick = f2
but3.onclick = f3

function f1(){
    let req
    if (window.XMLHttpRequest){
        req = new XMLHttpRequest()
    } else{
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.open('GET', 'text.txt')
    req.onreadystatechange = function (){
        fotvet(req)
    }

    req.send()
    //стадия 1 - отправляем запрос
    //стадия 2 - запрос пришёл на сервер
    //стадия 3 - сервер отправляет ответ
    //стадия 4 - ответ пришёл к нам
}



function fotvet(req){
    console.log('стадия № ' + req.readyState)
    console.log(req.response)
    if (req.readyState === 4){
        console.log(req.response)
    }
}


//=======================================


function f2(){
    let req
    if (window.XMLHttpRequest){
        req = new XMLHttpRequest()
    } else{
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.open('GET', 'person.json')
    req.onload = function (){
        console.log(req.status)
        if (req.status === 200){
            console.log('ok')
            console.log(req.response)
            let newobj = JSON.parse(req.response)
            console.log(newobj.name)
        } else {
            console.log('neok')
        }

    }

    req.send()
}


//=======================================


function f3(){
    let req
    if (window.XMLHttpRequest){
        req = new XMLHttpRequest()
    } else{
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.open('GET', 'agent.json')
    req.onload = function (){
        if (req.status === 200){
            let newobj = JSON.parse(req.response, secret)
            console.log(newobj)
        } else {
            console.log('no data')
        }

    }

    req.send()
}

function secret(key, value){
    if (key !== 'agent' && typeof value !== "object"){
        return '*****'
    }
    return value
}