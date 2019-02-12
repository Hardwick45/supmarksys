<template>
   <div class="change-password">
       <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>修改账号密码</span>

            </div>
            <div class="text item">
                <el-form :model="changepwd" status-icon :rules="rules" ref="changepwd" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="原密码" prop="oldpwd">
                        <el-input type="password" v-model="changepwd.oldpwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newpassword">
                        <el-input type="password" v-model="changepwd.newpassword" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="checkPwd">
                        <el-input type="password" v-model="changepwd.checkPwd" autocomplete="off"></el-input>
                    </el-form-item>

                   
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('changepwd')">修改</el-button>
                        <el-button @click="resetForm('changepwd')">重置</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-card>
   </div>
</template>
<script>
export default {
     data() {
    const checkSpecificKey = str => {
      var specifickey =
        "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
      for (var i = 0; i < str.length; i++) {
        if (specifickey.indexOf(str.substr(i, 1)) != -1) {
          return false;
        }
      }
      return true;
    };
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changepwd.newpassword) {
        callback(new Error("两次密码输入不一致"));
      }
      callback();
    };
    const pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 6) {
        callback(new Error("请输入3 - 6 位"));
      } else if (!checkSpecificKey(value)) {
        callback(new Error("密码不能包含特殊字符"));
      } else {
        if (this.changepwd.checkPwd !== "") {
          this.$refs.changepwd.validateField("checkPwd");
        }
        callback();
      }
    };
    return {
      changepwd: {
        oldpwd: "",
       newpassword: "",
        checkPwd: "",
  
      },
      rules: {
        oldpwd: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        newpassword: [{ required: true, validator: pass, trigger: "blur" }],
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }],
      
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("修改账号密码成功");
          let params = {
            newpassword: this.changepwd.newpassword,
            
          
          };
        //   console.log(params)
     
        } else {
          alert("修改密码失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="less">
.el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background: #f1f1f1;
    }
    .el-card__body {
      .el-form {
        width: 300px;
        .el-form-item {
          height: 40px;
          line-height: 40px;
          .el-form-item__lable {
            height: 40px;
            line-height: 40px;
          }
          .el-form-item__content {
            .el-input {
              height:40px;
              line-height: 40px;
              .el-select__caret {
                height: 40px;
                line-height: 40px;
              }
              .el-input__inner {
                height: 40px;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
