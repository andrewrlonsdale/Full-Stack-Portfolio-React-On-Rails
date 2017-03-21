class AssignmentsController < ApplicationController
  # before_action :authenticate_user!, :except => [:show, :index]
  
  def index
    assignments = Assignment.all  
    render :json => assignments.to_json()
  end

  def create
    assignment = assignment_params
    assignment[:user_id] = current_user.id
    Assignment.create(assignment)
    render json: assignment, status: :created
  end

  def show
    assignment = Assignment.find(params[:id])
    render :json => assignment.as_json({
      include:
      [:user]
      })
  end

  def update
    assignment = Assignment.find(params[:id])

    if assignment.destroy!
      render({json: {status: :success}})
    else
      render({json: {status: :delete_failed}})
    end

  end

  def destroy
    assignment = Assignment.find(params[:id])

    if assignment.destroy!
      render({json: {status: :success}})
    else
      render({json: {status: :delete_failed}})
    end

  end


  private
  def assignment_params
    params.require(:assignment).permit([:image, :title, :embeded])
  end

end
