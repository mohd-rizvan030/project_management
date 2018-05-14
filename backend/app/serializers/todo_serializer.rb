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

class TodoSerializer < ActiveModel::Serializer
  attributes :id, :summary, :description, :status, :resource,:todo_assignment_id, :project_id, :project_name

  def resource
    todo_assignment = TodoAssignment.where(todo_id:
   object.id).first
   if todo_assignment
     todo_assignment.user.email
   end
  end

  def project_name
    object.project.name
  end

  def todo_assignment_id
    todo_assignment = TodoAssignment.where(todo_id:
   object.id).first
   if todo_assignment
     todo_assignment.id
   end
  end

  def status
    if object.status == "initial"
      "New"
    else
      object.status.humanize
    end
  end

end
