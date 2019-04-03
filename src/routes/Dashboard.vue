<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <DoughnutChart></DoughnutChart>
      </div>
      <div class="col-md-12 col-lg-6">
        <BarChart></BarChart>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-lg-2 col-sm-12
        d-flex flex-column align-items-center justify-content-center">
         <h1 class="BubbleChart__title">207</h1>
         <h5 class="font-weight-normal">AUTHORS</h5>
      </div>
      <div class="col-lg-10 col-sm-12">
        <BubbleChart></BubbleChart>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/DoughnutChart'
import BarChart from '@/components/BarChart'
import BubbleChart from '@/components/BubbleChart'

export default {
  components: {
    DoughnutChart,
    BarChart,
    BubbleChart
  },
  name: 'Dashboard'
}
</script>

<style>
  .BubbleChart__title {
    margin-bottom: 0;
  }
</style>
