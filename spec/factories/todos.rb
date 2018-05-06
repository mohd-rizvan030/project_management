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

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :todo do
    summary "MyString"
    description "MyText"
    status 1
    user_id 1
    project nil
  end
end
