const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#00AB55',
							'@link-color' : '#637381',
							'@layout-header-background' : '#ffffff',
							'@font-family': '\'Roboto\', sans-serif',
							'@border-radius-base': '8px',

						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};