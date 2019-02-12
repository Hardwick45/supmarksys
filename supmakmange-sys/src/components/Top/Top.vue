<template>
    <div class="top">
        <el-row>
            <el-col :span="12">
                <div class="title">
                    <i class="el-icon-upload"></i>
                    华联超市管理系统
                </div>
            </el-col>
            <el-col :span="12">
                <div class="top-right">
                    <el-row>
                        <el-col :span="18">
                            欢迎您!
                            <el-dropdown :hide-on-click="false">
                                <span class="username el-dropdown-link">
                                    {{ username }}
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>推出登录</el-dropdown-item>
                                    
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                        <el-col :span="6">
                            <div class="avtar">

                            </div>
                        </el-col>

                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin",
      avtarUrl: ""
    };
  }
};
</script>
<style lang="less">
.top {
  .title {
    text-align: left;
    font-size: 20px;
    font-weight: 500;
  }
  .top-right {
    color: #2d3a4b;
    text-align: right;
    padding-right: 30px;
    .username {
      font-weight: 600;
    }
    .avtar {
      width: 50px;
      height: 50px;
      margin-top: 5px;
      background-color: #ccc;
      border-radius: 50%;
      margin-left: 25px;
    }
  }
}
</style>
