<template>
    <div class="account-add">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加账号</span>

            </div>
            <div class="text item">
                <el-form :model="accountAddForm" status-icon :rules="rules" ref="accountAddForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="accountAddForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="accountAddForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPwd">
                        <el-input type="password" v-model="accountAddForm.checkPwd" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="选择用户组" prop="userGroup">
                        <el-select v-model="accountAddForm.userGroup" placeholder="请选择用户组">
                            <el-option label="普通用户" value="普通用户"></el-option>
                            <el-option label="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('accountAddForm')">添加</el-button>
                        <el-button @click="resetForm('accountAddForm')">重置</el-button>
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
      } else if (value !== this.accountAddForm.password) {
        callback(new Error("两次输入密码不一致"));
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
        if (this.accountAddForm.checkPwd !== "") {
          this.$refs.accountAddForm.validateField("checkPwd");
        }
        callback();
      }
    };
    return {
      accountAddForm: {
        username: "",
        password: "",
        checkPwd: "",
        userGroup: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [{ required: true, validator: pass, trigger: "blur" }],
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }],
        userGroup:[{ required: true, message: "请选择用户组", trigger: "changge"}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("验证通过");
          let params = {
            username: this.accountAddForm.username,
            password: this.accountAddForm.password,
            userGroup: this.accountAddForm.userGroup
          };
        //   console.log(params)
        this.$router.push('/accountmanagement')
        } else {
          alert("验证失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.account-add {
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
}
</style>
