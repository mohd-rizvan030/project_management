require 'rails_helper'

RSpec.describe ProjectResourcesController, type: :controller do
  def user_login
    user=FactoryGirl.create(:user)
    @u=User.where(email: 'test01@testing.com').first
    if(@u.blank?)
      @u=User.create(email: 'test01@testing.com', password: 'new1life', password_confirmation: 'new1life', is_admin: true)
    end
    @u.save
    sign_in @u
  end
  # This should return the minimal set of attributes required to create a valid
  # TodoAssignment. As you add validations to TodoAssignment, be sure to
  # adjust the attributes here as well.

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # TodoAssignmentsController. Be sure to keep this updated too.


  describe "GET #index" do
    it "returns a success response" do
      user_login
      get :index
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new TodoAssignment" do
        user_login
        project = Project.create(name: "TestProj01")
        user = User.create(email: "test123@testing.com", password: "test1234")
        expect {
          post :create, params: {project_resource: { project_id: project.id, user_id: user.id} }
        }.to change(ProjectResource, :count).by(1)
      end
    end

    context "with invalid params" do
      it "does not create a TodoAssignment" do
        user_login
        user = User.create(email: "test123@testing.com", password: "test1234")
        expect {
          post :create, params: {project_resource: { user_id: user.id} }
        }.to change(ProjectResource, :count).by(0)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested project" do
      user_login
      project = Project.create(name: "TestProj01")
      user = User.create(email: "test123@testing.com", password: "test1234")
      project_resource = ProjectResource.create(project_id: project.id, user_id: user.id)
      expect {
        delete :destroy, params: {id: project_resource.id}
      }.to change(ProjectResource, :count).by(-1)
    end
  end
end
