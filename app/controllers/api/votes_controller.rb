module Api
  class VotesController < ApiController
    def create
      @vote = current_user.votes.new(vote_params)
      if @vote.save
        render json: @vote
      else
        render json: @vote.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private

    def vote_params
      params.require(:vote).permit(:design_id, :challenge_id, :message)
    end
  end
end
  