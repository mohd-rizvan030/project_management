class ProjectResourcesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project_resource, only: [:show, :edit, :update, :destroy]

  # GET /project_resources
  # GET /project_resources.json
  def index
    @project_resources = ProjectResource.all
    render json: @project_resources, status: :ok
  end

  # GET /project_resources/1
  # GET /project_resources/1.json
  def show
    if @project_resource
      render json: @project_resource, status: :ok
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  # GET /project_resources/new
  def new
    @project_resource = ProjectResource.new
  end

  # GET /project_resources/1/edit
  def edit
  end

  # POST /project_resources
  # POST /project_resources.json
  def create
    @project_resource = ProjectResource.new(project_resource_params)
    if @project_resource.save
      render json: @project_resource, status: :ok
    else
      render json: {error: @project_resource.errors.full_messages.to_sentence } , status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_resources/1
  # PATCH/PUT /project_resources/1.json
  def update
    if @project_resource
      if @project_resource.update(project_resource_params)
        render json: @project_resource, status: :ok
      else
        render json: {error: @project_resource.errors.full_messages.to_sentence } , status: :unprocessable_entity
      end
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  # DELETE /project_resources/1
  # DELETE /project_resources/1.json
  def destroy
    if @project_resource
      if @project_resource.destroy
        render json: { success: 'Assignment was successfully destroyed.' }, status: :ok
      else
        render json: {error: @project_resource.errors.full_messages.to_sentence }  , status: :unprocessable_entity
      end
    else
      render json:  {error: "No such assignment exists"} , status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_resource
      @project_resource = ProjectResource.find_by_id(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_resource_params
      params.require(:project_resource).permit(:user_id, :project_id)
    end
end
