const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
exports.getcompletation = async (req,res) =>{
    try{
        const {prompt} = req.body;
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",

    messages: [
        { 
            role: "system", 
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: prompt,
        },
    ],
    store: true,
});
return res.json({
    success:true,
    message: completion.choices[0].message.content
});
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            error: e.message

        });
    }
};

