export const enum ShapeFlags {
  ELEMENT = 1, // 普通的HTML元素
  FUNCTIONAL_COMPONENT = 1 << 1, // 函数式组件
  STATEFUL_COMPONENT = 1 << 2, // 有状态的组件
  TEXT_CHILDREN = 1 << 3, // 有文本子节点
  ARRAY_CHILDREN = 1 << 4, // 有数组形式的子节点
  SLOTS_CHILDREN = 1 << 5, // 有插槽形式的子节点
  TELEPORT = 1 << 6, // TELEPORT组件
  SUSPENSE = 1 << 7, // SUSPENSE 组件
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, //
  COMPONENT_KEPT_ALIVE = 1 << 9, // 可保持活跃状态
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
