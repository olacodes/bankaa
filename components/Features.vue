<template>
  <div class="features-wrapper">
    <div class="features-img-cont">
      <img src="~/assets/banka3.png" alt="" class="feature-img" />
    </div>
    <div class="feature-text-border">

    <div class="feature-text">
      <h5 class="text-header has-text-centered">Search Data</h5>
      <p class="feature-para has-text-justified">
        Don't wory if your data is very large, the Data Warehouse provides a
        search engine, which is useful for making it easier to find data
        effectively saving time.
      </p>
    <p class="learn-more"> Learn more &rightarrow;</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.features-wrapper{
  /* display: flex; */
  /* max-width: 30rem; */
}
.feature-text-border{
  /* border-top-left-radius: 50% 100%;
  border-bottom-left-radius: 10% 10%;
  border-bottom-right-radius: 20% 20%;
  background-color: antiquewhite;
  border: 2px solid red;
  padding: 2rem 4rem; */
  /* border-bottom: 100px solid red; */
  position: relative;
  height: 300px;
  overflow: hidden;


}
.feature-text{
  /* border: 2px solid black;
  background-color: red; */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(6deg);
  transform-origin: top left;
  
} 
</style>
