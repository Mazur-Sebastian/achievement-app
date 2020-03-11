dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
prod-dockerfile := -f docker-compose.yml

build-dev:
	docker-compose $(dev-dockerfile) build

dev:
	docker-compose $(dev-dockerfile) up

generate-documentation:
	docker exec -it backend-achievement yarn run documentation