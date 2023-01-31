import { Button, ButtonList } from './Feedback.style'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};