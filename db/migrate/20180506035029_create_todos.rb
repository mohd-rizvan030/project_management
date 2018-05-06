class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :summary
      t.text :description
      t.integer :status
      t.integer :user_id
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
