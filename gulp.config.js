module.exports = function(){
	var clientPath = './src/client/';
	var config = {

		'temp': './.tmp2',

		// File Path
		'alljs': [
			'./src/**/*.js',
			'./*.js'
		],
		'less': clientPath + 'styles/styles.less',
		'sass': './test.scss'
	
	};
	return config;
};