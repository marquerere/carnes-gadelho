<template>
  <div class="container px-6 xl:px-64 xl:flex xl:items-center">
    <div
      v-if="submitted"
      class="flex flex-col xl:flex-row px-4 py-8 mx-auto h-full xl:w-1/2"
    >
      <div
        class="flex flex-col xl:flex-1 xl:pr-4 justify-evenly space-y-4 xl:space-y-0 text-center h-full"
      >
        <h1 class="text-2xl font-semibold">
          Obrigado {{ this.form.nome }}, a sua encomenda foi efetuada com
          sucesso.
        </h1>
        <img
          class="flex w-3/4 md:w-2/5 xl:w-3/4 mx-auto"
          src="~/static/images/submetido.svg"
          alt="Encomenda submetida com Sucesso"
        />
        <div class="pb-8 xl:pb-0">
          <h1 class="pb-2">
            Irá receber uma chamada para confirmar a veracidade da sua
            encomenda.<br />
            Após a confirmação daremos inicio à preparação da encomenda.
          </h1>
          <NuxtLink
            to="/"
            class="py-2 text-gray-500 hover:text-red-600 transition text-sm"
          >
            Voltar à pagina inicial
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col xl:flex-row px-4 py-8 justify-center xl:divide-x">
      <div
        v-if="!submitted"
        class="flex flex-col w-full xl:flex-1 xl:pr-4 justify-between space-y-4 xl:space-y-0"
      >
        <h1 class="text-2xl font-semibold">
          Faça a sua encomenda em poucos minutos.
        </h1>
        <img
          class="hidden xl:flex w-3/4 mx-auto"
          src="~/static/images/encomendar.svg"
          alt="Fazer a encomenda"
        />
        <div class="pb-8 xl:pb-0">
          <h1 class="pb-2">
            Preencha o formulário com as informações necessárias (assinaladas
            com um *).<br />Assim que a sua encomenda for confirmada iremos
            proceder à sua preparação e em pouco tempo terá em sua casa os
            melhores produtos para as suas refeições.
          </h1>

          <NuxtLink
            to="/dados"
            class="py-2 text-gray-500 hover:text-red-600 transition text-sm"
          >
            Política de Privacidade e Condições Gerais de Utilização
          </NuxtLink>
        </div>
      </div>
      <iframe
        id="hiddenIframe"
        name="hiddenIframe"
        style="display: none"
      ></iframe>
      <form
        :class="
          submitted
            ? 'hidden'
            : 'flex flex-col space-y-4 w-full xl:flex-1 xl:pl-6'
        "
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXAX2kZP1jfVnEZNqFIDPrXXkhYzdSQjkIGtqpxBLW0TluKA/formResponse"
        target="hiddenIframe"
        method="POST"
      >
        <div class="flex flex-col space-y-1">
          <label class="" for="nome">Nome*</label>
          <p :class="erroNome ? 'text-red-600' : 'text-black'">
            Introduza o seu primeiro e último nome.
          </p>
          <input
            v-model="form.nome"
            name="entry.21841859"
            type="text"
            class="input"
            placeholder="ex. Beatriz Rocha"
            required
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label class="" for="telefone">Telefone*</label>
          <p :class="erroTelefone ? 'text-red-600' : 'text-black'">
            Precisamos do seu número de telefone para confirmar a veracidade da
            encomenda.
          </p>
          <input
            v-model="form.telefone"
            name="entry.228364167"
            type="tel"
            class="input"
            maxlength="9"
            placeholder="ex. 912345678"
            required
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label class="" for="morada">Morada*</label>
          <p :class="erroMorada ? 'text-red-600' : 'text-black'">
            Precisamos da sua morada para sabermos onde entregar a sua
            encomenda.
          </p>
          <input
            v-model="form.morada"
            name="entry.1158226459"
            type="text"
            class="input"
            placeholder="ex. Rua de Contumil Nº578"
            required
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label class="" for="pedido">Pedido*</label>
          <p :class="erroPedido ? 'text-red-600' : 'text-black'">
            Faça o seu pedido, escreva os nomes dos produtos e as respetivas
            quantidades de forma sucinta.
          </p>
          <textarea
            v-model="form.pedido"
            name="entry.2105846109"
            type="textarea"
            class="input"
            placeholder="ex. 1Kg de Bifes de Peru
2Kg de carne picada
500g Fiambre da Perna Extra
1 dúzia de Ovos M"
            rows="5"
            required
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label class="" for="notas">Notas Adicionais</label>
          <p>
            Inclua nesta secção quaisquer notas que possa ter sobre a encomenda,
            assim como a sua preferencia para o intervalo da data e hora de
            entrega.
          </p>
          <textarea
            v-model="form.notas"
            name="entry.1782934767"
            class="input"
            rows="2"
            placeholder="ex. Posso receber a encomenda entre as 15h e as 17h"
          />
        </div>
        <div class="flex flex-row justify-between items-center">
          <button
            :disabled="!ableToSubmit"
            :class="
              ableToSubmit
                ? 'bg-red-600 text-white hover:bg-red-700 transition cursor-pointer'
                : 'cursor-not-allowed'
            "
            type="submit"
            class="py-2 px-4 bg-gray-100 border border-black"
            @click="submitted = true"
          >
            Finalizar Encomenda
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      form: {
        nome: '',
        telefone: '',
        morada: '',
        pedido: '',
        notas: '',
      },
      submitted: false,
    }
  },
  computed: {
    erroNome() {
      return !this.form.nome
        ? 'Por favor introduza o seu primeiro e último nome.'
        : ''
    },
    erroTelefone() {
      return !this.form.telefone || this.form.telefone.length !== 9
        ? 'Por favor introduza um número de telefone válido.'
        : ''
    },
    erroMorada() {
      return !this.form.morada ? 'Por favor introduza a sua morada.' : ''
    },
    erroPedido() {
      return !this.form.pedido ? 'Por favor introduza o seu pedido.' : ''
    },
    ableToSubmit() {
      if (
        this.erroNome ||
        this.erroTelefone ||
        this.erroMorada ||
        this.erroPedido
      )
        return false
      else return true
    },
  },
}
</script>

<style>
h2,
label {
  font-weight: 700;
  @apply uppercase;
}
p {
  @apply text-sm;
}
textarea {
  resize: none;
}

.input {
  @apply border;
  @apply border-black;
  @apply p-2;
  @apply text-sm;
}

ul {
  list-style: none;
}
</style>
