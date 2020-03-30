docker build -t SuncoastOverflow-image .

docker tag SuncoastOverflow-image registry.heroku.com/SuncoastOverflow/web


docker push registry.heroku.com/SuncoastOverflow/web

heroku container:release web -a SuncoastOverflow