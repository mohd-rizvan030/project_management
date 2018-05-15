require 'rails_helper'

RSpec.describe "TodoAssignments", type: :request do
  describe "GET /todo_assignments" do
    it "works! (now write some real specs)" do
      get todo_assignments_path
      expect(response).to have_http_status(200)
    end
  end
end
