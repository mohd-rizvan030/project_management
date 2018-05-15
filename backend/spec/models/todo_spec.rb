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

require 'rails_helper'

RSpec.describe Todo, type: :model do
  it "creates a todo" do
    project = FactoryGirl.create(:project)
    expect(Todo.create(summary: "Test1", project_id: project.id)).to be_valid
  end

  it "does not create a todo without project" do
    expect(Todo.create(summary: "Test1", project_id: nil)).to be_invalid
  end

  it "does not create a todo without summary" do
    project = FactoryGirl.create(:project)
    expect(Todo.create(project_id: project.id)).to be_invalid
  end
end
