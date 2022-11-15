import './style.css';
let qlist = []
let thelist = []
let hosszlist = []

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("all").addEventListener('click', async () => {
        all()
    })
    document.getElementById("hossz").addEventListener('click', async () => {
        hossz()
    })
    document.getElementById("the").addEventListener('click', async () => {
        the()
    })
})

async function all(){
    let response = await fetch('quotes.json')
    let result = await response.json()

    qlist.textContent = ''  

    result.quotes.sort((a, b) => a.author.localeCompare(b.author))

    for (let p of result.quotes) {
        let li = document.createElement('li')
        li.textContent = p.author + " : '" + p.quote + "'"
        document.getElementById("quoteslist").appendChild(li)
        qlist.push(result.quote)
        qlist.push(result.author)
    }
}

async function the(){
    let response = await fetch('quotes.json')
    let result = await response.json()

    for(let e of result.quotes){
        let line = e.quote;
        line = line.replaceAll('The ' , '<b>The </b>')
        line = line.replaceAll(' the ' , '<b> the </b>')
        thelist.push(line)
    }

    let quotelist = document.getElementById('thelist')
    for (let l of thelist){
        let li = document.createElement('li')
        li.innerHTML = l
        quotelist.appendChild(li)
    }
}

async function hossz(){
    let response = await fetch('quotes.json')
    let result = await response.json()
    let lengthlist = []

    for (let p of result.quotes) {
        hosszlist.push(p.quote)
    }
    const words = hosszlist.toString().split(' ')
    for(let i of words){
        lengthlist.push(words.map(w => w.length))
    }
    let szamlist = []
    szamlist.push(lengthlist.join(','))
    document.getElementById("length").append(szamlist)
}






