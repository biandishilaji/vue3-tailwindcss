<template>
  <div class="bg-gray-100 ">

    <div class="opacity-75 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="max-w-none mx-auto">
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
          <section v-if="source.data && source.data.length == 0">
            <div class="flex justify-center ...">
              <h1 style="font-size: 25px;margin-top: 50px;" class="text-gray-400">Oops! ainda não há nenhum livro na
                estante</h1>
            </div>
            <div class="flex justify-center ...">
              <h1 style="font-size: 25px;margin-top: 25px;" class="text-indigo-400">Ao cadastrar um novo livro, será
                possível visualizar aqui.</h1>
            </div>
            <div class="grid gap-1 grid-cols-1">
              <div class="flex justify-center ...">
                <img src="https://i.pinimg.com/474x/7c/8d/0d/7c8d0da7db6b0a2d063dc4b4f8760a33.jpg">
              </div>
            </div>
          </section>
          <div v-if="source && source.data" class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                      <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nome do livro
                      </th>
                      <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Categoria
                      </th>
                      <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Código
                      </th>
                      <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Autor
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="item in source.data.data">
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ handleNameReduceCategory(item.name_category, item.category) }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ item.category }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ item.code }}
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ item.author }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div class="ml-2 flex-shrink-0 flex">
                                          <span
                                              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-400">
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                               class="transform transition-transform duration-500 ease-in-out"><path
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </span>
                          <span
                              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-red-500">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                         class="transform transition-transform duration-500 ease-in-out"><path
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </span>
                          <span v-if="item.ebook"
                              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                              E-BOOK
                                            </span>
                        </div>

                      </td>
                    </tr>

                    <!-- More items... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!--          <ul class="opacity-75 divide-y divide-gray-200" aria-disabled="true">-->
          <!--            <li v-if="!source.data" v-for="item in 3">-->
          <!--              <a class="block hover:bg-gray-50">-->
          <!--                <div class="px-4 py-4 sm:px-6">-->
          <!--                  <div class="flex items-center justify-between">-->
          <!--                    <div class="text-sm font-medium text-indigo-600 truncate">-->


          <!--                      <skeleton style="width: 1150px"/>-->
          <!--                    </div>-->
          <!--                    &lt;!&ndash;                    <div class="ml-2 flex-shrink-0 flex">&ndash;&gt;-->
          <!--                    &lt;!&ndash;                      <span&ndash;&gt;-->
          <!--                    &lt;!&ndash;                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-400">&ndash;&gt;-->
          <!--                    &lt;!&ndash;      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>&ndash;&gt;-->
          <!--                    &lt;!&ndash;                        </span>&ndash;&gt;-->
          <!--                    &lt;!&ndash;                      <span&ndash;&gt;-->
          <!--                    &lt;!&ndash;                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-red-500">&ndash;&gt;-->
          <!--                    &lt;!&ndash;                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>&ndash;&gt;-->
          <!--                    &lt;!&ndash;                        </span>&ndash;&gt;-->
          <!--                    &lt;!&ndash;                      <span&ndash;&gt;-->
          <!--                    &lt;!&ndash;                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">&ndash;&gt;-->
          <!--                    &lt;!&ndash;                          E-BOOK&ndash;&gt;-->
          <!--                    &lt;!&ndash;                        </span>&ndash;&gt;-->
          <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->

          <!--                  </div>-->
          <!--                </div>-->
          <!--              </a>-->
          <!--            </li>-->
          <!--            <li v-if="source.data && source.data.length > 0" v-for="item in source.data">-->
          <!--              <a class="block hover:bg-gray-50">-->
          <!--                <div class="px-4 py-4 sm:px-6">-->
          <!--                  <div class="flex items-center justify-between">-->
          <!--                    <div class="text-sm font-medium text-indigo-600 truncate">-->
          <!--                    </div>-->
          <!--                    <div class="ml-2 flex-shrink-0 flex">-->
          <!--                                          <span-->
          <!--                                              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-400">-->
          <!--                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"-->
          <!--                               class="transform transition-transform duration-500 ease-in-out"><path-->
          <!--                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
          <!--                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>-->
          <!--                                            </span>-->
          <!--                      <span-->
          <!--                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-red-500">-->
          <!--                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"-->
          <!--                                         class="transform transition-transform duration-500 ease-in-out"><path-->
          <!--                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
          <!--                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>-->
          <!--                                            </span>-->
          <!--                      <span-->
          <!--                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">-->
          <!--                                              E-BOOK-->
          <!--                                            </span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </a>-->
          <!--            </li>-->
          <!--          </ul>-->
          <pagination v-if="source.data && source.data.length" :source="source"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Pagination from "@/components/Pagination.vue";
import Skeleton from "@/components/Skeleton.vue";

export default {
  name: "ListBookCase",
  components: {
    Pagination,
    Skeleton
  },
  props: ['source'],
  data() {
    return {}
  },
  methods: {
    handleNameReduceCategory(name_category, category) {
      return name_category.replace(category, '')
    }
  }
}
</script>

<style scoped>

</style>
