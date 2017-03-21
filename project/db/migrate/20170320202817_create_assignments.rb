class CreateAssignments < ActiveRecord::Migration[5.0]
  def change
    create_table :assignments do |t|
      t.string :title
      t.string :img
      t.text :description
      t.text :frontend
      t.text :backend
      t.string :gitlink
      t.string :projectlink
      t.references :user, foreign_key: true
      t.string :username

      t.timestamps
    end
  end
end
