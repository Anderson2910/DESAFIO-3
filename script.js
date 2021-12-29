const frutas = ['Maçã', 'Banana', 'Pêssego', 'Manga', 'Kiwi', 'Morango', 'Laranga'];
const precos = [4.9, 2.2, 3.5, 7.1, 13.9, 5, 1.9];
const produtos = document.getElementById('produtos');
const cesta = document.getElementById('cestaDoCliente');
const total = document.getElementById('mostraTotalCompra');
var totalCompras = 0;
function carregarCesta(preco) { //document.querySelectorAll('ul > .lista')
  let clone = this.cloneNode(true);
  let lista = cesta.getElementsByTagName('li');
  let isInList;
  for(let i = 0; i < lista.length; i++){
    if(lista[i].innerHTML === this.innerHTML) {
        isInList = true;
        break;
    }
  }
  if(isInList)
      alert("Este item "+this.innerHTML+" já está na sua cesta")
  else {
    cesta.append(clone);
    totalCompras += parseFloat(this.dataset.price);
    total.value = totalCompras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
window.onload = function() {
  frutas.forEach((item, i) => {
    let fruta = document.createElement('li');
    fruta.append(item);
    fruta.setAttribute("data-price", precos[i]);
    produtos.append(fruta);
    fruta.addEventListener("click", carregarCesta, false);
  });
};
