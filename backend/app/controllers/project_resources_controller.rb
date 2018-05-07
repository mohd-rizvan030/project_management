class ProjectResourcesController < ApplicationController
  before_action :set_project_resource, only: [:show, :edit, :update, :destroy]

  # GET /project_resources
  # GET /project_resources.json
  def index
    @project_resources = ProjectResource.all
  end

  # GET /project_resources/1
  # GET /project_resources/1.json
  def show
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

    respond_to do |format|
      if @project_resource.save
        format.html { redirect_to @project_resource, notice: 'Todo assignment was successfully created.' }
        format.json { render :show, status: :created, location: @project_resource }
      else
        format.html { render :new }
        format.json { render json: @project_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_resources/1
  # PATCH/PUT /project_resources/1.json
  def update
    respond_to do |format|
      if @project_resource.update(project_resource_params)
        format.html { redirect_to @project_resource, notice: 'Todo assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @project_resource }
      else
        format.html { render :edit }
        format.json { render json: @project_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_resources/1
  # DELETE /project_resources/1.json
  def destroy
    @project_resource.destroy
    respond_to do |format|
      format.html { redirect_to project_resources_url, notice: 'Todo assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_resource
      @project_resource = ProjectResource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_resource_params
      params.require(:project_resource).permit(:user_id, :todo_id)
    end
end
