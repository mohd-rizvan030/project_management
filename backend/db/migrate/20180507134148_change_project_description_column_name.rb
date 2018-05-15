class ChangeProjectDescriptionColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :projects, :descrition, :description
  end
end
