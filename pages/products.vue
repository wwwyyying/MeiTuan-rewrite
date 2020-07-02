<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 10:15:46
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 21:44:51
--> 
<template>
  <div class="page-product">
    <el-row>
      <el-col :span="19">
        <crumbs :keyword="keyword" />
        <category :types="types" :areas="areas" />
        <list :list="list" @changeMap="changeMap" />
      </el-col>
      <el-col :span="5">
        <amap v-if="point.length" :width="230" :height="290" :point="point" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/products/crumbs'
import Category from '@/components/products/catego'
import List from '@/components/products/list'
import Amap from '@/components/public/map'
export default {
  data () {
    return {
      keyword: "",
      types: [],
      areas: [],
      list: [],
      point: []
    }
  },
  components: {
    Crumbs,
    Category,
    List,
    Amap
  },
  methods: {
    changeMap (position) {
      this.point = position
    }
  },
  
  // 用SSR的方法拿到数据
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;
    let city = ctx.store.state.geo.position.city;
    console.log(keyword, city)
    let {
      status,
      data: { count, pois }
    } = await ctx.$axios.get("/search/resultsByKeywords", {
      params: {
        keyword,
        city
      }
    });

    // 另一个接口获取
    let {
      status: status2,
      data: { areas, types }
    } = await ctx.$axios.get("/category/crumbs", {
      params: {
        city
      }
    });
    if (status === 200 && count > 0 && status2 === 200) {
      return {
        // 产品数据过滤（没有图片的产品过滤掉）, 再做映射(把后端的数据做出来变成我们前端想要的数据结构)
        list: pois
          .filter(item => item.photos.length)
          .map(item => {
            return {
              type: item.type,
              img: item.photos[0].url,
              name: item.name,
              comment: Math.floor(Math.random() * 10000),
              rate: Number(item.biz_ext.rating),
              price: Number(item.biz_ext.cost),
              scene: item.tag,
              tel: item.tel,
              status: "可订明日",
              location: item.location,
              module: item.type.split(";")[0]
            };
          }),
        keyword,
        // 只取前五个
        // areas,
        // types,
        areas: areas.filter(item => item.type !== "").slice(0, 5),
        types: types.filter(item => item.type !== "").slice(0, 5),
        // 经纬度
        point: (pois.find(item => item.location).location || "").split(",")
      };
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/products/index.scss";
</style>