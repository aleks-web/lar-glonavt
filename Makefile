SHELL = /bin/bash
DC_RUN_ARGS = --rm --user "$(shell id -u):$(shell id -g)"
COMPOSE_TIMEOUT = 3000
.PHONY : help app-shell db-shell up up-build build down rebuild cleanup restart restart-quiet mysqlcheck pull patch
.DEFAULT_GOAL : help
#include .env
export

# This will output the help for each task. thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Show this help
	@printf "\033[33m%s:\033[0m\n" 'Available commands'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[32m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

lar-shell: ## Start shell into app container
	UNAME=$(shell whoami) docker-compose run $(DC_RUN_ARGS) lar sh

up: ## Start containers
	COMPOSE_HTTP_TIMEOUT=$(COMPOSE_TIMEOUT) UNAME=$(shell whoami) docker-compose up --detach --remove-orphans lar_nginx lar

down: ## Down containers
	UNAME=$(shell whoami) docker-compose down --remove-orphans