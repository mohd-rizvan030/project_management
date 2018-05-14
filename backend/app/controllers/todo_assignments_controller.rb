class TodoAssignmentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_todo_assignment, only: [:show, :edit, :update, :destroy]

  # GET /todo_assignments
  # GET /todo_assignments.json
  def index
    @todo_assignments = TodoAssignment.all
    render json: @todo_assignments, status: :ok
  end

  # GET /todo_assignments/1
  # GET /todo_assignments/1.json
  def show
    if @todo_assignment
      render json: @todo_assignment, status: :ok
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  # GET /todo_assignments/new
  def new
    @todo_assignment = TodoAssignment.new
  end

  # GET /todo_assignments/1/edit
  def edit
  end

  # POST /todo_assignments
  # POST /todo_assignments.json
  def create
    @todo_assignment = TodoAssignment.new(todo_assignment_params)
    if @todo_assignment.save
      render json: @todo_assignment, status: :ok
    else
      render json: {error: @todo_assignment.errors.full_messages.to_sentence } , status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_assignments/1
  # PATCH/PUT /todo_assignments/1.json
  def update
    if @todo_assignment
      if @todo_assignment.update(todo_assignment_params)
        render json: @todo_assignment, status: :ok
      else
        render json: {error: @todo_assignment.errors.full_messages.to_sentence } , status: :unprocessable_entity
      end
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  # DELETE /todo_assignments/1
  # DELETE /todo_assignments/1.json
  def destroy
    if @todo_assignment
      if @todo_assignment.destroy
        render json: { success: 'Assignment was successfully destroyed.' }, status: :ok
      else
        render json: {error: @todo_assignment.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo_assignment
      @todo_assignment = TodoAssignment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_assignment_params
      params.require(:todo_assignment).permit(:user_id, :todo_id)
    end
end
