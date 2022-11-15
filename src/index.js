import './style.css';
let qlist = []

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("all").addEventListener('click', async () => {
        all()
    })
})

async function all(){
    let response = await fetch('quotes.json')
    let result = await response.json()

    qlist.textContent = ''  

    result.quotes.sort((a, b) => a.author.localeCompare(b.author))

    for (let p of result.quotes) {
        let li = document.createElement('li')
        console.log(p)
        li.textContent = p.author + " : '" + p.quote + "'"
        document.getElementById("quoteslist").appendChild(li);
        qlist.push(result.quote)
        qlist.push(result.author)
    }
}

