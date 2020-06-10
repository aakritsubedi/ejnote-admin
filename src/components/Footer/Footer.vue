<template>
  <div class="footer">
    <span class="visit-count">This website has been visited: 74519 times.</span>
    <span class="footer-text">Copyright &copy; 2020. All right reserved. Engineering Juntion.</span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  .footer {
    background-image: url('../../assets/images/footer.png');
    height: 100px;
    padding: 25px 16px;
  }
  .footer span {
    display: block;
  }
</style>
