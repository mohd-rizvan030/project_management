class TodoSerializer < ActiveModel::Serializer
  attributes :id, :summary, :description, :status, :resource,:todo_assignment_id, :project_id

  def resource
    todo_assignment = TodoAssignment.where(todo_id:
   object.id).first
   if todo_assignment
     todo_assignment.user.email
   end
  end

  def todo_assignment_id
    todo_assignment = TodoAssignment.where(todo_id:
   object.id).first
   if todo_assignment
     todo_assignment.id
   end
  end
end
