<template>
    <div class="app-sidebar">
        <Menu active-name="1" theme="dark" width="auto">
            <div class="layout-logo-left"></div>
            <MenuItem name="1">
                <Tooltip content="基础组件" placement="right">
                    <Icon type="ios-navigate" size="30"></Icon>
                </Tooltip>
            </MenuItem>
            <MenuItem name="2">
                <Tooltip content="基础组件" placement="right">
                    <Icon type="ios-keypad" size="30"></Icon>
                </Tooltip>
            </MenuItem>
            <MenuItem name="3">
                <Tooltip content="基础组件" placement="right">
                    <Icon type="ios-analytics" size="30"></Icon>
                </Tooltip>
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
    export default {

   }
</script>

<style scoped>
  .app-sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 80px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    background: #324157;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .app-sidebar_app {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .app-sidebar_app_content {
    display: flex;
    align-items: flex-end;
  }

  .app-sidebar_app_logo {
    width: 70px;
    height: 70px;
  }

  .app-sidebar_app_logo_img {
    border-radius: 50%;
    width: 60px;
    transition: .2s ease;
  }

  .app-sidebar_app_logo_img:hover {
    width: 65px;
  }

  .app-sidebar_app_title {
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #fff;
  }

  .app-sidebar_app_title_name {
    margin-right: 10px;
  }

  .app-sidebar_app_title_setting {
    border-bottom: 1px #fff solid;
  }

  .app-sidebar_app_logo_jt {
    color: #fff;
    transform: rotate(-45deg);
    --webkit-transform: rotate(-45deg);
  }

  .ivu-tabs {
    color: #fff;
  }

</style>
