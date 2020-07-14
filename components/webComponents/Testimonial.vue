<template>
  <div class="testimonial">
    <div class="testinonial-header">
      <h3 class="has-text-centered cus-header">What our customer are saying</h3>
      <div>
        <div class="tiny-line"></div>
      </div>
    </div>

    <div class="user-testimony">
      <div class="user-info">
        <div class="img-cont">
        <img src="~/assets/customer.png" alt="user img" class="customer-img"/>
        </div>
        <p class="user-name has-text-centered">Edward Newgate <span class="user-title">Founder circle</span></p>
      </div>

      <div class="his-testimony">
        <p class="has-text-justified">
          "Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          adninistrative hassle) and securely"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonial{
  border-radius: 3rem;
  padding: 1.5rem 2.5rem;
  background: linear-gradient(191.49deg, #67C3F3 9.05%, #5A98F2 76.74%);
  color: white;
  font-weight: 300;
  font-size: .9rem;
}
.cus-header{
  color: white;
}
.tiny-line{
  /* padding: 1rem; */
  border-bottom: .1rem solid;
  max-width: 4rem;
  margin: 0 auto;

}
.user-testimony{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
}

.img-cont{
  width: 7rem;
}
.customer-img{
  width: 100%;
  border-radius: 50%;
}
.user-name{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: .5rem;
  font-weight: bold;
  width: 8rem;
}
.user-title{
  display: block;
  font-weight: 100;
  font-size: .8rem;
}
.user-info{
  margin-bottom: 1rem;
}
@media screen and (min-width: 700px){
  .testimonial{
  padding: 3rem 4rem;

  }
.user-testimony{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-info{
  margin-right: 2rem;
  padding: 1rem 0;
  display: flex;
}
}
</style>
