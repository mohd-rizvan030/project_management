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

class TodoAssignment < ApplicationRecord
  validates :todo, presence: true, uniqueness: true
  validates :user, presence: true
  belongs_to :todo
  belongs_to :user
end
