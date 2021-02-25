<template>
  <div>
    <!--  搜索  -->
    <Search @submit="searchSubmit" :categoryList="categoryList" :page="page"/>
    <!--  表格   -->
    <products-table :data="tableData" @change="changePage"/>
  </div>
</template>
<script>
import Search from '@/components/search.vue';
import productsTable from '@/components/productsTable.vue';
import categoryApi from '@/api/category';
import api from '@/api/products';

export default {
  components: {
    Search,
    productsTable,
  },
  data() {
    return {
      categoryList: [],
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      tableData: [],
      categoryObj: [],
    };
  },
  async created() {
    const { data } = await categoryApi.list();
    this.categoryList = data;
    data.forEach((item) => {
      this.categoryObj[item.id] = item;
    });
    this.getTableData();
  },
  methods: {
    searchSubmit(page) {
      console.log(page);
    },
    async getTableData() {
      const res = await api.list({
        page: this.page.current,
        size: this.page.pageSize,
      });
      this.page.total = res.total;
      this.tableData = res.data.map((item) => ({
        ...item,
        categoryName: this.categoryObj[item.category].name,
      }));
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
  },
};
</script>
