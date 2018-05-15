# == Schema Information
#
# Table name: project_resources
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_project_resources_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#

class ProjectResource < ApplicationRecord
  validates :project, presence: true, uniqueness: { scope: :user, message: "Resource has already been assigned to the given project" }
  validates :user, presence: true
  belongs_to :project
  belongs_to :user
end
