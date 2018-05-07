require 'rails_helper'

RSpec.describe "todo_assignments/new", type: :view do
  before(:each) do
    assign(:todo_assignment, TodoAssignment.new(
      :user_id => 1,
      :todo => nil
    ))
  end

  it "renders new todo_assignment form" do
    render

    assert_select "form[action=?][method=?]", todo_assignments_path, "post" do

      assert_select "input[name=?]", "todo_assignment[user_id]"

      assert_select "input[name=?]", "todo_assignment[todo_id]"
    end
  end
end
