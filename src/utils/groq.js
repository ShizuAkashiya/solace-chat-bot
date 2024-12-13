import { Groq } from 'groq-sdk';

const GROQ_API_KEY = import.meta.env.VITE_GROQ;

const groqInstance = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchGroqResponse = async (prompt) => {
  try {
    const reply = await groqInstance.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-8b-8192',
    });
    return reply.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching response from Groq:', error);
    return 'An error occurred. Please try again.';
  }
};
