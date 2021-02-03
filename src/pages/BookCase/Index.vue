<template>

  <!--  <form @submit="">-->
  <!--    <input v-model="bookCase.name" placeholder="Nome">-->
  <!--    <br>-->
  <!--    <input v-model="bookCase.category" placeholder="Categoria">-->
  <!--    <br>-->
  <!--    <input v-model="bookCase.code" placeholder="Código">-->
  <!--    <br>-->
  <!--    <input v-model="bookCase.author" placeholder="Autor">-->
  <!--    <br>-->
  <!--    <label>Ebook?</label>-->
  <!--    <input type="checkbox"-->
  <!--           v-indeterminate="indeterminate"-->
  <!--           v-on:change="checkOutIndeterminate"-->
  <!--           v-model="ebook_checked">-->
  <!--    <br>-->

  <!--    <section v-if="bookCase_type">-->
  <!--      <input type="text" :placeholder="bookCases[bookCase_type].name" v-model="bookCases[bookCase_type].value">-->
  <!--    </section>-->

  <!--    <button @click.prevent="asyncFetch">clique1111</button>-->

  <!--    <button type="submit"></button>-->
  <!--  </form>-->
  <div class="" style="">

    <div class="fixed z-10 inset-0 overflow-y-auto" v-show="showModalCreateBook">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->

        <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">Nome</label>
                    <input v-model="bookCase.name" placeholder="Nome" type="text" name="first_name" id="first_name"
                           autocomplete="given-name"
                           class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <small class="text-gray-400">Campo obrigatório</small>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Categoria</label>
                    <input v-model="bookCase.category" placeholder="Categoria" type="text" name="last_name"
                           id="last_name" autocomplete="family-name"
                           class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <small class="text-gray-400">Campo obrigatório</small>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">Código</label>
                    <input v-model="bookCase.code" placeholder="Código" type="text" name="first_name" id="first_name"
                           autocomplete="given-name"
                           class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <small class="text-gray-400">Campo obrigatório</small>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Autor</label>
                    <input v-model="bookCase.author" placeholder="Autor" type="text" name="last_name" id="last_name"
                           autocomplete="family-name"
                           class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <small class="text-gray-400">Campo obrigatório</small>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Ebook?</label>
                    <input type="checkbox"
                           v-indeterminate="indeterminate"
                           v-on:change="checkOutIndeterminate"
                           v-model="ebook_checked" id="comments" name="comments"
                           class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    <br>
                    <small class="text-gray-400">Campo obrigatório</small>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <section v-if="bookCase_type">
                      <div class="col-span-6 sm:col-span-6">
                        <input type="text" :placeholder="bookCases[bookCase_type].name"
                               v-model="bookCases[bookCase_type].value" name="last_name" id="last_name"
                               autocomplete="family-name"
                               class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                      </div>
                      <small class="text-gray-400">Campo obrigatório</small>
                    </section>
                  </div>


                </div>
              </div>
            </div>
          </form>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button"
                    @click.prevent="createBook"
                    v-if="checkValuesToBookCreate()"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Adicionar
            </button>
            <button type="button"
                    @click.prevent="createBook"
                    v-else
                    style="pointer-events: none"
                    class="animation-spin w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-200 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Adicionar
            </button>
            <button type="button" @click.prevent="showModalCreateBook = false"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="" style="">

      <div class="bg-gray-50">

        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Primeira vez aqui?</span>
            <!--            <span class="block">Deseja organizar seu livros em só um lugar?</span>-->
            <span class="block text-indigo-500 lg:items-right"><small>Começe agora mesmo a organizar sua estante virtual.</small></span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a href="#" @click.prevent="handleShowModalClick"
                 class="opacity-80 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600">
                Adicione um novo livro
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    #COMPONENTE LISTA-->
    <list-book-case :source="books && books.data ? books.data : []"></list-book-case>
  </div>
</template>

<script lang="ts">

import ListBookCase from './Shared/_ListBookCase.vue'

import {defineComponent, reactive, ref, computed} from "vue";

import {useStore} from 'vuex'

const bookCases = {
  file_size: {
    name: 'Tamanho do arquivo em byte',
    value: ''
  },
  file_weight: {
    name: 'Peso do arquivo em grama',
    value: ''
  }
}

export default defineComponent({
  name: 'Index',
  components: {
    ListBookCase
  },
  data() {
    return {
      indeterminate: true,
      ebook_checked: null,
      bookCases: bookCases,
      bookCase_type: null,
      showModalCreateBook: false,
      errors: []
    }
  },
  setup: () => {
    const bookCase = reactive(
        {
          name: '',
          category: '',
          code: '',
          author: '',
        }
    )
    const store = useStore()
    return {
      bookCase,
      store,
      books: computed(() => store.state.books),
      nameCategory1: computed(() => bookCase.name + bookCase.category)
    }
  },
  updated(){
    console.log(this.$loading)
  },
  mounted() {
    this.ebook = null // verificar necessidade
    this.init()
  },
  directives: {
    indeterminate: function (el, binding) {
      el.indeterminate = Boolean(binding.value)
    }
  },
  computed: {
    nameCategory: function () {
      return this.bookCase.name + this.bookCase.category
    }
  },
  watch: {
    ebook_checked: function (val) {
      if (this.ebook_checked == true) {
        this.bookCase_type = 'file_size'
      }
      if (this.ebook_checked == false) {
        this.bookCase_type = 'file_weight'
      }
      if (this.indeterminate && !this.ebook_checked) {
        this.bookCase_type = null
      }
    }
  },
  methods: {
    init() {

      this.$loading = true

      let params = {
        page: 1,
        per_page : 50
      }

      this.$store.dispatch('fetchBooks', params).then(response =>{
        this.$loading = false

      }).catch(error =>{
        this.$loading = false
      })

    },
    checkOutIndeterminate() {

      // afeter DOM update

      this.$nextTick(function () {

        if (!this.indeterminate && this.ebook_checked) {
          this.indeterminate = true
          this.ebook_checked = null
          return
        }

        if (this.indeterminate) {
          this.ebook_checked = true
          this.indeterminate = false
          return
        }

        if (!this.indeterminate && !this.ebook_checked) {
          this.ebook_checked = false
          return
        }
        console.log(this.indeterminate, this.ebook_checked)

      })
    },
    handleShowModalClick() {
      if (this.showModalCreateBook == false) {
        this.showModalCreateBook = true
      } else {
        this.showModalCreateBook = false
      }
    },
    checkValuesToBookCreate() {

      let invalid = []

      for (var property in this.bookCase) {
        this.bookCase[property].length == 0 ? invalid.push(true) : false
      }

      if (!this.bookCase_type) {
        invalid.push(true)
      }
      for (property in this.bookCases) {
        if (property == this.bookCase_type) {
          if (this.bookCases[property].value.length == 0) {
            invalid.push(true)
          }
        }
      }
      if (invalid.length > 0) {
        return false
      } else {
        return true
      }
    },
    createBook() {

      let params = {
        name: this.bookCase.name,
        category: this.bookCase.category,
        code: this.bookCase.code,
        ebook: this.ebook_checked,
        author: this.bookCase.author,
        file_size: this.bookCases.file_size,
        file_weight: this.bookCases.file_weight
      }

      this.$store.dispatch('createBook').then(response => {

      }).catch(error => {

      })
    }
  }
})
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>
