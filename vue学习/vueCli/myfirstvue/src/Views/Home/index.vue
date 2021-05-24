<template>
  <div class="home-container" v-loading='isLoading' ref="home" @wheel="handleWheel">
    <!-- <Loading v-if="isLoading" /> -->
    <ul
      class="msg-move-container"
      ref="msgBox"
      :style="{ marginTop: marginTop + 'px' }"
      @transitionend="handleTend"
    >
      <li
        v-for="item in banners"
        :key="item.id"
        :style="{ height: containerHeight + 'px' }"
      >
        <ShowMsgItem :imgMSg="item" />
      </li>
    </ul>
    <ul class="identar">
      <li
        v-for="(item, i) in banners"
        :class="{ 'identar-active': index === i }"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <div v-show="index > 0" class="icon-arrawUp" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon-arrawdown"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
  </div>
</template>

<script>
import { getBanner } from "../../api/banner";
import ShowMsgItem from "./ShowMsgItem";
import Icon from "../../components/Icon";
import fetchData from '@/mixins/fetchData'
export default {
  mixins:[fetchData([])],
  data() {
    return {
      // banners: [],
      index: 0,
      containerHeight: 0,
      swtching: false,
      // isLoading:true,
    };
  },
  components: {
    ShowMsgItem,
    Icon,
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight;
    },
  },
  methods: {
    handleWheel(e) {
      if (this.swtching) return;
      if (e.deltaY > 0 && this.index < this.banners.length - 1) {
        this.swtching = true;
        this.switchTo(this.index + 1);
      }
      if (e.deltaY < 0 && this.index > 0) {
        this.swtching = true;
        this.switchTo(this.index - 1);
      }
    },
    switchTo(i) {
      this.index = i;
    },
    handleTend() {
      this.swtching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.home.clientHeight;
    },
    async fetchData(){
      return await getBanner()
    }
  },
  // async created() {
  //   this.banners =  await getBanner();
  //   this.isLoading = false;
  // },

  mounted() {
    //直接操作dom就要在这个里面操作了
    this.containerHeight = this.$refs.home.clientHeight;
    //
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang='less' scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    transition: 1s;
    li {
      list-style: none;
    }
  }
  .icon-arrawUp,
  .icon-arrawdown {
    position: absolute;
    font-size: 30px;
    color: rgb(211, 201, 201);
    left: 50%;
    transform: translateX(-50%);
  }
  @arrP: 25px;
  .icon-arrawUp {
    top: @arrP;
    animation: arrawup 2s linear infinite;
  }
  .icon-arrawdown {
    bottom: @arrP;
    animation: arrawdown 2s linear infinite;
  }
  @detay: 15px;
  @keyframes arrawdown {
    0% {
      bottom: @arrP;
    }
    50% {
      bottom: @arrP - @detay;
    }
    100% {
      bottom: @arrP;
    }
  }
  @keyframes arrawup {
    0% {
      top: @arrP;
    }
    50% {
      top: @arrP - @detay;
    }
    100% {
      top: @arrP;
    }
  }
  .identar {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin: 3px;
    }
    .identar-active {
      background: lightgreen;
    }
  }
  .msg-move-container {
    li {
      width: 100%;
      height: 100%;
    }
  }
}
</style>