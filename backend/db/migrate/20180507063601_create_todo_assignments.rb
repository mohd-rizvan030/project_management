class CreateTodoAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_assignments do |t|
      t.integer :user_id
      t.references :todo, foreign_key: true

      t.timestamps
    end
  end
end
