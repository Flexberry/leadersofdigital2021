docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bratchikov/metaverse-postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t bratchikov/metaverse-app ../..
