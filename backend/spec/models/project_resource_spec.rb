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

require 'rails_helper'

RSpec.describe Project, type: :model do
  it "adds a member to project" do
    project = Project.create(name: "TestProj0101")
    user = User.create(email: "test12301@testing.com", password: "test1234")
    expect(ProjectResource.create(user_id: user.id, project_id: project.id)).to be_valid
  end

  it "does not add member to a project without project id" do
    user = User.create(email: "test123@testing.com", password: "test1234")
    expect(ProjectResource.create(user_id: user.id)).to be_invalid
  end

  it "does not add member to a project without user_id" do
    project = Project.create(name: "TestProj01")
    expect(ProjectResource.create(project_id: project.id)).to be_invalid
  end
end
