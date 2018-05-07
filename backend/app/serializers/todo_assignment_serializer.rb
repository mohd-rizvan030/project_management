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

class TodoAssignmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_one :todo
end
