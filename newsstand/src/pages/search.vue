<template>
  <q-page padding>
    <section>
      <header class="row  items-center">
        <h1 class="app-headings text-subtle-grey">Search Results - 12 of 53</h1>
      </header>
        <div>
          <landscapeCard></landscapeCard>
        </div>
    </section>
  </q-page>
</template>

<script>
import landscapeCard from 'components/landscapeNewscard' 
export default {
  components:{
    landscapeCard
  }
}
</script>
