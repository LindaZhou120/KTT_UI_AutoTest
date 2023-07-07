// 引入依赖库
const fs = require('fs')
const csv = require('csv-parser')


// 定义一个函数来读取CSV文件
function readCsvFile(filePath) {
  return new Promise((resolve, reject) => {
    const results = []

    // 使用csv-parser库来解析CSV文件
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error))
  })
}

// 调用readCsvFile函数来读取CSV文件
(async () => {
  const data = await readCsvFile('data.csv')

  // 将CSV文件中的数据转换为键值对
  const keyValuePairs = data.reduce((result, item) => {
    result[item.key] = item.value
    return result
  }, {})

  console.log(keyValuePairs)
})().catch((e) => console.error(e))
