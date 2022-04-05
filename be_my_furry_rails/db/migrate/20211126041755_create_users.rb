class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index:{unique: true}
      t.string :address
      t.string :password_digest
      t.boolean :admin, null:false, default: false

      t.timestamps
    end
    
  end
end
