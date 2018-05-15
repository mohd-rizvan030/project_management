# == Schema Information
#
# Table name: todo_assignments
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  todo_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_todo_assignments_on_todo_id  (todo_id)
#
# Foreign Keys
#
#  fk_rails_...  (todo_id => todos.id)
#

require 'rails_helper'

RSpec.describe Project, type: :model do
  it "assign a todo to a member" do
    project = Project.create(name: "TestProj01")
    todo = Todo.create(summary: "Test1", project_id: project.id)
    user = User.create(email: "test123@testing.com", password: "test1234")
    expect(TodoAssignment.create(todo_id: todo.id, user_id: user.id)).to be_valid
  end

  it "does not assign a todo to a member without todo_id" do
    user = User.create(email: "test123@testing.com", password: "test1234")
    expect(TodoAssignment.create(user_id: user.id)).to be_invalid
  end

  it "does not assign a todo to a member without user_id" do
    project = Project.create(name: "TestProj01")
    todo = Todo.create(summary: "Test1", project_id: project.id)
    expect(TodoAssignment.create(todo_id: todo.id)).to be_invalid
  end
end
