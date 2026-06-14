import type { DooContext, Mood } from "./types";
import { detectMood } from "./rules";
import { getDooResponse } from "./responses";

export function generateDooReply(
  input: string,
  context: DooContext
) {
  const mood: Mood = detectMood(input, context);

  const response = getDooResponse(input, mood);

  return {
    response,
    mood,
  };
}