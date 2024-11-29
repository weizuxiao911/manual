# Kafka

## 消费

```bash
cd bin/
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning
```

## 生产

```bash
cd bin/
kafka-console-producer.sh --broker-list localhost:9092 --topic test-topic

kafka-console-producer.sh --broker-list localhost:9092 --topic order_paid_topic
```

## 消费者
```bash
kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list

kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group order --describe

```