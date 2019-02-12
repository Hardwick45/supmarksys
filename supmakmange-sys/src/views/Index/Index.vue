<template>
    <div class="index">
        <el-container>
            <!--左侧-->
            <Nav></Nav>
            <el-container>
                <!--右侧头部-->
                <el-header>
                    <Top></Top>
                </el-header>
                <!--右侧中间-->
                <el-main>
                    <router-view />
                </el-main>
                <!--右侧底部-->
                <el-footer>
                    <Bottom></Bottom>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Top from '@/components/Top/Top.vue'
import Bottom from '@/components/Bottom/Bottom.vue'
export default {
    components:{
        Nav,
        Top,
        Bottom
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
      background-color: #fff;
      color: #333;
      text-align: center;
    }
    .el-header,
    .el-footer {
      background-color: #fff;
      color: #2d3a4b;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
