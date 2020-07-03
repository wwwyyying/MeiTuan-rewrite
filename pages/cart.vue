<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 16:09:27
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 16:23:12
--> 
<template>
  <div class="page-cart">
    <el-row>
      <el-col :span="24" class="m-cart" v-if="cart.length">
        <list :cart-data="cart" />
        <p>应付金额：
          <em class="money">￥{{total}}</em>
        </p>
        <div class="post">
          <el-button type="primary" @click="submit">提交订单</el-button>
        </div>
      </el-col>
      <cl-col class="empty" v-else>购物车为空</cl-col>
    </el-row>
  </div>
</template>

<script>
import List from '@/components/cart/cartList'
export default {
  components: {
    List
  },
  data () {
    return {
      cart:[],
      checkname: []
    }
  },
  computed: {
    total () {
      let total = 0
      this.cart.forEach(item => {
        total += item.price * item.count
      })
      return total
    }
  },
  methods: {
    async submit () {
      let {status, data: {code, id}} = await this.$axios.post("/order/createOrder", {
        count: this.cart[0].count,
        price: this.cart[0].price,
        id: this.cartNo
      })

      if (status===200 && code===0) {
        this.$alert(`恭喜您，已成功下单，订单号：${id}`, "下单成功", {
          confirmButtonText: "确定",
          callback: action => {
            location.href = '/order'
          }
        })
      }
    },

    async asyncData (ctx) {
      let {status, data: {code, data: {name, price}}} = await ctx.$axios.post('/cart/getCart', {
        params: {
          id: ctx.query.id
        }
      })

      if (status===200&&code===0&&name) {
        return {
          cart: [{
            name,
            price,
            count: 1
          }],
          cartNo: ctx.query.id
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss";
.mycar {
  .wrapper {
    height: 100px;
    line-height: 100px;
    border: solid 1px black;
    margin-top: 10px;

    img {
      vertical-align: middle;
      margin: 0 20px;
    }
    sapn {
      vertical-align: middle;
    }
    .count {
      margin-left: 200px;
    }
    .Allprice {
      margin-left: 300px;
    }
  }
}
</style>