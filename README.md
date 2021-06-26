# README

This repo contains the [Metadot](www.metadot.com) website files. 
This repo contains git submodules.

## Setup environment

Clone this project then clone the submodules like this:

    git submodule init
    git submodule update

1. Install `hugo` at the moment [v0.68.1](https://gohugo.io/getting-started/installing/#debian-and-ubuntu)

2. Run `yarn` or `make update`

## Start development server

    make serve

Open browser point to URL indicated in the console.

## Build

    make build

This will compile the site to the `public` directory.

## Deploy

    make deploy

## Icons generator

This website created the several height images and the manifest.json
using this [site](https://realfavicongenerator.net/).

## Image compression

Every images must be compress to the webp compression format.
You can use this [website](https://ezgif.com/png-to-webp).
