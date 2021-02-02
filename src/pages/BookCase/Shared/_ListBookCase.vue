<template>
  <div class="bg-gray-100 ">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="max-w-none mx-auto">
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
          <ul class="opacity-75 divide-y divide-gray-200" aria-disabled="true">

            <li v-for="item in 2">
              <a class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-indigo-600 truncate">

      <skeleton style="width: 1150px"/>
                    </div>
<!--                    <div class="ml-2 flex-shrink-0 flex">-->
<!--                      <span-->
<!--                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-400">-->
<!--      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>-->
<!--                        </span>-->
<!--                      <span-->
<!--                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-red-500">-->
<!--                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>-->
<!--                        </span>-->
<!--                      <span-->
<!--                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">-->
<!--                          E-BOOK-->
<!--                        </span>-->
<!--                    </div>-->

                  </div>
                </div>
              </a>
            </li>

          </ul>
          <pagination></pagination>
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
  props: ['items']
}
</script>

<style scoped>

</style>
