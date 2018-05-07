class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :get_resources, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render json: @projects, status: :ok
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    if @project
      render json: @project, status: :ok
    else
      render json:  {error: "Project does not exist"} , status: :unprocessable_entity
    end
  end


  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project, status: :ok
    else
      render json: {error: @project.errors.full_messages.to_sentence } , status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    if @project
      if @project.update(project_params)
        render json: @project, status: :ok
      else
        render json: {error: @project.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "Project does not exist"} , status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    if @project
      if @project.destroy
        render json: { success: 'Project was successfully destroyed.' }, status: :ok
      else
        render json: {error: @project.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "Project does not exist"} , status: :unprocessable_entity
    end
  end

  def get_resources
    if @project
      user_ids = @project.project_resources.pluck(:user_id)
      users = User.where(id: user_ids)
      render json: users, status: :ok
    else
      render json:  {error: "Project does not exist"} , status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find_by_id(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:name, :descrition)
    end
end
