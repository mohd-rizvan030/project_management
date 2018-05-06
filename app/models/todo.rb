# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  summary     :string
#  description :text
#  status      :integer
#  user_id     :integer
#  project_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_todos_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#

class Todo < ApplicationRecord
  belongs_to :project
end
