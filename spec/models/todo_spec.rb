# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  summary     :string
#  description :text
#  status      :integer          default("initial")
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

require 'rails_helper'

RSpec.describe Todo, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
