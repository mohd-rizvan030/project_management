class TodosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  # GET /todos
  # GET /todos.json
  def index
    if params[:project_id]
      authorize! :read, :project_todos, :message => "Not authorized"
      @todos = Todo.where(project_id: params[:project_id])
    elsif params[:myTodos]
      authorize! :read, :my_todos, :message => "Not authorized"
      user_id = current_user.id
      @todos = Todo.joins(:todo_assignment).where("todo_assignments.user_id =?", user_id).order("todos.project_id")
    else
      authorize! :read, :all_todos, :message => "Not authorized"
      @todos = Todo.all.order(:project_id)
    end
    render json: @todos, status: :ok
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    authorize! :read, :todo, :message => "Not authorized"
    if @todo
      render json: @todo, status: :ok
    else
      render json:  {error: "Todo does not exist"} , status: :unprocessable_entity
    end
  end


  # POST /todos
  # POST /todos.json
  def create
    authorize! :create, :todo, :message => "Not authorized"
    @todo = Todo.new(todo_create_params)
    if @todo.save
      render json: @todo, status: :ok
    else
      render json: {error: @todo.errors.full_messages.to_sentence } , status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    todo_assignment = @todo.todo_assignment
    if todo_assignment and todo_assignment.user_id == current_user.id
      authorize! :update, :my_todo, :message => "Not authorized"
    end
    if @todo
      if @todo.update(todo_update_params)
        render json: @todo, status: :ok
      else
        render json: {error: @todo.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "Todo does not exist"} , status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    authorize! :destroy, :todo, :message => "Not authorized"
    if @todo
      if @todo.destroy
        render json: { success: 'Todo was successfully destroyed.' }, status: :ok
      else
        render json: {error: @todo.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "Todo does not exist"} , status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find_by_id(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_create_params
      params.require(:todo).permit(:summary, :description, :project_id)
    end

    def todo_update_params
      params.require(:todo).permit(:summary, :description, :status)
    end
end
