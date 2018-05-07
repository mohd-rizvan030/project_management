require 'rails_helper'

RSpec.describe "todo_assignments/edit", type: :view do
  before(:each) do
    @todo_assignment = assign(:todo_assignment, TodoAssignment.create!(
      :user_id => 1,
      :todo => nil
    ))
  end

  it "renders the edit todo_assignment form" do
    render

    assert_select "form[action=?][method=?]", todo_assignment_path(@todo_assignment), "post" do

      assert_select "input[name=?]", "todo_assignment[user_id]"

      assert_select "input[name=?]", "todo_assignment[todo_id]"
    end
  end
end
