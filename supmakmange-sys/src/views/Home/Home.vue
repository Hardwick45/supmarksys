<template>
    <div class="home">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统信息</span>

            </div>
            <div class="text item">
                <el-alert title="商品总数：5。已结销售的总金额：8900:00。库存商品总价：1563.64" type="info" show-icon>
                </el-alert>
                <el-alert title="导入数据" type="success" show-icon>
                </el-alert>
                <!--中间内容卡片-->
                <el-row :gutter="20">
                    <el-col :span="12">
                        <!--左侧卡片-->
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>
                                    销售排行
                                </span>
                            </div>
                            <div class="text item">
                                <el-table :data="saleData" style="width: 100%">
                                    <el-table-column prop="goodsname" label="商品名称">
                                    </el-table-column>
                                    <el-table-column prop="saleCount" label="销量">
                                    </el-table-column>

                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>
                                    缺货商品
                                </span>
                            </div>
                            <div class="text item">
                                <el-table :data="stockoutData" style="width: 100%">
                                    <el-table-column prop="goodsname" label="商品名称">
                                    </el-table-column>
                                    <el-table-column prop="inventory" label="库存">
                                    </el-table-column>
                                    <el-table-column prop="saleCount" label="操作">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small">
                                                入库
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      saleData: [
        {
          goodsname: "海飞丝去屑洗发水",
          saleCount: 56
        },
        {
          goodsname: "茅台酒",
          saleCount: 16
        },
        {
          goodsname: "龙凤呈祥",
          saleCount: 23
        },
        {
          goodsname: "高露洁牙膏",
          saleCount: 18
        }
      ],
      stockoutData: [
        {
          goodsname: "我的优乐美",
          inventory: 0
        },
        {
          goodsname: "哇哈哈",
          inventory: 3
        },
        {
          goodsname: "美好火腿肠",
          inventory: 6
        },
        {
          goodsname: "黄鹤楼",
          inventory: 4
        }
      ]
    };
  }
};
</script>
<style lang="less">
.home {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background: #f1f1f1;
    }
    .el-card__body {
      .item {
        .el-alert {
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>
