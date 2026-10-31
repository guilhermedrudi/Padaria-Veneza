const trilho = document.querySelector('.trilho');
const setaEsq = document.querySelector('.seta.esq');
const setaDir = document.querySelector('.seta.dir');

// Rola o equivalente a um card (largura + espaço entre eles)
function passo() {
  const card = trilho.querySelector('.item');
  return card.offsetWidth + parseFloat(getComputedStyle(trilho).columnGap);
}

// Desativa a seta quando chega ao início ou ao fim
function atualizarSetas() {
  const fim = trilho.scrollWidth - trilho.clientWidth - 2;
  setaEsq.disabled = trilho.scrollLeft <= 2;
  setaDir.disabled = trilho.scrollLeft >= fim;
}

setaEsq.addEventListener('click', () => trilho.scrollBy({ left: -passo(), behavior: 'smooth' }));
setaDir.addEventListener('click', () => trilho.scrollBy({ left: passo(), behavior: 'smooth' }));
trilho.addEventListener('scroll', atualizarSetas);
window.addEventListener('resize', atualizarSetas);
atualizarSetas();
