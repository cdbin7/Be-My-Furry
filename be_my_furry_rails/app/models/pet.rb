class Pet < ApplicationRecord
  belongs_to :shelter

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user
  
  validates :picture, :name, :age, :gender, :size, :hair, :special_needs, :personality, :sprayed_neutered, :canLiveWithPets, :vaccinated, presence: true
end
