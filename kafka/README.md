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

```bash
GROUP           TOPIC                PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID                                      HOST            CLIENT-ID
order           order_withdraw_topic 0          0               0               0               consumer-2-ddc5724b-f874-4564-9a72-e615e5028758  /172.17.0.1     consumer-2
order           order_paid_topic     0          0               0               0               consumer-20-7a328724-ff2c-417d-904e-3bbd0277936f /172.17.0.1     consumer-20
order           order_invoice_topic  0          0               0               0               consumer-10-90f0a4b0-7146-47ad-8cd1-e492512de542 /172.17.0.1     consumer-10
order           user_order_used_end  0          0               0               0               consumer-14-cec4a31a-655b-4af7-91d8-b57bd392d2b6 /172.17.0.1     consumer-14
```