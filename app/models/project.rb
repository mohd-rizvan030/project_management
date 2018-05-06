# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  name       :string
#  descrition :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
  validates :name, length: { maximum: 255 }, presence: true, uniqueness: true
  validates :descrition, length: { maximum: 1500 }
  has_many :todos
end
