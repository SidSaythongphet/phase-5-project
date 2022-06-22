class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.belongs_to :family, null: false, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
