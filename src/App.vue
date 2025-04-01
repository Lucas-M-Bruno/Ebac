<script setup>
 import { reactive, computed, ref } from "vue";


let valores = reactive({
  valorA: 0,
  valorB: 0
});

let operacao = ref(""); 

const resultado = computed(() => {
  const a = Number(valores.valorA);
  const b = Number(valores.valorB);

  switch (operacao.value) {
    case "soma":
      return a + b;
    case "subtracao":
      return a - b;
    case "multiplicacao":
      return a * b;
    case "divisao":
      return  a / b;
    
  }
});
</script>

<template>
  <h1>Calculadora Básica</h1>

  <div class="container">
    <input v-model.number="valores.valorA" type="number" placeholder="Digite o primeiro número">
    <input v-model.number="valores.valorB" type="number" placeholder="Digite o segundo número">

    <select v-model="operacao">
      <option value="">Selecione a operação</option>
      <option value="soma">Somar</option>
      <option value="subtracao">Subtrair</option>
      <option value="multiplicacao">Multiplicar</option>
      <option value="divisao">Dividir</option>
    </select>

    <p>Resultado: <strong>{{ resultado }}</strong></p>
  </div>
</template>
  
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  .container {
    margin: 2.5rem auto;
    width: 50%;
  }

  input {
    margin-right: 2rem;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px #1D3557 solid;
    border-radius: 6px;
    color: #1D3557;
    font-size: 1.2rem;
    background-color: #A8DADC;
  }

  select {
    padding: 0.5rem;
    border-radius: 6px;
    color: #1D3557;
    background-color: #A8DADC;
    border: none;
    border-bottom: 2px #1D3557 solid;
  }

  select:focus,
  input:focus {
    outline: none;
  }
  p {
    font-size: 2rem;
    text-align: center;
    margin-top: 2.5rem;
  }
</style>
