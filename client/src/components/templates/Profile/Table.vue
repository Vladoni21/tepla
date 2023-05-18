<template>
  <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
    <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
      <div class="flex justify-between">
        <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
          <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div class="flex">
                                    <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" class="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
            </div>
            <input type="text" class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
      <table class="min-w-full">
        <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
          <th class="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
        </thead>
        <tbody class="bg-white">
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
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">active</span>
                                    </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
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
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">active</span>
                                    </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
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
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">not active</span>
                                    </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
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
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">active</span>
                                    </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
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
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
          <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">disabled</span>
                                    </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
        <div>
          <p class="text-sm leading-5 text-blue-700">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">200</span>
            of
            <span class="font-medium">2000</span>
            results
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex shadow-sm">
            <div>
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                1
              </a>
              <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                2
              </a>
              <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                3
              </a>
            </div>
            <div>
              <a href="#" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table"
}
</script>

<style scoped>
.w-full {
  width: 100%;
}
.align-middle {
  vertical-align: middle;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
}
.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.overflow-hidden {
  overflow: hidden;
}
.inline-block {
  display: inline-block;
}
.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}
.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}
.bg-white {
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255,255,255,var(--bg-opacity));
}
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

.justify-between {
  justify-content: space-between;
}
.flex {
  display: flex;
}
.w-7\/12 {
  width: 58.333333%;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.h-12 {
  height: 3rem;
}
.inline-flex {
  display: inline-flex;
}
.border {
  border-width: 1px;
}
.rounded {
  border-radius: 0.25rem;
}
.bg-transparent {
  background-color: transparent;
}


.w-full {
  width: 100%;
}
.relative {
  position: relative;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.h-full {
  height: 100%;
}
.items-stretch {
  align-items: stretch;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex {
  display: flex;
}



.whitespace-no-wrap {
  white-space: nowrap;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.leading-normal {
  line-height: 1.5;
}
.text-sm {
  font-size: .875rem;
}
.items-center {
  align-items: center;
}
.flex {
  display: flex;
}
.border-r-0 {
  border-right-width: 0;
}
.border {
  border-width: 1px;
}
.border-none {
  border-style: none;
}
.rounded-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rounded {
  border-radius: 0.25rem;
}
.bg-transparent {
  background-color: transparent;
}




.w-px {
  width: 1px;
}
.tracking-wide {
  letter-spacing: .025em;
}
.text-gray-500 {
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160,174,192,var(--text-opacity));
}
.relative {
  position: relative;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.leading-normal {
  line-height: 1.5;
}
.font-thin {
  font-weight: 200;
}
.flex-shrink {
  flex-shrink: 1;
}
.flex-grow {
  flex-grow: 1;
}
.flex-auto {
  flex: 1 1 auto;
}
.flex-1 {
  flex: 1 1 0;
}
.border-l-0 {
  border-left-width: 0;
}
.border {
  border-width: 1px;
}
.border-none {
  border-style: none;
}
.rounded-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rounded {
  border-radius: 0.25rem;
}


.align-middle {
  vertical-align: middle;
}
.shadow {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.pt-3 {
  padding-top: 0.75rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.overflow-hidden {
  overflow: hidden;
}
.min-w-full {
  min-width: 100%;
}
.inline-block {
  display: inline-block;
}
.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}
.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}
.bg-white {
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255,255,255,var(--bg-opacity));
}

.min-w-full {
  min-width: 100%;
}
table {
  border-collapse: collapse;
}

.tracking-wider {
  letter-spacing: .05em;
}
.text-blue-500 {
  --text-opacity: 1;
  color: #4299e1;
  color: rgba(66,153,225,var(--text-opacity));
}
.text-left {
  text-align: left;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.leading-4 {
  line-height: 1rem;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-gray-300 {
  --border-opacity: 1;
  border-color: #e2e8f0;
  border-color: rgba(226,232,240,var(--border-opacity));
}
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
}



.whitespace-no-wrap {
  white-space: nowrap;
}
.text-blue-900 {
  --text-opacity: 1;
  color: #2a4365;
  color: rgba(42,67,101,var(--text-opacity));
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.leading-5 {
  line-height: 1.25rem;
}
.text-sm {
  font-size: .875rem;
}
.border-b {
  border-bottom-width: 1px;
}
.border-gray-500 {
  --border-opacity: 1;
  border-color: #a0aec0;
  border-color: rgba(160,174,192,var(--border-opacity));
}
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
td {
  display: table-cell;
  vertical-align: inherit;
}





.text-green-900 {
  --text-opacity: 1;
  color: #22543d;
  color: rgba(34,84,61,var(--text-opacity));
}
.relative {
  position: relative;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.leading-tight {
  line-height: 1.25;
}
.font-semibold {
  font-weight: 600;
}
.inline-block {
  display: inline-block;
}

/* ss */
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.absolute {
  position: absolute;
}
.opacity-50 {
  opacity: .5;
}
.rounded-full {
  border-radius: 9999px;
}
.bg-green-200 {
  --bg-opacity: 1;
  background-color: #c6f6d5;
  background-color: rgba(198,246,213,var(--bg-opacity));
}

.relative {
  position: relative;
}
.text-xs {
  font-size: .75rem;
}


.text-red-900 {
  --text-opacity: 1;
  color: #742a2a;
  color: rgba(116,42,42,var(--text-opacity));
}
.bg-red-200 {
  --bg-opacity: 1;
  background-color: #fed7d7;
  background-color: rgba(254,215,215,var(--bg-opacity));
}
.text-orange-900 {
  --text-opacity: 1;
  color: #7b341e;
  color: rgba(123,52,30,var(--text-opacity));
}
.bg-orange-200 {
  --bg-opacity: 1;
  background-color: #feebc8;
  background-color: rgba(254,235,200,var(--bg-opacity));
}
</style>