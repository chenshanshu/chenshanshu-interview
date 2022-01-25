<template>
  <div class="hello">
    <div class="tip__model">
      <img src="@/assets/scape.png" class="tip__picture" />
      <div class="tip__title">请在竖屏模式访问</div>
    </div>
    <div class="page__header">
      <img src="@/assets/bg.png" class="page__header_bg" />
    </div>
    <div class="content">
      <div v-for="(item, index) in imgs" :key="index" class="img__item">
        <img :src="item" alt="picture" class="img__item__picture" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imgs: [
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg')]
    }
  },
  methods: {
    getImgList() {
      this.$http.get({
        url: 'http://test.com/api/imgs'
      }).then(res => {
        let {data=[]} = res
        console.log(data)
      })
    },
  },
  created() {
    this.getImgList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background: #202529;
}
.tip__model {
  display: none;
}
.page__header {
  position: relative;
  .page__header_bg {
    display: block;
    width: 100%;
    height: auto;
  }
}
.content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4vw;
  .img__item__picture {
    display: block;
    width: 100%;
    height: auto;
  }
}
.img__item {
  box-sizing: border-box;
  padding: 50px;
  width: 33.33%;
}

@media screen and (max-width: 960px) {
}
@media screen and (max-width: 768px) {
  .page__header {
    display: none;
  }
  .img__item {
    padding: 50px;
    width: 50%;
  }
}
@media screen and (max-width: 550px) {
  .img__item {
    padding: 50px;
    width: 100%;
  }
}
@media screen and (orientation: landscape) and (max-width: 768px) {
  @keyframes mymove {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(90deg);
    }
  }
  .hello {
    .tip__model {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      color: #fff;
      .tip__picture {
        width: 30vw;
        height: auto;
        animation: mymove 1s ease infinite alternate;
      }
      .tip__title {
        margin-top: 30px;
        font-size: 20px;
      }
    }
  }
}
</style>
