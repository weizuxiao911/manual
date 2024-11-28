### 创建实验室索引
PUT /index_name
Content-Type: application/json

{
  "settings": {
    "number_of_shards": 1, // 分片，按实际使用情况设置
    "number_of_replicas": 1 // 副本，按实际使用情况设置
  }
}

### 定义实验室映射
PUT /index_name/_mapping
Content-Type: application/json

{
  "properties": {
    "field1": { "type": "text" },
    "field2": { "type": "keyword" },
    "field3": { "type": "date" }
  }
}

### 添加
POST /index_name/_doc
Content-Type: application/json 

{
  "field1": "value1",
  "field2": "value2",
  "field3": "2024-01-01"
}

PUT /index_name/_doc/1
Content-Type: application/json 

{
  "field1": "value1",
  "field2": "value2",
  "field3": "2024-01-01"
}

### 批量添加
POST /index_name/_bulk
Content-Type: application/json 

{ "index" : { "_id" : "1" } }
{ "field1" : "value1", "field2" : "value2", "field3" : "2024-01-01" }
{ "index" : { "_id" : "2" } }
{ "field1" : "value3", "field2" : "value4", "field3" : "2024-01-02" }

### 更新
POST /index_name/_update/1
Content-Type: application/json 

{
  "doc": {
    "field1": "new_value1"
  }
}

### 获取
GET /index_name/_doc/1
Content-Type: application/json 