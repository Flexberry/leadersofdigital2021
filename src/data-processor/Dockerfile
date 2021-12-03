FROM ubuntu:jammy
RUN apt update && apt install python3-pip wget openjdk-8-jdk
ENV HADOOP_VER=hadoop-3.3.1
RUN wget https://dlcdn.apache.org/hadoop/common/${HADOOP_VER}/${HADOOP_VER}.tar.gz && tar xzf ${HADOOP_VER}.tar.gz && rm ${HADOOP_VER}.tar.gz
ENV HADOOP_HOME=/${HADOOP_VER} \
     HADOOP_INSTALL=/${HADOOP_VER} \
     HADOOP_MAPRED_HOME=/${HADOOP_VER} \
     HADOOP_COMMON_HOME=/${HADOOP_VER} \
     HADOOP_HDFS_HOME=/${HADOOP_VER} \
     YARN_HOME=/${HADOOP_VER} \
     HADOOP_COMMON_LIB_NATIVE_DIR=/${HADOOP_VER}/lib/native \
     PATH=${PATH}:/${HADOOP_VER}/sbin:/${HADOOP_VER}/bin \
     HADOOP_OPTS="-Djava.library.path=/${HADOOP_VER}/bin/lib/nativ" \
     HADOOP_USER_NAME=team15 \
     JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
ADD conf/* /${HADOOP_VER}/etc/hadoop
RUN pip3 install nudenet dostoevsky falcon gunicorn
RUN python3 -m dostoevsky download fasttext-social-network-model
ADD app /
WORKDIR /app
CMD gunicorn server:api