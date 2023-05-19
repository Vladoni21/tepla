<template>
  <section style="width: 80%;">
    <article class="searchbar_table">
      <ASearch/>
    </article>
    <article class="context_table scroll-table">
      <div class="">
        <table>
        <thead>
        <tr>
          <th style="width: 7%;">№</th>
          <th style="width: 23%;">Title</th>
          <th style="width: 12%;">Subject</th>
          <th style="width: 10%;">ID</th>
          <th style="width: 10%;">Status</th>
          <th style="width: 15%;">Created At</th>
          <th style="width: 23%;"></th>
        </tr>
        </thead>
      </table>
        <div class="scroll-table-body">
        <table>
          <TBody v-bind:arr="own_courses"/>
        </table>
      </div>
      </div>
      <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
        <div>
          <p class="text-sm leading-5 text-blue-700">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">5</span>
            of
            <span class="font-medium">10</span>
            results
          </p>
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
        {count: 1, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "active", created_at: "September 12"},
        {count: 2, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "disabled", created_at: "September 12"},
        {count: 3, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "rejected", created_at: "September 12"},
        {count: 4, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "disabled", created_at: "September 12"},
        {count: 5, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "rejected", created_at: "September 12"},
        {count: 6, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "active", created_at: "September 12"},
        {count: 7, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "disabled", created_at: "September 12"},
        {count: 8, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "rejected", created_at: "September 12"},
        {count: 9, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "disabled", created_at: "September 12"},
        {count: 10, name: "Разработка на JS", subject: "code", course_id: "000000001", status: "rejected", created_at: "September 12"},
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

.scroll-table-body {
  height: 300px;
  overflow-x: auto;
}
.scroll-table table {
  width:80%;
  table-layout: fixed;
  border: none;
}

.scroll-table tbody td {
  text-align: left;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}


.text-blue-700 {
  --text-opacity: 1;
  color: #2b6cb0;
  color: rgba(43,108,176,var(--text-opacity));
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.inline-flex {
  display: inline-flex;
}

.border {
  border-width: 1px;
}

.relative {
  position: relative;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.text-sm {
  font-size: .875rem;
}

.items-center {
  align-items: center;
}

.border {
  border-width: 1px;
}

.text-gray-500 {
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
}

.relative {
  position: relative;
}

.border {
  border-width: 1px;
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
  line-height: 1rem;
  --border-opacity: 1;
  border-color: #e2e8f0;
  border-color: rgba(226, 232, 240, var(--border-opacity));
  box-sizing: border-box;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  width: 20%;
}

.relative {
  position: relative;
}

/* Стили для скролла */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
</style>