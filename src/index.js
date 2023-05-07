import GerarCPF from './modules/GerarCPF';
import './assets/css/style.css';
const btn = document.querySelector('.btn-cpf')

(function() {
  const gera = new GerarCPF();
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = gera.geraNovoCpf();
})();

console.log(btn)
