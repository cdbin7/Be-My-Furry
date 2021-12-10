# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shelter.destroy_all
User.destroy_all
Pet.destroy_all

PASSWORD = '123'

super_user = User.create(
    first_name: "Admin",
    last_name: "User",
    email: "admin@user.com",
    address: '2583 McGill St. Vancouver, BC',
    password: PASSWORD,
    admin: true
)

rebecca = User.create(
    first_name: "Rebecca",
    last_name: "Chae",
    email: "test@test.com",
    address: '6888 Royal Oak Ave, Burnaby, BC',
    password: PASSWORD,
    admin: false
)


20.times do 
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  address = Faker::Address.full_address
  User.create(
      first_name:first_name,
      last_name: last_name,
      email: "#{first_name}@#{last_name}.com",
      address: address,
      password: PASSWORD
  )
end

10.times do
  shelter = Shelter.create(
    name: Faker::Name.name,
    location: Faker::Address.full_address
  )
end

shelters = Shelter.all
shelter_sample = shelters.shuffle.slice(0, 10)


# 20.times do
#   pet = Pet.create(
#     name: Faker::Creature::Dog.name,
#     age: rand(1..10),
#     gender: Faker::Creature::Dog.gender,
#     size: Faker::Creature::Dog.size,
#     activity: Faker::Color.color_name,
#     hair: Faker::Creature::Dog.coat_length,
#     special_needs: Faker::Boolean.boolean,
#     personality: Faker::Creature::Dog.meme_phrase,
#     sprayed_neutered: Faker::Boolean.boolean,
#     canLiveWithPets: Faker::Boolean.boolean,
#     house_trained: Faker::Boolean.boolean,
#     vaccinated: Faker::Boolean.boolean,
#     description: Faker::Lorem.sentence(word_count: 20),
#     is_cat: Faker::Boolean.boolean,
#     # image: Faker::LoremFlickr.image(size: "50x60"),
#     shelter_id: shelter_sample[1..10].sample.id
#   )
#   # pet.shelter=shelter_sample[1..10].sample
#   # pet.valid?
#   # byebug
# end


users = User.all
# pets = Pet.all
puts "generated #{shelters.count} shelters"
# puts "generated #{pets.count} pets"
puts "generated #{users.count} uers"