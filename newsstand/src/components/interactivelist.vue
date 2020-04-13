<template>
  <q-list class="quasar-list" >
    <q-item active active-class="active-item" clickable >
      <q-item-section class="text-weight-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sint?</q-item-section>
    </q-item>
    <q-item  active-class="active-item" clickable >
      <q-item-section class="text-weight-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sint?</q-item-section>
    </q-item>
    <q-item  active-class="active-item" clickable >
      <q-item-section class="text-weight-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sint?</q-item-section>
    </q-item>
    <q-item  active-class="active-item" clickable >
      <q-item-section class="text-weight-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sint?</q-item-section>
    </q-item>
  </q-list>
</template>
<script>
  export default {
    props: {
      newsarticles: {
        required: true
      },
      number:{
        type:Number,
        default:10
      }
    },
    computed:{
      articles:function(){
        return this.newsarticles.slice(0,this.number);
      }
    }
  }
</script>
<style lang="scss" scoped>
// .quasar-list > div{
//   padding-left: 0;
//   padding-right: 0;
// }
.active-item {
  // border-top: 2px solid $primary;
  // border-bottom: 2px solid $primary;
  // border-radius: 2px solid $primary;
  box-shadow: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::after {
    content: "";
    position: absolute;
    right: -29px;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;

    border-left: 30px solid $primary;
    
  }
}
</style>