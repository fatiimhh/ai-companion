import { detectMood } from "./rules";
import { getDooResponse } from "./responses";
import { detectEmotion } from "./emotion";

export function generateDooReply(input: string, context: any) {
  const mood = detectMood(input, context.messageCount);
  const emotion = detectEmotion(input, context.messageCount);

  const response = getDooResponse(input, mood);

  
  return {
    response,
    mood,
    emotion, 
  };
}