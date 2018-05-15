class RemoveColumnsUserIdFromTodo < ActiveRecord::Migration[5.1]
  def change
    remove_column :todos, :user_id
  end
end
