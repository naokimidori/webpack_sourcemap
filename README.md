> 参考资料
https://segmentfault.com/a/1190000008315937
http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html



# 所有的sourcemap
https://webpack.docschina.org/configuration/devtool/#root

- eval： 生成代码 每个模块都被eval执行，并且存在@sourceURL
- cheap-eval-source-map： 转换代码（行内） 每个模块被eval执行，并且sourcemap作为eval的一个dataurl

- cheap-module-eval-source-map： 原始代码（只有行内） 同样道理，但是更高的质量和更低的性能

- eval-source-map： 原始代码 同样道理，但是最高的质量和最低的性能

- cheap-source-map： 转换代码（行内） 生成的sourcemap没有列映射，从loaders生成的sourcemap没有被使用

- cheap-module-source-map： 原始代码（只有行内） 与上面一样除了每行特点的从loader中进行映射

- source-map： 原始代码 最好的sourcemap质量有完整的结果，但是会很慢

# 关键字
- eval： 使用eval包裹模块代码
- source-map： 产生.map文件
- cheap： 不包含列信息sourcemap
- module： 能得到Loader处理之前的源代码
- inline： 将.map作为DataURI嵌入，不单独生成.map文件（比较少见）

# 个人选择
## 开发环境
- cheap-module-eval-source-map
- 理由：
  - 个人代码风格，每行不超过80个字符，所以列信息不重要
  - 个人代码经过loader转换的差异较大，使用框架很多，所以需要module
  - 这种模式首次打包会慢一些，但项目用的devServer，重写打包较快

## 生产环境
- none
- 理由：
  - 不会暴露源代码


- nosources-source-map
- 理由：
  - 只会展示错误对应的位置，不会暴露源代码
