class Pet < ApplicationRecord
  belongs_to :shelter

  has_one_attached :image

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user
  
  validates  :name, :age, :gender, :size, :hair, :personality, presence: true
end
