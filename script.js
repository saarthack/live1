var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click',function(){

    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360

    var img = document.createElement('img')

    img.setAttribute('src','./img1.png')
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = x+'%'
    img.style.top = y+'%'
    img.style.rotate = rot+'deg'

    body.appendChild(img)
})

