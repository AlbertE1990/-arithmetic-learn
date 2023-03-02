<script lang="ts" setup name="ArithmeiticBoard">

</script>

<template>
  <div class="p-40px rounded shadow w-800px  bg-blue-gray-100 text-center">
    <div class="flex items-center justify-between">
      <!-- <div class="small-card number-card">
        9
      </div>
      <div class="small-card symbol">
        ×
      </div>
      <div class="small-card number-card">
        9
      </div>
      <div class="small-card symbol">
        =
      </div>
      <div class="small-card number-card">
        99
      </div> -->
      <SyArithmeticCard :character="9" />
    </div>
  </div>
</template>

<style>
.small-card{
  width: 120px;
  height: 120px;
  padding:20px;
  border-radius: 6px;
  text-align: center;
  user-select: none;
  line-height: 80px;
  font-size: 60px;
}
.number-card{
  background-color: aquamarine;

}
.symbol{
  font-size: 80px;
}
</style>
