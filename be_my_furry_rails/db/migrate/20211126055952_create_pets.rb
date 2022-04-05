class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :size
      t.string :activity
      t.string :hair
      t.boolean :special_needs
      t.string :personality
      t.boolean :sprayed_neutered
      t.boolean :canLiveWithPets
      t.boolean :house_trained
      t.boolean :vaccinated
      t.text :description
      t.boolean :is_cat, default: false
      t.references :shelter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
