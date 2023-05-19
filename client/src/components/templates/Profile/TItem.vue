<template>
  <tr>
    <td style="width: 7%;">
      <div class="flex items-center">
        <div>
          <div class="text-sm leading-5 text-gray-800">{{ item.count }}</div>
        </div>
      </div>
    </td>
    <td style="width: 23%;">
      <div class="text-sm leading-5 text-blue-900">{{item.name}}</div>
    </td>
    <td class="inform" style="width: 12%;">{{ item.subject }}</td>
    <td class="inform" style="width: 10%;">{{ item.course_id }}</td>
    <td class="inform" style="width: 10%;">
      <span class="status" v-bind:class="item.status">
        <span class="bg"/>
        <span class="text">{{ item.status }}</span>
      </span>
    </td>
    <td class="inform" style="width: 15%;">{{ item.created_at }}</td>
    <td class="inform" style="text-align: right; width: 23%;">
      <button class="view-button">View Details</button>
      <button class="trash-button"><i class="fa fa-trash"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

td {
  white-space: nowrap;
  padding: 10px 15px;
  border-bottom-width: 1px;
  --border-opacity: 1;
  border-color: #a0aec0;
  border-color: rgba(160,174,192,var(--border-opacity));
}
.inform {
  --text-opacity: 1;
  color: rgba(42,67,101,var(--text-opacity));
  font-size: .875rem;
  line-height: 1.25rem;
}
.status {
  position: relative;
  padding: 0.25rem 0.75rem;
  line-height: 1.25;
  font-weight: 600;
  display: inline-block;
}

button {
  transition-duration: .3s;
  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  --text-opacity: 1;
  padding: 0.5rem 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
  --border-opacity: 1;
  line-height: inherit;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
}
button:hover {
  --bg-opacity: 1;
  color: #fff;
}

.view-button {
  color: #4299e1;
  border-color: #4299e1;
}
.view-button:hover {
  background-color: #2b6cb0;
}

.trash-button {
  margin-left: 20px;
  color: #dd2b0e;
  border-color: #dd2b0e;
}
.trash-button:hover {
  background-color: #c91c00;
}




.text-blue-900 {
  --text-opacity: 1;
  color: #2a4365;
  color: rgba(42,67,101,var(--text-opacity));
}
.text-sm {
  font-size: .875rem;
}
.leading-5 {
  line-height: 1.25rem;
}


.bg {
  --bg-opacity: 1;
  --text-opacity: 1;
  border-radius: 9999px;
  opacity: .5;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.text {
  font-size: .75rem;
  position: relative;
}

.disabled {
  color: rgba(123,52,30,var(--text-opacity));
}
.disabled .bg {
  background-color: rgba(254,235,200,var(--bg-opacity));
}
.active {
  color: rgba(42,67,101,var(--text-opacity));
}
.active .bg {
  background-color: rgba(198,246,213,var(--bg-opacity));
}
.rejected {
  color: rgba(116,42,42,var(--text-opacity));
}
.rejected .bg {
  background-color: rgba(254,215,215,var(--bg-opacity));
}
</style>