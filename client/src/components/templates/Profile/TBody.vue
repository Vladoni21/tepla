<template>
  <tr>
    <td class="uuuu">
      <div class="flex items-center">
        <div>
          <div class="text-sm leading-5 text-gray-800">#1</div>
        </div>
      </div>
    </td>
    <td class="uuuu">
      <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
    </td>
    <td class="uuuu">damilareanjorin1@gmail.com</td>
    <td class="uuuu">+2348106420637</td>
    <td class="uuuu">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">active</span>
                                    </span>
    </td>
    <td class="li_data">September 12</td>
    <td class="li_btn">
      <button
          class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
        View Details
      </button>
    </td>
  </tr>
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <div class="flex items-center">
        <div>
          <div class="text-sm leading-5 text-gray-800">#1</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
    </td>
    <td class="uuuu">damilareanjorin1@gmail.com</td>
    <td class="uuuu">+2348106420637</td>
    <td class="uuuu">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">not active</span>
                                    </span>
    </td>
    <td class="li_data">September 12</td>
    <td class="li_btn">
      <button
          class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
        View Details
      </button>
    </td>
  </tr>
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <div class="flex items-center">
        <div>
          <div class="text-sm leading-5 text-gray-800">#1</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
    </td>
    <td class="uuuu">damilareanjorin1@gmail.com</td>
    <td class="uuuu">+2348106420637</td>
    <td class="uuuu">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">disabled</span>
                                    </span>
    </td>
    <td class="li_data">September 12</td>
    <td class="li_btn">
      <button
          class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
        View Details
      </button>
    </td>
  </tr>
  <TItem v-for="i of arr" v-bind:item="i"/>
</template>

<script>
import TItem from "./TItem.vue";

export default {
  name: "TBody",
  components: {TItem},
  props: ["arr"],
}
</script>

<style scoped>

</style>