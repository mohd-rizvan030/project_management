# README
The Project 'project_management' is devided into two components
  ==> Backend(Ruby+Rails)
  ==>Frontend(Angular4)
      => Ruby(2.3.3)
      =>Rails(5.1.3)
      =>(Angular4)
<!-- Steps for backend setup -->
1. Clone/Copy the project Repo(project_management) on your machine.
  $git clone
2. Install postgres database  
	i) Install Potgres database (https://www.postgresql.org/download/linux/ubuntu/)
	ii) Create a user/role in databse and give this user permissions(create, edit delete, admin etc)

3. Backend Rails Server Setup:
 i) Go to project_management/backend
 ii) Install rvm(ruby version manager) if you do not have one
 		$\curl -sSL https://get.rvm.io | bash  (follow https://rvm.io/rvm/install)

 iv) Install ruby 2.3.3 using rvm
 			$rvm install 2.3.3

 v) Go to project_management/backend/config
 vi) Change the database.yml details as per your postgres(username and password) configuration

 vii) Go to project_management/backend
		a)Run bundle install(This command will install all required gems)
			$bundle install

	x) Run the following commands to setup the databse:
		$bundle exec rake db:create (First Time only)
		$bundle exec rake db:migrate
		$bundle exec rake db:seed  (it creates admin user and some test members), Please check 'backend/db/seed.rb' for more details

	xi)Run rails server on port 3000
		$bundle exec rails s
		The above command will run the rails server in development mode on 3000

Frontend Setup:
	Go to project_management/frontend

	i) Install nvm(Node version manager)
	ii) Install Node v6.10.3 using nvm
		$nvm install v6.10.3
	The above command will install node (version v6.10.3), npm(node package manager comes with node)
	iii) Install ng-cli (1.1.0)
		$npm install -g angular-cli@1.0.0
	iv)install node packages using npm
		$npm install

	viii) Run angular server
		$npm start

	ix) Go to browser
	x) Hit 'http://localhost:4200'
	Congrates! you are on home page of mobile view.

  xi) Your Admin Account Credentials are:
  username: "test_admin@yopmail.com"
  password: "12345678"

==>Note: To run the rpsec unit test:
  => Go to project_management/backend and
  => $bundle exec rpsec
