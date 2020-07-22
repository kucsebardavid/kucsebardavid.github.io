
function nyitas() {
    document.getElementById('doboz').src = '/honlap/img/nyitva.jpg'
    var h1 = document.createElement("h1")
    h1.setAttribute('class', 'alert alert-success')
    h1.innerHTML = "Leszel a feleségem?"
    var btnIgen = document.createElement("button")
    btnIgen.setAttribute('class', 'btn btn-success')
    btnIgen.setAttribute('id', 'igen')
    btnIgen.setAttribute('onclick', 'igen()')
    btnIgen.innerHTML = "Igen"
    var btnNem = document.createElement("button")
    btnNem.setAttribute('class', 'btn btn-danger')
    btnNem.setAttribute('id', 'nem')
    btnNem.innerHTML = "nem"
    btnNem.setAttribute('onclick', 'nem()')
    var br = document.createElement('br')

    document.body.appendChild(br)
    document.body.appendChild(h1)
    document.body.appendChild(btnIgen)
    document.body.appendChild(btnNem)

};

function igen() {
    var mosoly = document.createElement("img")
    var br = document.createElement('br')
    mosoly.src = '/honlap/img/heart.png'
    mosoly.setAttribute('width', '355px')
    document.body.appendChild(br)
    document.body.appendChild(mosoly)
}

function nem() {
    var szomoru = document.createElement("img")
    var br = document.createElement('br')
    szomoru.src = '/honlap/img/siras.png'
    szomoru.setAttribute('width', '355px')
    document.body.appendChild(br)
    document.body.appendChild(szomoru)

}