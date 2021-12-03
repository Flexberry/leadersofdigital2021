
Для доступа к hdfs с пода необходимо добавить следующий параметр в hdfs-site.xml
```xml
    <property>
      <name>dfs.client.use.datanode.hostname</name>
      <value>true</value>
      <description>Whether clients should use datanode hostnames when
        connecting to datanodes.
      </description>
    </property>
```
Для поиска используется скрипт _app/reputasha.sh_ - осуществляет поиск по именам графических файлов и по содержимому текстовых файлов.
Текстовые файлы проверяются по на тональность текста, а изображения на наличие интимного содержания, для того чтобы отдельно выделить как объекты заслуживающие внимания.

На данный момент поиск выполняется не распределенным образом, локально на поде hadoop-cli, что сказывается на производительности.
Данный функционал выставлен через простейший веб-сервер см. _app/server.py_.

Для анализа тональности текста используется нейросеть dostoevsky (см. _textcolor.py_):
https://github.com/bureaucratic-labs/dostoevsky
Для поиска интимных фото использутся нейросеть NudeNet (см. _app/nudity.py_):
https://github.com/notAI-tech/NudeNet

```sh
./kubectl run hadoop-cli --image=docker pull rasputasha:latest --port 6600 --requests="cpu=1,memory=1G"
./kubectl expose pod hadoop-cli --port 6600 --type=NodePort
```