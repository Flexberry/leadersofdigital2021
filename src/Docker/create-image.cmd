docker build --no-cache -f SQL\Dockerfile.PostgreSql -t metaverse/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t metaverse/app ../..
