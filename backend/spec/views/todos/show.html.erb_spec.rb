require 'rails_helper'

RSpec.describe "todos/show", type: :view do
  before(:each) do
    @todo = assign(:todo, Todo.create!(
      :summary => "Summary",
      :description => "MyText",
      :status => 2,
      :user_id => 3,
      :project => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Summary/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(//)
  end
end
