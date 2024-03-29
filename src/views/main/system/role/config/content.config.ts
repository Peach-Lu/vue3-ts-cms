export const contentTableConfig = {
  title: '权限列表',
  showSelectColumn: true,
  showIndexColumn: true,
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { prop: '', label: '操作', minWidth: '200', slotName: 'handler' }
  ]
}
