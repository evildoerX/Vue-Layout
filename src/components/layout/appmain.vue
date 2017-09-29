<template>
    <Row class="container">
        <topbar></topbar>
        <sidebar class="sidebar"></sidebar>
        <Col :span="24" class="main">
          <div class="content-container">
              <Col :span="24">
                  <transition>
                      <router-view></router-view>
                  </transition>
              </Col>
          </div>
        </Col>
    </Row>
</template>

<script>
import topbar from './topbar'
import sidebar from './sidebar'
export default {
    components: {
        topbar,
        sidebar
    }

}
</script>

<style scoped>
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
}

.sidebar {
    z-index: 1000;
}

.main {
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
}

.content-container {
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 80px;
    overflow-y: scroll;
}
</style>
