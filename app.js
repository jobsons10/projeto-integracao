fetch('https://api-grupootg.onrender.com/user')
.then((res) => res.json())
.then((data) => console.log(data))