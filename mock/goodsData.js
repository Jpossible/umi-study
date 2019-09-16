let data = [
  {title:'vue',id:1001},
  {title:'react',id:1002}
]

export default {
  "get /api/goods": function (req,res) {
    setTimeout(() => {
      res.json({
        res:data
      })
    },2000)
  }
}
