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

RSpec.describe TodoAssignment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
