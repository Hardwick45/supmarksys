<template>
    <div class="index">
        <el-container>
            <!--左侧-->
            <Nav></Nav>
            <el-container>
                <!--右侧头部-->
                <el-header>Header</el-header>
                <!--右侧中间-->
                <el-main>
                    <router-view />
                </el-main>
                <!--右侧底部-->
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
export default {
    components:{
        Nav
    }
};
</script>
<style lang="less">
.index {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #2d3a4b;
      color: #333;
      text-align: center;
     
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
