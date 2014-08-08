//Configure RequireJS
requirejs.config({
	baseUrl: "assets/js",
	paths: {
		// libraries path
		jquery: [
			'http://code.jquery.com/jquery-1.11.0.min',
			//If the CDN location fails, load from this location
			'lib/jquery-1.11.0.min'
		],
		greensock:  [
			'http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min',
			//If the CDN location fails, load from this location
			'lib/TweenMax.min'
		]
	}
})