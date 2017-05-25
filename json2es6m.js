var
  fs= require( "mz/fs"),
  mrwf= require( "main-routine-with-files")

async function runFile( filename){
	var
	  start= 0,
	  end= filename.length
	if( !this|| !this.minimist|| !(this.minimist.fullpath|| this.minimist.p)){
		start= input.filename.lastIndexOf( "/")+ 1
	}
	if( this&& this.suffix&& filename.endsWith( this.suffix)){
		end-= this.suffix.length
	}
	var
	  outFilename= filename.substring( start, end),
	  write= data=> fs.write( outFilename+ ".js", "export default "+ data)
	return fs.readFile( filename, {encoding: "utf8"})
		.then( write)
}

async function main(opts){
	opts= opts|| {}
	opts.runFile= opts.runFile|| runFile.bind( opts)
	opts.defaultGlob= opts.defaultGlob|| "*.json"
	return mrwf( opts)
}

if( require.main=== module){
	main()
}
