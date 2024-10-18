.DEFAULT_GOAL := dev

VERCEL_TOKEN := $(shell cat .vercel-token)
GIT_SHA := $(shell git rev-parse HEAD | cut -c 1-8)


dev:
	(cd src && yarn install --frozen-lockfile)
	(cd src && yarn run dev)

build:
	(cd src && yarn build)

lint:
	(cd src && yarn lint && yarn tsc)

fix:
	(cd src && yarn fix)

test:
	(cd src && yarn test)
