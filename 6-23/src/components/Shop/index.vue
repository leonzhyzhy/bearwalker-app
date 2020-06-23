<template>
  <div class="shop-page">
      <div class="w1200">
        <div>
          <div class="zt">店铺<span>-</span> 馆藏</div>
          <div class="shop-t">
              <a>我们的店铺</a>
              <p>购买我们全系列的木板，卡车，车轮和配件。</p>
          </div>
      </div>
      <div class="goods-l">
          <p class="title">{{shoes[0].goods_class}}</p>
          <ul>
              <li class="container" :key="index" v-for="(item, index) in shoes">
                    <router-link to="/parts">
                      <div class="view view-first" @click="getGoodsInfo(index)">
                        <img  class="Change" :src="'http://192.168.85.236:3007/'+item.img_url"/>
                      </div>
                    </router-link>
                    <div class="text-c">
                      <p class="name">{{item.goods_title}}</p>
                      <div class="text">{{item.goods_desc}}</div>
                      <div class="price">{{item.goods_price}}</div>
                    </div>
              </li>
          </ul>
      </div>
      <div class="goods-l">
          <p class="title">{{costume[0].goods_class}}</p>
          <ul>
              <li class="container" :key="index" v-for="(item, index) in costume">
                    <router-link to="/parts">
                      <div class="view view-first" @click="getGoodsInfo(index)">
                        <img  class="Change" :src="'http://192.168.85.236:3007/'+item.img_url"/>
                      </div></router-link>
                    <div class="text-c">
                      <p class="name">{{item.goods_title}}</p>
                      <div class="text">{{item.goods_desc}}</div>
                      <div class="price">{{item.goods_price}}</div>
                    </div>
              </li>
          </ul>
      </div>
      <div class="goods-l">
          <p class="title">{{balanceBoard[0].goods_class}}</p>
          <ul>
              <li class="container" :key="index" v-for="(item, index) in balanceBoard">
                    <router-link to="/parts">
                      <div class="view view-first" @click="getGoodsInfo(index)">
                        <img  class="Change" :src="'http://192.168.85.236:3007/' + item.img_url"/>
                      </div>
                    </router-link>
                    <div class="text-c">
                      <p class="name">{{item.goods_title}}</p>
                      <div class="text">{{item.goods_desc}}</div>
                      <div class="price">{{item.goods_price}}</div>
                    </div>
              </li>
          </ul>
      </div>
      <div class="goods-l">
          <p class="title">{{limitedEdition[1].goods_class}}</p>
          <ul>
              <li class="container" :key="index" v-for="(item, index) in limitedEdition">
                    <router-link to="/parts">
                      <div class="view view-first" @click="getGoodsInfo(index)">
                        <img  class="Change" :src="'http://192.168.85.236:3007/' + item.img_url"/>
                      </div>
                    </router-link>
                    <div class="text-c">
                      <p class="name">{{item.goods_title}}</p>
                      <div class="text">{{item.goods_desc}}</div>
                      <div class="price">{{item.goods_price}}</div>
                    </div>
              </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
// import { getClass1, getClass2, getClass3, getClass4 } from '../../Axios/axiosRequest'
import { SetGoodsInfo } from '../../Axios/axiosRequest'
export default {
  data () {
    return {
      index: '0'
    }
  },
  computed: {
    limitedEdition () {
      return this.$store.state.shop.limitedList
    },
    costume () {
      return this.$store.state.shop.clothList
    },
    shoes () {
      return this.$store.state.shop.shoesList
    },
    balanceBoard () {
      return this.$store.state.shop.balanceList
    }
  },
  created () {
    this.$store.dispatch('getLimitedList')
    this.$store.dispatch('getClothList')
    this.$store.dispatch('getShoesList')
    this.$store.dispatch('getBalanceList')
  },
  methods: {
    getGoodsInfo (index) {
      var data = {
        id: this.limitedEdition[index].img_id || this.shoes[index].img_id || this.costume[index].img_id || this.balanceBoard[index].img_id
      }
      SetGoodsInfo(data, () => {
        console.log(1111)
      }, () => {
        console.log(222)
      })
      console.log(this.limitedEdition[index].img_id)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/static/common/style.less';
  .shop-page {
      margin: 146px 0 45px 0;
      padding-top: 200px
  }
  .zt {
    .fz(16px);
    span {
      margin: 0 15px;
    };
    margin-bottom: 20px;
      };
  .shop-t {
     padding-top: 80px;
     a {
         .fz(52px);
         font-weight: bold;
     };
     p {
         .fz(18px);
         margin-top: 20px;
     }
  };
  .goods-l {
      margin-top: 80px;
     .title{
          .fz(34px);
          font-weight: bold;
          padding-bottom: 20px;
      }
  }
  ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
  li {
     .Change{
          width: 393px;
          height: 556px;
     }
      .text-c .text{
            .fz(14px);
            width: 390px;
            height: 19px;
            color: #928c8c;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
      }
      .name {
          .fz(22px);
          margin: 15px 0;
          font-weight: bold;
      }
      .price {
          .fz(35px);
          font-weight: bolder;
          font-family: "SFProDisplay-Black",sans-serif;
          margin: 50px 0;
      }
  }
  .goods-l .view:hover {
         cursor: pointer;
         box-shadow: -3px 6px 7px rgb(139, 139, 139);
  }
  .goods-l .container .text-c .name:hover{
        color: rgb(97, 120, 253);
  }
 .text-c .name{
   margin-top: 580px;
  }
  // goods.css
  .view-first .Change {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    transition: all 0.2s linear;
 }
 .view-first:hover .Change {
    -webkit-transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
    transform: scale(1.1,1.1);
 }
 .view {
    width: 393px;
    height: 556px;
    display:inline;
    overflow: hidden;
    float: left;
    position: relative;
    text-align: center;
    -webkit-box-shadow: 1px 1px 2px #e6e6e6;
    -moz-box-shadow: 1px 1px 2px #e6e6e6;
    box-shadow: 1px 1px 2px #e6e6e6;
    cursor: default;
    // background: #fff url(../images/bgimg.jpg) no-repeat center center;
 }
 .view .Change {
    display: block;
    position: relative;
 }
</style>
