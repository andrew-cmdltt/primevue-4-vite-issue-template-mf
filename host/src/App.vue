<template>
  <p class="py-4">
    This is host app
  </p>
  <div ref="remote_app"></div>
  <Button label="Button" />
</template>

<script>
import { mount } from "remote_app/app"

export default {
  mounted() {
    if (this.$refs.remote_app) {
      mount(this.$refs.remote_app)
    }
  }
}
</script>