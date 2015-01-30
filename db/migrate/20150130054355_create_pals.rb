class CreatePals < ActiveRecord::Migration
  def change
    create_table :pals do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
