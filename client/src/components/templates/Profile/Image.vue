<template>
  <section>
    <div class="text-center">
      <h2>
        Ваша аватарка
      </h2>
    </div>
    <form class="space-y-3" action="#" method="POST">
      <div class="space-y-2">
        <label class="dropdown">
          <div class="cover">
            <div class="cover">
              <div class="frame"><i class="material-icons" style="font-size: 3rem;">upload_file</i></div>
            </div>
            <p class="pointer-none"><span>Перетащите</span> фаил
              сюда <br/> или <a style="text-decoration: underline; color: rgb(59, 130, 246);"
                                class="text-blue-600 hover:underline">кликните</a> тут</p>
          </div>
          <input type="file" style="visibility: hidden;">
        </label>
      </div>
      <p style="" class="sub">
        <span>Тип файлов: png, jpeg</span>
      </p>
      <div>
        <button type="submit" style="background: rgb(59, 130, 246);" class="button transition ease-in duration-300">
          Сохранить
        </button>
      </div>
    </form>
  </section>
</template>

<script>

export default {
  name: "ProfileImage"
}
</script>

<style scoped>

.frame {
  width: 55px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding: 1rem;
  border-radius: 50px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  --tw-text-opacity: 1;
  background: rgb(59 130 246 / var(--tw-text-opacity));
  color: rgb(243 244 246 / var(--tw-text-opacity));

  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  letter-spacing: 0.025em;
  font-weight: 600;
}

.cover {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  max-height: 12rem;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;
}

.dropdown {
  display: flex;
  flex-direction: column;
  text-align: center !important;

  height: 15rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 0.3rem !important;

  border-width: 4px;
  border-style: dashed;

  margin-bottom: 0.5rem;
}

.has-mask {
  position: absolute;
  clip: rect(10px, 150px, 130px, 10px);

  height: 9rem;
  object-position: center;
}

label, p {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));

  font-size: 0.875rem;
  line-height: 1.25rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.text-center {
  text-align: center;
  padding: 20px;
}

img, video {
  max-width: 100%;
  height: auto;
}

audio, canvas, embed, iframe, img, object, svg, video {
  display: block;
  vertical-align: middle;
}


blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: inherit;

  cursor: pointer;
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.sub {
  font-size: 0.875rem;
  line-height: 1.25rem;

  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

[type=button], [type=reset], [type=submit], button {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

[role=button], button {
  cursor: pointer;
}

button, select {
  text-transform: none;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  border-color: rgb(23, 93, 208);
}
</style>