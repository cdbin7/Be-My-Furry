class Shelter < ApplicationRecord
  validates :name, :location, presence: true

  has_many :pets, dependent: :destroy

end
