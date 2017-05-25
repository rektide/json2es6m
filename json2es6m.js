#!/usr/bin/env node
"use strict"

var
  fs= require( "mz/fs"),
  mrwf= require( "main-routine-with-files")

async function runFile( filename){
	var
	  start= 0,
	  end= filename.length
	if( !this|| !this.minimist|| !(this.minimist.fullpath|| this.minimist.p)){
		start= filename.lastIndexOf( "/")+ 1
	}
	if( this&& this.suffix&& filename.endsWith( this.suffix)){
		end-= this.suffix.length
	}
	var
	  outFilename= filename.substring( start, end)+ ".js",
	  write= data=> fs.writeFile( outFilename, "export default "+ data)
	return fs.readFile( filename, {encoding: "utf8"})
		.then( write)
}

async function main(opts){
	process.on( "unhandledRejection", console.error)

	opts= opts|| {}
	opts.runFile= opts.runFile|| runFile.bind( opts)
	opts.defaultGlob= opts.defaultGlob|| "*.json"
	opts.suffix= opts.suffix|| ".json"
	return mrwf( opts)
}

if( require.main=== module){
	main()
}
