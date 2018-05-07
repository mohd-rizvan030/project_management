class TodoSerializer < ActiveModel::Serializer
  attributes :id, :summary, :description, :status, :resource
  
  def resource
    todo_assignment = TodoAssignment.where(todo_id:
   object.id).first
   if todo_assignment
     todo_assignment.user.email
   end
  end
end
