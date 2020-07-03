<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 13:29:52
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 22:03:26
--> 
<template>
  <div class="m-products-list">
    <dl>
      <dd v-for="item in nav" :key="item.name" :class="[item.name, item.active?'s-nav-active':'']" @click="navSelect">
        {{item.txt}}
      </dd>
    </dl>
    <ul>
      <item v-for="(item, idx) in newList" :key="idx" :meta="item" @curTarget="curTarget"/>
    </ul>
  </div>
</template>

<script>
import Item from './product.vue'
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        }, {
          name: 's-price',
          txt: '价格最低',
          active: false
        }, {
          name: 's-visit',
          txt: '人气最高',
          active: false
        }, {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ],
      newList: []
    }
  },
  async asyncData ({app}) {
    let {data} = await app.$axios.get('searchList')
    return {items: data.list}
  },
  created () {
    this.newList = this.list
  },
  methods: {
    navSelect (e) {
      this.newList = this.list.slice()

      switch (e.target.className) {
        case 's-price':
          this.newList.sort(function(a, b) {
            return a.price - b.price
          })
          break
        case 's-visit':
          this.newList.sort(function(a, b) {
            return b.comment - a.comment
          })
          break
        case 's-comment':
          this.newList.sort(function(a, b) {
            return b.rate - a.rate
          })
          break
      }
    },
    curTarget (name) {
      // console.log(name)
      let position
      this.newList.forEach(item => {
        // console.log(item.name, name)
        if (item.name === name) {
          // console.log(item.location)
          position = (item.location || "").split(",")
        }
      })
      // console.log(name, position)
      this.$emit('changeMap', position)
    }
  }
}
</script>

<style>

</style>