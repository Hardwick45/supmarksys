<template>
    <el-aside width="200px">
        <el-menu background-color="#2d3a4b" unique-opened active-text-color="rgb(64, 158, 255)" :default-active="this.$route.path" router>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-setting"></i>系统管理</template>
                <el-menu-item index="/">系统信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-printer"></i>账号管理</template>
                <el-menu-item index="accountmanagement">账号管理</el-menu-item>
                <el-menu-item index="accountadd">添加账号</el-menu-item>
                <el-menu-item index="changepwd">密码修改</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-goods"></i>商品管理</template>
                <el-menu-item index="goodsmanage">商品管理</el-menu-item>
                <el-menu-item index="goodsadd">添加商品</el-menu-item>

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-tickets"></i>统计管理</template>
                <el-menu-item index="salestatistics">销售统计</el-menu-item>
                <el-menu-item index="Incomingstatistics">进货统计</el-menu-item>

            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-star-on"></i>会员管理</template>
                <el-menu-item index="vipnummanage">账号管理</el-menu-item>
                <el-menu-item index="vipnumadd">添加账号</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-news"></i>进货管理</template>
                <el-menu-item index="instockmanage">库存管理</el-menu-item>
                <el-menu-item index="instockadd">添加库存</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
export default {};
</script>
<style lang="less">
.el-menu {
  border: none;
  .el-submenu__title {
    color: #fff;
  }
  .el-menu-item {
    color: #fff;
  }
}
</style>

