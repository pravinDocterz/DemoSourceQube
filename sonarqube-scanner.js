const scanner=require("sonarqube-scanner");
scanner(
	{
		serverUrl: "http://localhost:9000",
		login: "admin",
		password: "Admin",
		token: "sqp_7e825d66cbbef7ab55d83b9f9b581c07109be164",
		options: {
			"sonar.sources": "./src",
		},
	},
	() => process.exit()
);