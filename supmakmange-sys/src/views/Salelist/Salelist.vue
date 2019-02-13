 <template>
    <div class="salelist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>销售明细</span>
            </div>
            <div class="text item">
                <el-form :inline="true" :model="salelist" class="demo-form-inline" label-position="left">
                    <div class="timewrapper">
                        <el-form-item label="开始时间：">
                            <el-col>
                                <el-date-picker type="date" placeholder="选择日期" v-model="salelist.starttime" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="结束时间：">
                            <el-col>
                                <el-date-picker type="date" placeholder="选择日期" v-model="salelist.endtime" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </div>
                    <div class="inptwrapper">
                        <el-form-item prop="serch" label="关键字">
                            <el-input type="text" v-model="salelist.serch" autocomplete="off" placeholder="请输入商品名称、订单号、客户名字、会员卡号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </div>
                </el-form>
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="ordernumbe" label="订单号">
                    </el-table-column>
                    <el-table-column prop="goodsname" label="商品名称">
                    </el-table-column>

                    <el-table-column prop="quantity" label="数量">
                    </el-table-column>
                    <el-table-column prop="sellprice" label="实际售价">
                    </el-table-column>
                    <el-table-column prop="sale" label="优惠(促销/会员)">
                    </el-table-column>
                    <el-table-column prop="refund" label="退款">
                    </el-table-column>
                    <el-table-column prop="salestime" label="销售时间">
                    </el-table-column>

                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>
 <script>
export default {
  data() {
    return {
      salelist: {
        starttime: "",
        endtime: "",
        serch: ""
      },
      tableData: [
        {
          ordernumbe: "021732782",
          goodsname: "海飞丝去屑洗发露",
          quantity: "34",
          sellprice: "46",
          sale: "2.00元/天",
          refund: "无退款",
          salestime: "2018-05-23"
        },
        {
          ordernumbe: "021723678",
          goodsname: "茅台酒",
          quantity: "675",
          sellprice: "46",
          sale: "60.00元/天",
          refund: "无退款",
          salestime: "2018-03-30"
        },
        {
          ordernumbe: "021745894",
          goodsname: "龙凤呈祥",
          quantity: "25",
          sellprice: "78",
          sale: "2.00元/天",
          refund: "18:00",
          salestime: "2018-11-17"
        },
        {
          ordernumbe: "021745894",
          goodsname: "冰红茶",
          quantity: "89",
          sellprice: "2.50",
          sale: "1.00元/天",
          refund: "无退款",
          salestime: "2018-05-23"
        },
        {
          ordernumbe: "021745894",
          goodsname: "旺仔牛奶",
          quantity: "89",
          sellprice: "2.50",
          sale: "1.00元/天",
          refund: "无退款",
          salestime: "2018-05-23"
        },
        
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
     handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  }
};
</script>
 <style lang="less">
.salelist {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background: #f1f1f1;
    }
    .el-card__body {
      .text {
        .el-form {
          .timewrapper {
            margin-left: -500px;
          }
          .inptwrapper {
            margin-left: -600px;
            .el-form-item {
              .el-form-item__content {
                .el-input {
                  width: 400px;
                }
              }
            }
          }
        }
        .el-table{
            margin-top: 0px;
            border-top: 2px solid #ccc
        }
        .el-pagination {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
 
 