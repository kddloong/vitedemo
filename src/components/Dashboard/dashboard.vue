<template>
  <el-row :gutter="20">
    <el-col :span="6"
    >
      <dashboardCard card_name="日结算"></dashboardCard>
    </el-col
    >
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>

<script>
import { dashboardCard } from './components/dashboard-card.jsx'
export default {

  name: 'dashboard',
  components: {dashboardCard},
  data() {
    return {
      cardResponsiveLayout: {
        xs: "6", sm: "6", md: "4", lg: "2", xl: "1"
      }
    }

  },
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
