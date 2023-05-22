<template>
    <label class="option">
        <input name="option" type="radio">
        <span class="title animated fadeIn">
      <i class="material-icons icon">{{ item.icon }}</i>
      {{ item.title }}</span>
    </label>
</template>

<script>
export default {
    name: 'selector-item', props: {
        item: {
            type: Object, required: true,
        },
    },
};
</script>

<style scoped>

label {
    margin-bottom: 0;
}

.title {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.5em 2em;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.select > input:checked div.options label.option .title {
    display: none !important;
}

.select > input:not(:checked) {
    z-index: 4;
}

.select > input:not(:checked) ~ label.option > span.title {
    display: none;
}

.option {
    display: block;
    z-index: 1;
    width: 100%;
    transition: all 1s ease-out;
}

.select label.option span.title {
    position: relative;
    z-index: 2;
    transition: background 0.3s ease-out;
}

.icon {
    padding-right: 8px;
    color: #92a8d1;
}

.select label.option span.title:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1);
}

.select label.option input {
    display: none;
}

.select label.option input:checked ~ span.title {
    position: absolute;
    display: block;
    z-index: 3;
    top: 0;
    font-size: 12px;
    background: #fff;
    border-top: 0;
    box-shadow: none;
    color: inherit;
    width: 100%;
}

.select label.option input:disabled ~ span.title {
    background: #f9f9f9 !important;
    color: #aaa;
}

.select label.option input:disabled ~ span.title:hover {
    color: #aaa;
    background: none;
    cursor: no-drop;
}

.title {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.5em 2em;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

label > input {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0;
    cursor: pointer;
}

label > input:checked {
    z-index: 2;
}

label > input:not(:checked) ~ label.option input:not(:checked) ~ .title {
    display: none !important;
}

label > input:disabled {
    cursor: no-drop;
}

label.option {
    display: block;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    transition: all 1s ease-out;
}

label.option span.title {
    position: relative;
    z-index: 2;
    transition: background 0.3s ease-out;
}

label.option span.title i.icon {
    padding-right: 8px;
    color: #92a8d1;
}

label.option span.title:hover {
    color: #fff;
    background: rgba(146, 168, 209, 0.5);
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1);
}

label.option input {
    display: none;
}

label.option input:checked ~ span.title {
    position: absolute;
    display: block;
    z-index: 1;
    top: 0;
    font-size: 12px;
    background: #fff;
    border-top: 0;
    box-shadow: none;
    color: inherit;
    width: 100%;
}

label.option input:disabled ~ span.title {
    background: #f9f9f9 !important;
    color: #aaa;
}

label.option input:disabled ~ span.title:hover {
    color: #aaa;
    background: none;
    cursor: no-drop;
}
</style>