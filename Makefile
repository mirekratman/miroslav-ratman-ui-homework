.DEFAULT_GOAL := dev

VERCEL_TOKEN := $(shell cat .vercel-token)

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

deploy:
	(cd src && yarn build)
	(vercel --token $(VERCEL_TOKEN) --prod)