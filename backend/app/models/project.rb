# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :name, length: { maximum: 255 }, presence: true, uniqueness: true
  validates :description, length: { maximum: 2000 }
  has_many :todos, dependent: :destroy
  has_many :project_resources, dependent: :destroy
end
