# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Admin Account
User.create(email: "test_admin@yopmail.com", password: "12345678", is_admin: true)

# Create Project Members Account
20.times do |i|
  User.create(email: "test_member#{i}@yopmail.com", password: "12345678")
end
