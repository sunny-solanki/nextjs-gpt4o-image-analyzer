import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

export async function POST(request){
    const {text, image_url} = await request.json()
    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: text },
                  {
                    type: "image_url",
                    image_url: {
                      "url": image_url,
                    },
                  },
                ],
              },
            ],
          });
        return new NextResponse(JSON.stringify(response.choices[0])
    ); 
    } catch(error) {
        return new NextResponse(JSON.stringify("error generating response", error));
    }
}



const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What's in this image?" },
        {
          type: "image_url",
          image_url: {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    },
  ],
});

console.log(response.choices[0]);