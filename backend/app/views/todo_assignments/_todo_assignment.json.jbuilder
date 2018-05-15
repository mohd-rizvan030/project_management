json.extract! todo_assignment, :id, :user_id, :todo_id, :created_at, :updated_at
json.url todo_assignment_url(todo_assignment, format: :json)
