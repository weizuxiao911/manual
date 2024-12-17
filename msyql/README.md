
```bash

docker run -itd \
  --name=mysql \
  --restart=always \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD='P@ssw0rd' \
  -v /opt/mysql/data:/var/lib/mysql \
  mysql:5.7

```

```sql
-- CREATE USER 'root'@'%' IDENTIFIED BY 'P@ssw0rd';
-- ALTER USER 'root'@'%' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

```