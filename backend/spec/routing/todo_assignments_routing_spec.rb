require "rails_helper"

RSpec.describe TodoAssignmentsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/todo_assignments").to route_to("todo_assignments#index")
    end

    it "routes to #new" do
      expect(:get => "/todo_assignments/new").to route_to("todo_assignments#new")
    end

    it "routes to #show" do
      expect(:get => "/todo_assignments/1").to route_to("todo_assignments#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/todo_assignments/1/edit").to route_to("todo_assignments#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/todo_assignments").to route_to("todo_assignments#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/todo_assignments/1").to route_to("todo_assignments#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/todo_assignments/1").to route_to("todo_assignments#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/todo_assignments/1").to route_to("todo_assignments#destroy", :id => "1")
    end

  end
end
