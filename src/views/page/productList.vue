<template>
  <div>
    <!--  搜索  -->
    <Search @submit="searchSubmit" :categoryList="categoryList" />
  </div>
</template>
<script>
import Search from '@/components/search.vue';
import categoryApi from '@/api/category';

export default {
  components: {
    Search,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  async created() {
    const { data } = await categoryApi.list();
    this.categoryList = data;
  },
  methods: {
    searchSubmit(page) {
      console.log(page);
    },
  },
};
</script>
