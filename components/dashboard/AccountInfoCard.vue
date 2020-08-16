<template>
  <div class="card card-wrapper">
    <!-- <div class="second-wrapper"> -->
      <h3 class="acc-title">Account Information</h3>
      <div class="account-profile-cont">
        <div class="img-cont">
          <img src="~/assets/customer.png" alt="" />
        </div>

        <div class="account-profile">
          <h1 class="card-title">
            Account Name: <i class="val">Olatunde Sodiq</i>
          </h1>
          <div class="underline"></div>
          <h1 class="card-title">
            Account Number: <i class="val">1234567890</i>
          </h1>
          <div class="underline"></div>
          <h1 class="card-title">
            Account Balance: <i class="val">#{{ totalBalance.balance }}</i>
          </h1>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    totalBalance: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  /* border: 2px solid; */
  /* flex-grow: 1; */
}
.account-profile-cont {
  /* font-size: 1.5rem; */
  /* display: flex; */
  /* justify-content: center; */
}
.img-cont{
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media screen and (min-width: 600px){
  .account-profile-cont{
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .img-cont{
    /* align-items: center; */
    /* width: 10rem; */
    margin-right: 1.5rem;
  }
  .card{
    padding: 1.5rem 3.5rem;
  }
}
.img-cont > img{
  width: 100%;
  border-radius: 50%;
}
.acc-title {
  font-size: 1.7rem;
  padding-bottom: 1rem;
  color: #5a98f2;
  font-weight: 500;
  /* text-align:center; */
}
.val {
  font-weight: 100;
}
.underline {
  border-top: 1px solid #5a98f2;
  padding-bottom: 0.5rem;
}
.card-title {
  font-size: 1.3rem;
  color: #5a98f2;
}
</style>
