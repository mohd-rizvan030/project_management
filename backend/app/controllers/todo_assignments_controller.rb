class TodoAssignmentsController < ApplicationController
  before_action :set_todo_assignment, only: [:show, :edit, :update, :destroy]

  # GET /todo_assignments
  # GET /todo_assignments.json
  def index
    @todo_assignments = TodoAssignment.all
  end

  # GET /todo_assignments/1
  # GET /todo_assignments/1.json
  def show
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

    respond_to do |format|
      if @todo_assignment.save
        format.html { redirect_to @todo_assignment, notice: 'Todo assignment was successfully created.' }
        format.json { render :show, status: :created, location: @todo_assignment }
      else
        format.html { render :new }
        format.json { render json: @todo_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /todo_assignments/1
  # PATCH/PUT /todo_assignments/1.json
  def update
    respond_to do |format|
      if @todo_assignment.update(todo_assignment_params)
        format.html { redirect_to @todo_assignment, notice: 'Todo assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo_assignment }
      else
        format.html { render :edit }
        format.json { render json: @todo_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todo_assignments/1
  # DELETE /todo_assignments/1.json
  def destroy
    @todo_assignment.destroy
    respond_to do |format|
      format.html { redirect_to todo_assignments_url, notice: 'Todo assignment was successfully destroyed.' }
      format.json { head :no_content }
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
