<template>
  <div>
    <span>Repurchase record</span>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        v-for="item in tableCol"
        :key="item"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
      <!-- <el-table-column label="操作" v-if="showOper">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Repurchase record",
  data() {
    return {
      // showOper: true,
      tableData: [
        { amount: "5628.89 CHA", price: "$1.3678", date: "2021/5/26 12:01" },
        { amount: "5628.89 CHA", price: "$1.3678", date: "2021/5/26 12:01" },
        { amount: "5628.89 CHA", price: "$1.3678", date: "2021/5/26 12:01" },
      ],
      tableCol: [
        { prop: "amount", label: "销毁数量", width: "500px" },
        { prop: "price", label: "价格", width: "396px" },
        { prop: "date", label: "时间", width: "206px" },
      ],
    };
  },
  // methods: {
  //   handleEdit(index, row) {
  //     console.log(index, row);
  //   },
  //   handleDelete(index, row) {
  //     console.log(index, row);
  //   },
  // },
};
</script>