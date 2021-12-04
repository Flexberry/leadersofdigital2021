
��� ������� � hdfs � ���� ���������� �������� ��������� �������� � hdfs-site.xml
```xml
    <property>
      <name>dfs.client.use.datanode.hostname</name>
      <value>true</value>
      <description>Whether clients should use datanode hostnames when
        connecting to datanodes.
      </description>
    </property>
```
��� ������ ������������ ������ _app/reputasha.sh_ - ������������ ����� �� ������ ����������� ������ � �� ����������� ��������� ������.
��������� ����� ����������� �� �� ����������� ������, � ����������� �� ������� ��������� ����������, ��� ���� ����� �������� �������� ��� ������� ������������� ��������.

�� ������ ������ ����� ����������� �� �������������� �������, �������� �� ���� hadoop-cli, ��� ����������� �� ������������������.
������ ���������� ��������� ����� ���������� ���-������ ��. _app/server.py_.

��� ������� ����������� ������ ������������ ��������� dostoevsky (��. _textcolor.py_):
https://github.com/bureaucratic-labs/dostoevsky
��� ������ �������� ���� ����������� ��������� NudeNet (��. _app/nudity.py_):
https://github.com/notAI-tech/NudeNet

```sh
./kubectl run hadoop-cli --image=docker pull rasputasha:latest --port 6600 --requests="cpu=1,memory=1G"
./kubectl expose pod hadoop-cli --port 6600 --type=NodePort
```