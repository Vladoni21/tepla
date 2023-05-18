<template>
  <tr>
    <td>
      <div class="flex items-center">
        <div>
          <div class="text-sm leading-5 text-gray-800">#1</div>
        </div>
      </div>
    </td>
    <td>
      <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
    </td>
    <td class="inform">damilareanjorin1@gmail.com</td>
    <td class="inform">+2348106420637</td>
    <td class="inform">
      <span style="font-weight: 600; line-height: 1.25; position: relative;" class="text-green stat">
        <span class="bg"/>
        <span>active</span>
      </span>
    </td>
    <td class="inform">September 12</td>
    <td class="inform">
      <button>View Details</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "item"
}
</script>

<style scoped>
td {
  white-space: nowrap;
  padding: 1rem 1.5rem;
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
.stat {
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
  color: #4299e1;
  padding: 0.5rem 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
  --border-opacity: 1;
  border-color: #4299e1;
  line-height: inherit;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
}
button:hover {
  --bg-opacity: 1;
  color: #fff;
  background-color: #2b6cb0;
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

.text-orange {
  color: rgba(123,52,30,var(--text-opacity));
}
.text-orange .bg {
  background-color: rgba(254,235,200,var(--bg-opacity));
}
.text-green {
  color: rgba(42,67,101,var(--text-opacity));
}
.text-green .bg {
  background-color: rgba(198,246,213,var(--bg-opacity));
}
.text-red {
  color: rgba(116,42,42,var(--text-opacity));
}
.text-red .bg {
  background-color: rgba(254,215,215,var(--bg-opacity));
}
</style>