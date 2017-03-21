class RemoveFieldUsernameFromAssignments < ActiveRecord::Migration[5.0]
  def change
    remove_column :assignments, :username, :string
  end
end
