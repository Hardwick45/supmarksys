<template>
    <div class="account-management">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>账号管理</span>

            </div>
            <div class="text item">
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="username" label="账号">
                    </el-table-column>
                    <el-table-column prop="usergroup" label="用户组">
                    </el-table-column>
                    <el-table-column label="创建日期">
                        <template slot-scope="scope">{{ scope.row.createdate }}</template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
          {
            username:"admin",
            usergroup:"高级管理员",
            createdate:"2019-02-04"
          },
            {
            username:"李寻欢",
            usergroup:"普通用户",
            createdate:"2018-12-04"
          },  {
            username:"Tom",
            usergroup:"普通用户",
            createdate:"2018-07-16"
          },  {
            username:"Tony",
            usergroup:"高级管理员",
            createdate:"2019-01-28"
          },  {
            username:"Jerry",
            usergroup:"普通用户",
            createdate:"2018-11-23"
          },
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(){

    },
    handleDelete(){

    }
  }
};
</script>
<style lang="less">
.account-management {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background: #f1f1f1;
    }
  }
}
</style>
