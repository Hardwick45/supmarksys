<template>
    <div class="login">
        <div class="text">
            <i class="el-icon-menu"></i>
            华联超市管理系统登录
        </div>
        <div class="login-wrapper">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPwd">
                    <el-input type="password" v-model="loginForm.checkPwd" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>

            </el-form>
        </div>
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
      } else if (value !== this.loginForm.password) {
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
        if (this.loginForm.checkPwd !== "") {
          this.$refs.loginForm.validateField("checkPwd");
        }
        callback();
      }
    };
    return {
      loginForm: {
        password: "",
        checkPwd: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [{ required: true, validator: pass, trigger: "blur" }],
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("验证通过");
          let params = {
            username: this.loginForm.username,
            password: this.loginForm.password
          };
          this.$router.push("/");
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

      .login {
        width: 100%;
        height: 100%;
        background: #2d3a4b;
        .text {
          font-size: 26px;
          color: #ccc;
          text-align: center;
          position: fixed;
          top: 160px;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }
        .login-wrapper {
          width: 500px;
          height: 300px;
          background: rgba(0, 0, 0, 0.2);
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
          border-radius: 9px;
          .el-form {
            .el-form-item {
              margin-top: 30px;
              margin-left: -10px;
              .el-form-item__label {
                color: #ccc;
              }
              .el-input {
                width: 370px;
              }
            }
          }
        }
      }

</style>
