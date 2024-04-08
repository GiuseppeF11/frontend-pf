<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
  </button>

  <div
    class="offcanvas offcanvas-start"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>I will not close if you click outside of me.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
