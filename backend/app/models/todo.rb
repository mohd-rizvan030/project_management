# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  summary     :string
#  description :text
#  status      :integer          default("initial")
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
  # Not using status 'new' but 'initial' because 'new' method already exist and rails is not letting me use that status
  enum status: [:initial, :in_progress, :done]
  validates :summary, presence: true, length: { maximum: 255 }
  validates :status, presence: true
  validates :project, presence: true
  belongs_to :project
end
