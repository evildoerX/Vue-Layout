<template>
    <Row class="app-topbar">
        <Col span="24">
            <Menu mode="horizontal" theme="primary" active-name="0">
                <MenuItem name="1">
                    <Icon type="ios-paper"></Icon>
                    iLayout
                </MenuItem>
            </Menu>
        </Col>
    </Row>
</div>

</template>
<script>
    export default {

    }
</script>
<style scoped>
    .app-topbar {
      position: fixed;
      top: 0px;
      bottom: 0px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      z-index: 999
    }
</style>
