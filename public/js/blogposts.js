fetch('/blogposts')
.then(y=>{
    y.json()
})
.then(y=>{
    console.log(y)
})