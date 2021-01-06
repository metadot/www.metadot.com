#display every possibilities for this Makefile
usage:
	echo "usage: make [update|clean|build|serve]"

#clean up the project previous build on the project
clean:
	rm -rf ./public

#create a new build without the Draft of the project (this repo is the one deployed on the web)
build: clean
	hugo --minify

#create a web server with the web site with the Drafted files
serve: clean
	hugo -D serve

#import the changes from remote and install the dependencies
update:
	git pull
	yarn

#launch the deployement process, after updating and building the project
deploy: update build
		cp ./misc/.htaccess ./public
		../www.deploy/website_handler_chewbacca.sh -d ./public
		@echo
		@echo "Remember to git push..."
		@echo
