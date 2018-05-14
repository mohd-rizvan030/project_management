class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project, only: [:show, :edit, :update, :destroy]

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

  # Returns the resources of this project
  def get_project_resources
    project = Project.where(id: params[:project_id]).first
    if project
      user_ids = project.project_resources.pluck(:user_id)
      users = User.where(id: user_ids)
      render json: users, status: :ok
    else
      render json:  {error: "Project does not exist"} , status: :unprocessable_entity
    end
  end

  # remove the resource from the project
  def remove_resource
    if params[:project_id] and params[:user_id]
      project_resource = ProjectResource.where(project_id: params[:project_id], user_id: params[:user_id]).first
      if project_resource
        begin
          project_resource.destroy
          render json: { success: 'Resource removed successfully' }, status: :ok
        rescue Exception=>e
          render json: {error: e.errors.full_messages.to_sentence }  , status: :unprocessable_entity
        end
      else
        render json:  {error: "No such mapping exists"} , status: :unprocessable_entity
      end
    else
      render json:  {error: "Invalid data"} , status: :unprocessable_entity
    end
  end

# Returns the resources available for this project
  def available_resources
    project = Project.where(id: params[:project_id]).first
    if project
      user_ids = project.project_resources.pluck(:user_id)
      users = User.where.not(id: user_ids)
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
      params.require(:project).permit(:name, :description)
    end
end
