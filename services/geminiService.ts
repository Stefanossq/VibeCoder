
import { GoogleGenAI, Type } from "@google/genai";
import { Quest } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using a placeholder. Please set your API key for the app to function.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "YOUR_API_KEY_HERE" });

const questSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "An epic, gamified title for the entire quest. e.g., 'The Legend of the To-Do List Titan'."
    },
    description: {
        type: Type.STRING,
        description: "A short, motivating description of what the user will achieve. e.g., 'Forge a legendary to-do list application from scratch and master the fundamentals!'"
    },
    steps: {
      type: Type.ARRAY,
      description: "An array of quest steps to complete the project.",
      items: {
        type: Type.OBJECT,
        properties: {
          level: {
            type: Type.INTEGER,
            description: "The level number for this step, starting from 1."
          },
          title: {
            type: Type.STRING,
            description: "A short, action-oriented, gamified title for the step. e.g., 'Level 1: The Scaffolding Ritual'."
          },
          description: {
            type: Type.STRING,
            description: "A concise, one-sentence explanation of the task for this step."
          },
          xp: {
            type: Type.INTEGER,
            description: "Experience points awarded for completing the step, e.g., 100, 150, 250."
          }
        },
        required: ["level", "title", "description", "xp"],
      },
    },
  },
  required: ["title", "description", "steps"],
};


export const generateQuest = async (language: string, projectGoal: string): Promise<Quest> => {
    try {
        const prompt = `
            You are a senior developer and a quest designer for a coding game called VibeCoding.
            A user wants to build a "${projectGoal}" using the programming language/framework "${language}".

            Your mission is to create a short, actionable, step-by-step quest for them.
            The tone must be fun, encouraging, and gamified.
            - Break down the project into 4-6 logical steps.
            - Each step should be a small, clear task.
            - Make the titles for the quest and steps sound exciting and game-like.
            - Assign XP (experience points) to each step based on its relative difficulty.
            - Ensure the steps are in a logical order for a beginner to follow.
            - Do not include any code, just the steps.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: questSchema,
                temperature: 0.8,
            },
        });
        
        const jsonText = response.text.trim();
        const questData = JSON.parse(jsonText);

        // Basic validation
        if (!questData.title || !questData.steps || !Array.isArray(questData.steps)) {
            throw new Error("Invalid quest data structure received from API.");
        }

        return questData as Quest;

    } catch (error) {
        console.error("Error generating quest:", error);
        if (error instanceof Error && error.message.includes('API key not valid')) {
             throw new Error("Invalid API Key. Please check your API key and try again.");
        }
        throw new Error("Failed to generate your coding quest. The AI might be on a coffee break. Please try again!");
    }
};
