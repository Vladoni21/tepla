<template>
  <section>
    <article class="searchbar_table">
      <ASearch/>
    </article>
    <article class="context_table">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Subject</th>
          <th>Secret</th>
          <th>Status</th>
          <th>Created At</th>
          <th></th>
        </tr>
        </thead>
        <TBody v-bind:arr="own_courses"/>
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
              <a href="#"
                 class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                 aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="#"
                 class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                1
              </a>
              <a href="#"
                 class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                2
              </a>
              <a href="#"
                 class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                3
              </a>
            </div>
            <div>
              <a href="#"
                 class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                 aria-label="Next">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import position from "./TItem.vue";
import TBody from "./TBody.vue";
import ASearch from "./ASearch.vue";

export default {
  name: "Table",
  components: {ASearch, TBody, position},
  data() {
    return {
      own_courses: [
        {id: 1, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "active"},
        {id: 2, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "disabled"},
        {id: 3, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "rejected"},
      ],
    }
  }
}
</script>

<style scoped>
.searchbar_table {
  width: 100%;
  vertical-align: middle;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
  padding: 1rem 3rem;
  overflow: hidden;
  display: inline-block;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-color: #fff;
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

.li_data {
  white-space: nowrap;
  --text-opacity: 1;
  color: #2a4365;
  color: rgba(42, 67, 101, var(--text-opacity));
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: 1.25rem;
  font-size: .875rem;
  border-bottom-width: 1px;
  --border-opacity: 1;
  border-color: #a0aec0;
  border-color: rgba(160, 174, 192, var(--border-opacity));
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
  color: rgba(160, 174, 192, var(--text-opacity));
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

.context_table {
  vertical-align: middle;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  padding-top: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
  min-width: 100%;
  display: inline-block;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #fff;
}


table {
  min-width: 100%;
  border-collapse: collapse;
}
table thead tr th {
  letter-spacing: .05em;
  --text-opacity: 1;
  color: #4299e1;
  color: rgba(66, 153, 225, var(--text-opacity));
  text-align: left;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  line-height: 1rem;
  --border-opacity: 1;
  border-color: #e2e8f0;
  border-color: rgba(226, 232, 240, var(--border-opacity));
  box-sizing: border-box;
}

.itemi {
  white-space: nowrap;
  color: #2a4365;
  color: rgba(42, 67, 101, var(--text-opacity));
  padding: 1rem 0.5rem;
  line-height: 1.25rem;
  font-size: .875rem;
  border-bottom-width: 1px;
  --border-opacity: 1;
  border-color: #a0aec0;
  box-sizing: border-box;
  border-style: solid;
  display: table-cell;
  vertical-align: inherit;
}

.uuuu {
  white-space: nowrap;
  --text-opacity: 1;
  color: #2a4365;
  color: rgba(42, 67, 101, var(--text-opacity));
  padding: 1rem 1.5rem;
  line-height: 1.25rem;
  font-size: .875rem;
  border-bottom-width: 1px;
  border-color: #a0aec0;
  border-color: rgba(160, 174, 192, var(--border-opacity));
}


.text-green-900 {
  --text-opacity: 1;
  color: #22543d;
  color: rgba(34, 84, 61, var(--text-opacity));
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
  background-color: rgba(198, 246, 213, var(--bg-opacity));
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
  color: rgba(116, 42, 42, var(--text-opacity));
}

.bg-red-200 {
  --bg-opacity: 1;
  background-color: #fed7d7;
  background-color: rgba(254, 215, 215, var(--bg-opacity));
}

.text-orange-900 {
  --text-opacity: 1;
  color: #7b341e;
  color: rgba(123, 52, 30, var(--text-opacity));
}

.bg-orange-200 {
  --bg-opacity: 1;
  background-color: #feebc8;
  background-color: rgba(254, 235, 200, var(--bg-opacity));
}
</style>