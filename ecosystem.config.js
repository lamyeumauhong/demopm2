module.exports = {
  apps : [{
      name: 'app', // application name 
      script: 'app.js', // script path to pm2 start
      args: 'one two', // string containing all arguments passed via CLI to script
      instances: 1, // number process of application
      autorestart: true, //auto restart if app crashes
      watch: false,
      max_memory_restart: '1G', // restart if it exceeds the amount of memory specified
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
     
    // Deployment Configuration
    deploy : {
      production : {
         "user" : "lamyeumauhong",
         "host" : ["127.0.0.1"],
         ssh_options: [
          'ForwardAgent=yes',
      ],
         "ref"  : "origin/master",
         "repo" : "git@github.com:lamyeumauhong/demopm2.git",
         "path" : "/var/www/demopm2",
         "post-deploy": 'npm install && pm2 reload ecosystem.config.js --env production --interpreter powershell'

      }
    }
  };
  