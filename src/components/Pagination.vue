<template>
  <div>
    <div v-if="!source.data"
         class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="flex-1 flex justify-between sm:hidden">
        <a
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
          Previous
        </a>
        <a
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <!--          <p class="text-sm text-gray-700">-->
          <!--            Exibindo-->
          <!--            <span class="font-medium">{{ source.from }}</span>-->
          <!--            de-->
          <!--            <span class="font-medium">{{ source.to }}</span>-->
          <!--            livros encontrados.-->
          <!--          </p>-->
          <skeleton v-if="source = []" style="width: 250px"/>
        </div>
        <div>
          <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <a
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: chevron-left -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
            <a v-for="item in source.last_page"
               @click.prevent="page_checked = item"
               href="#"
               class="relative inline-flex items-center px-4 py-2 border bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span v-if="page_checked == item"><b class="text-indigo-400">{{ item }}</b></span>
              <span v-else>{{ item }}</span>
            </a>

            <a
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Next</span>
              <!-- Heroicon name: chevron-right -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div v-else class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="flex-1 flex justify-between sm:hidden">
        <a
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
          Previous
        </a>
        <a
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Exibindo
            <span class="font-medium">{{ source.data.from }}</span>
            de
            <span class="font-medium">{{ source.data.to }}</span>
            livros encontrados.
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <a ref=""
                class="no-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Previous</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
            <a v-for="item in source.data.last_page"
               @click.prevent="handleNavigate(item)"
               href="#"
               class="relative inline-flex items-center px-4 py-2 border bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span v-if="page_checked == item"><b class="text-indigo-400">{{ item }}</b></span>
              <span v-else>{{ item }}</span>
            </a>
            <a ref="next_prev"
                class="no-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Next</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Skeleton from "@/components/Skeleton.vue";

export default {
  name: "Pagination",
  props: ['source'],
  components: {
    Skeleton
  },
  data() {
    return {
      page_checked: 1
    }
  },
  methods: {
    handleNavigate(item) {
      if (this.page_checked == item) {
        return
      }
      this.page_checked = item

      let params = {
        per_page: 50,
        page: 1
      }

      this.$store.dispatch('fetchBooks', params).then(response => {
      }).catch(error => {
      })
    }
  }
}
</script>

<style scoped>
.no-pointer {
  opacity: 50%;
  pointer-events: none;
  cursor: none;
}
</style>
