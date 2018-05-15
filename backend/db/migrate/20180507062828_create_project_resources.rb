class CreateProjectResources < ActiveRecord::Migration[5.1]
  def change
    create_table :project_resources do |t|
      t.integer :user_id
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
