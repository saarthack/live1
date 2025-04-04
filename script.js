var arr = [
    {
        username: 'Salmon',
        age: 65,
        married: false,
        istatus: 'Stranger',
        image: 'https://images.unsplash.com/photo-1677760904764-801d55083330?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username: 'Shahrukh',
        age: 60,
        married: true,
        istatus: 'Stranger',
        image: 'https://images.unsplash.com/photo-1677760904452-ac9064748986?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username: 'Sarthak',
        age: 40,
        married: false,
        istatus: 'Stranger',
        image: 'https://images.unsplash.com/photo-1639566421067-ba2f7bbc70a6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

]

var main = document.querySelector('#main')

function heroFunction() {
    var sum = ''

    arr.forEach(function (elem, idx) {
        sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}, ${elem.age}</h1>
    <h4>Maried : ${elem.married}</h4>
    <h5>${elem.istatus}</h5>
    <button id=${idx}>Add Friend</button>
</div>`
    })

    main.innerHTML = sum
}
heroFunction()

main.addEventListener('click', function (dets) {
    var gold = arr[dets.target.id]
    if(gold.istatus == 'Stranger'){
        gold.istatus = 'Friends'
    }else{
        gold.istatus = 'Stranger'
    }
    heroFunction()
})